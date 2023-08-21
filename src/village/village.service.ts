import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateVillageInput } from './dto/create-village.input';
import { UpdateVillageInput } from './dto/update-village.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class VillageService {
  constructor(private readonly prisma: PrismaService) {}

  async getVillageById(id: number) {
    const village = await this.prisma.village.findFirst({
      where: { id },
    });

    if (!village)
      throw new BadRequestException('No village exist with this id.');
    return village;
  }

  async getAllVillage() {
    const village = await this.prisma.village.findMany();
    if (village.length == 0) throw new BadRequestException('No village exist.');
    return village;
  }
}
