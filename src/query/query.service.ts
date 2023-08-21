import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQueryInput } from './dto/create-query.input';
import { UpdateQueryInput } from './dto/update-query.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchQueryInput } from './dto/search-query.input';

@Injectable()
export class QueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllQuery() {
    const query = await this.prisma.query.findMany({
      where: { deletedAt: null },
    });
    if (query.length == 0) throw new BadRequestException('There is no query.');
    return query;
  }

  async getQueryById(id: number) {
    const query = await this.prisma.query.findFirst({
      where: { id, deletedAt: null },
    });
    if (!query) throw new BadRequestException('No query exist with this id.');
    return query;
  }

  async searchQuery(search: SearchQueryInput) {
    if (search.query_type == 'PUBLIC') {
      const searchData = await this.prisma.query.findMany({
        where: {
          form_id: search.form_id,
          stage: search.stage,
          query_type: 'PUBLIC',
        },
        include: { from_user: true, to_user: true },
      });

      if (searchData.length == 0)
        throw new NotFoundException(`No query Found.`);

      return searchData;
    } else if (search.query_type == 'INTER') {
      const searchData = await this.prisma.query.findMany({
        where: {
          form_id: search.form_id,
          stage: search.stage,
          OR: [{ query_type: 'PUBLIC' }, { query_type: 'INTRA' }],
        },
        include: { from_user: true, to_user: true },
      });

      if (searchData.length == 0)
        throw new NotFoundException(`No query Found.`);

      return searchData;
    } else {
      const searchData = await this.prisma.query.findMany({
        where: {
          form_id: search.form_id,
          stage: search.stage,
        },
        include: { from_user: true, to_user: true },
      });

      if (searchData.length == 0)
        throw new NotFoundException(`No query Found.`);

      return searchData;
    }
  }

  async createQuery(query: CreateQueryInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(query)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Query = await this.prisma.query.create({
      data: dataToCreate,
    });

    if (!Query) throw new BadRequestException('Unable to create query');
    return Query;
  }

  async updateQueryById(query: UpdateQueryInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(query)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.query.findUnique({
      where: { id: query.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Query with id ${query.id} not found`);
    }

    const updatedquery = this.prisma.query.update({
      where: { id: query.id },
      data: dataToUpdate,
    });
    if (!updatedquery) throw new BadRequestException('Unable to update query.');
    return updatedquery;
  }

  async deleteQueryById(query: UpdateQueryInput) {
    const existing = await this.prisma.query.findUnique({
      where: { id: query.id },
    });

    if (!existing) {
      throw new NotFoundException(`Query with id ${query.id} not found`);
    }

    const deleteQuery = this.prisma.query.update({
      where: { id: query.id },
      data: { deletedAt: query.deletedAt },
    });

    if (!deleteQuery) throw new BadRequestException('Unable to update query.');
    return deleteQuery;
  }
}
