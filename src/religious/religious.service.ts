import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReligiousInput } from './dto/create-religious.input';
import { UpdateReligiousInput } from './dto/update-religious.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ReligiousService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllReligious() {
    const religious = await this.prisma.religious_form.findMany({
      where: { deletedAt: null },
    });
    if (religious.length == 0)
      throw new BadRequestException('There is no religious form.');
    return religious;
  }

  async getReligiousById(id: number) {
    const religious = await this.prisma.religious_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!religious)
      throw new BadRequestException('No religious form exist with this id.');
    return religious;
  }

  async createReligious(religious: CreateReligiousInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(religious)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Religious = await this.prisma.religious_form.create({
      data: dataToCreate,
    });

    if (!Religious)
      throw new BadRequestException('Unable to create religious form');
    return Religious;
  }

  async updateReligiousById(religious: UpdateReligiousInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(religious)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.religious_form.findUnique({
      where: { id: religious.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `Religious with id ${religious.id} not found`,
      );
    }

    const updatedReligious = this.prisma.religious_form.update({
      where: { id: religious.id },
      data: dataToUpdate,
    });
    if (!updatedReligious)
      throw new BadRequestException('Unable to update religious.');
    return updatedReligious;
  }

  async deleteReligiousById(religious: UpdateReligiousInput) {
    const existing = await this.prisma.religious_form.findUnique({
      where: { id: religious.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Religious with id ${religious.id} not found`,
      );
    }

    const deleteReligious = this.prisma.religious_form.update({
      where: { id: religious.id },
      data: { deletedAt: religious.deletedAt },
    });

    if (!deleteReligious)
      throw new BadRequestException('Unable to update religious.');
    return deleteReligious;
  }
}
