import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateSpotInput, SpotsService } from '@app/core/spots/spots.service';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() createSpotDto: CreateSpotInput,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({
      ...createSpotDto,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('eventId') eventId: string, @Param('id') spotId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('eventId') eventId: string,
    @Param('id') spotId: string,
    @Body() updateSpotDto: AtualizarLugarRequest,
  ) {
    return this.spotsService.update(eventId, spotId, updateSpotDto);
  }

  @Delete(':spotId')
  remove(@Param('eventId') eventId: string, @Param('id') spotId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
