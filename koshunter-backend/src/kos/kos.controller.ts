import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { KosService } from './kos.service';
import { CreateKoDto } from './dto/create-ko.dto';
import { UpdateKoDto } from './dto/update-ko.dto';

@Controller('kos')
export class KosController {
  constructor(private readonly kosService: KosService) {}

  @Post()
  create(@Body() createKoDto: CreateKoDto) {
    return this.kosService.create(createKoDto);
  }

  @Get()
  findAll() {
    return this.kosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.kosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKoDto: UpdateKoDto,
  ) {
    return this.kosService.update(id, updateKoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kosService.remove(id);
  }
}