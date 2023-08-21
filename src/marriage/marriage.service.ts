import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMarriageInput } from './dto/create-marriage.input';
import { UpdateMarriageInput } from './dto/update-marriage.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MarriageService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMarriage() {
    const marriage = await this.prisma.marriage_form.findMany({
      where: { deletedAt: null },
    });
    if (marriage.length == 0)
      throw new BadRequestException('There is no marriage.');
    return marriage;
  }

  async getMarriageById(id: number) {
    const marriage = await this.prisma.marriage_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!marriage)
      throw new BadRequestException('No marriage exist with this id.');
    return marriage;
  }

  async createMarriage(marriage: CreateMarriageInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(marriage)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Marriage = await this.prisma.marriage_form.create({
      data: dataToCreate,
    });

    if (!Marriage) throw new BadRequestException('Unable to create marriage');
    return Marriage;
  }

  async updateMarriageById(marriage: UpdateMarriageInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(marriage)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.marriage_form.findUnique({
      where: { id: marriage.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Marriage with id ${marriage.id} not found`);
    }

    const updatedMarriage = this.prisma.marriage_form.update({
      where: { id: marriage.id },
      data: dataToUpdate,
    });
    if (!updatedMarriage)
      throw new BadRequestException('Unable to update marriage.');
    return updatedMarriage;
  }

  async deleteMarriageById(marriage: UpdateMarriageInput) {
    const existing = await this.prisma.marriage_form.findUnique({
      where: { id: marriage.id },
    });

    if (!existing) {
      throw new NotFoundException(`Marriage with id ${marriage.id} not found`);
    }

    const deleteMarriage = this.prisma.marriage_form.update({
      where: { id: marriage.id },
      data: { deletedAt: marriage.deletedAt },
    });

    if (!deleteMarriage)
      throw new BadRequestException('Unable to update marriage.');
    return deleteMarriage;
  }
}
