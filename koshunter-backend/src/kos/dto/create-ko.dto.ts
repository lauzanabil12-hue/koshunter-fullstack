import {
  IsString,
  MinLength,
  IsNumber,
  Min,
  IsIn,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateKoDto {
  @IsString({ message: 'Nama kos harus berupa teks' })
  @MinLength(3, { message: 'Nama kos minimal 3 karakter' })
  namaKos: string;

  @IsNumber({}, { message: 'Harga per bulan harus berupa angka' })
  @Min(100000, { message: 'Harga per bulan minimal Rp 100.000' })
  hargaPerBulan: number;

  @IsString()
  @IsIn(['Putra', 'Putri', 'Campur'], {
    message: 'Tipe kos harus Putra, Putri, atau Campur',
  })
  tipeKos: 'Putra' | 'Putri' | 'Campur';

  @IsString()
  @MinLength(5, { message: 'Lokasi minimal 5 karakter' })
  lokasi: string;

  @IsOptional()
  @IsBoolean({ message: 'Status tersedia harus boolean (true/false)' })
  tersedia?: boolean;
}