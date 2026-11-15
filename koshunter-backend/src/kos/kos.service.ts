import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateKoDto } from './dto/create-ko.dto';
import { UpdateKoDto } from './dto/update-ko.dto';
import { Ko } from './entities/ko.entity';

@Injectable()
export class KosService {
  private kosList: Ko[] = [
    {
      id: 1,
      namaKos: 'Kos Putra Sukabirus Jaya',
      hargaPerBulan: 850000,
      tipeKos: 'Putra',
      lokasi: 'Jl. Sukabirus No. 12, Dayeuhkolot',
      tersedia: true,
    },
    {
      id: 2,
      namaKos: 'Pondok Putri Sukapura Asri',
      hargaPerBulan: 1100000,
      tipeKos: 'Putri',
      lokasi: 'Jl. Sukapura No. 45, Bojongsoang',
      tersedia: true,
    },
  ];

  private nextId = 3;

  create(createKoDto: CreateKoDto): Ko {
    const isDuplicate = this.kosList.some(
      (item) =>
        item.namaKos.toLowerCase() === createKoDto.namaKos.toLowerCase(),
    );

    if (isDuplicate) {
      throw new ConflictException(
        `Kos dengan nama "${createKoDto.namaKos}" sudah terdaftar`,
      );
    }

    const newKos: Ko = {
      id: this.nextId++,
      namaKos: createKoDto.namaKos,
      hargaPerBulan: createKoDto.hargaPerBulan,
      tipeKos: createKoDto.tipeKos,
      lokasi: createKoDto.lokasi,
      tersedia: createKoDto.tersedia ?? true,
    };

    this.kosList.push(newKos);
    return newKos;
  }

  findAll(): Ko[] {
    return this.kosList;
  }

  findOne(id: number): Ko {
    const kos = this.kosList.find((item) => item.id === id);
    if (!kos) {
      throw new NotFoundException(`Data kos dengan ID ${id} tidak ditemukan`);
    }
    return kos;
  }

  update(id: number, updateKoDto: UpdateKoDto): Ko {
    const kos = this.findOne(id);

    if (updateKoDto.namaKos) {
      const isDuplicate = this.kosList.some(
        (item) =>
          item.id !== id &&
          item.namaKos.toLowerCase() === updateKoDto.namaKos!.toLowerCase(),
      );
      if (isDuplicate) {
        throw new ConflictException(
          `Kos dengan nama "${updateKoDto.namaKos}" sudah digunakan`,
        );
      }
    }

    Object.assign(kos, updateKoDto);
    return kos;
  }

  remove(id: number): { message: string; deleted: Ko } {
    const index = this.kosList.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Data kos dengan ID ${id} tidak ditemukan`);
    }

    const [deleted] = this.kosList.splice(index, 1);
    return {
      message: `Data kos "${deleted.namaKos}" berhasil dihapus`,
      deleted,
    };
  }
}