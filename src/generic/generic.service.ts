import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGenericInput } from './dto/create-generic.input';
import { UpdateGenericInput } from './dto/update-generic.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class GenericService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGenerics() {
    const generics = await this.prisma.generic_form.findMany({
      where: { deletedAt: null },
    });
    if (generics.length == 0)
      throw new BadRequestException('There is no generic form.');
    return generics;
  }

  async getGenericById(id: number) {
    const generic = await this.prisma.generic_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!generic)
      throw new BadRequestException('No generic form exist with this id.');
    return generic;
  }

  async createGeneric(generic: CreateGenericInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(generic)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Generic = await this.prisma.generic_form.create({
      data: dataToCreate,
    });

    if (!Generic)
      throw new BadRequestException('Unable to create generic form');
    return Generic;
  }

  async updateGenericById(generic: UpdateGenericInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(generic)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.generic_form.findUnique({
      where: { id: generic.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Generic with id ${generic.id} not found`);
    }

    const updatedGeneric = this.prisma.generic_form.update({
      where: { id: generic.id },
      data: dataToUpdate,
    });
    if (!updatedGeneric)
      throw new BadRequestException('Unable to update generic.');
    return updatedGeneric;
  }

  async deleteGenericById(generic: UpdateGenericInput) {
    const existing = await this.prisma.generic_form.findUnique({
      where: { id: generic.id },
    });

    if (!existing) {
      throw new NotFoundException(`Generic with id ${generic.id} not found`);
    }

    const deleteGeneric = this.prisma.generic_form.update({
      where: { id: generic.id },
      data: { deletedAt: generic.deletedAt },
    });

    if (!deleteGeneric)
      throw new BadRequestException('Unable to update generic.');
    return deleteGeneric;
  }
}
