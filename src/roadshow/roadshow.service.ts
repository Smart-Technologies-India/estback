import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoadshowInput } from './dto/create-roadshow.input';
import { UpdateRoadshowInput } from './dto/update-roadshow.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RoadshowService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRoadshow() {
    const roadshow = await this.prisma.roadshow_form.findMany({
      where: { deletedAt: null },
    });
    if (roadshow.length == 0)
      throw new BadRequestException('There is no roadshow.');
    return roadshow;
  }

  async getRoadshowById(id: number) {
    const roadshow = await this.prisma.roadshow_form.findFirst({
      where: { id, deletedAt: null },
    });
    if (!roadshow)
      throw new BadRequestException('No roadshow exist with this id.');
    return roadshow;
  }

  async createRoadshow(roadshow: CreateRoadshowInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(roadshow)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Roadshow = await this.prisma.roadshow_form.create({
      data: dataToCreate,
    });

    if (!Roadshow) throw new BadRequestException('Unable to create roadshow');

    console.log(Roadshow);
    return Roadshow;
  }

  async updateRoadshowById(roadshow: UpdateRoadshowInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(roadshow)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.roadshow_form.findUnique({
      where: { id: roadshow.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Roadshow with id ${roadshow.id} not found`);
    }

    const updatedRoadshow = this.prisma.roadshow_form.update({
      where: { id: roadshow.id },
      data: dataToUpdate,
    });
    if (!updatedRoadshow)
      throw new BadRequestException('Unable to update roadshow.');
    return updatedRoadshow;
  }

  async deleteRoadshowById(roadshow: UpdateRoadshowInput) {
    const existing = await this.prisma.roadshow_form.findUnique({
      where: { id: roadshow.id },
    });

    if (!existing) {
      throw new NotFoundException(`Roadshow with id ${roadshow.id} not found`);
    }

    const deleteRoadshow = this.prisma.roadshow_form.update({
      where: { id: roadshow.id },
      data: { deletedAt: roadshow.deletedAt },
    });

    if (!deleteRoadshow)
      throw new BadRequestException('Unable to update roadshow.');
    return deleteRoadshow;
  }
}
