import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommonInput } from './dto/create-common.input';
import { UpdateCommonInput } from './dto/update-common.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchCommonInput } from './dto/search-common.input';
import { FilterCommonInput, UserType } from './dto/filter-common.input';

@Injectable()
export class CommonService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCommon() {
    const common = await this.prisma.common.findMany({
      where: { deletedAt: null },
    });
    if (common.length == 0) throw new BadRequestException('No Entry Found.');
    return common;
  }

  async searchCommon(common: SearchCommonInput) {
    if (common.name) {
      const search_name = common.name;
      delete common.name;
      const results = await this.prisma.common.findMany({
        where: {
          ...common,
          name: { contains: search_name },
        },
        include: {
          user: true,
        },
      });

      if (results.length == 0) throw new BadRequestException('No Entry Found.');
      return results;
    } else {
      const results = await this.prisma.common.findMany({
        where: common,
        include: {
          user: true,
        },
      });

      if (results.length == 0) throw new BadRequestException('No Entry Found.');
      return results;
    }
  }

  async filterCommon(filter: FilterCommonInput) {
    if (filter.user_type == UserType.USER) {
      const whereClause: any = { user_id: filter.user_id };

      if (filter.form_type !== null && filter.form_type !== undefined) {
        whereClause.form_type = filter.form_type;
      }
      const result = await this.prisma.common.findMany({
        where: whereClause,
      });
      if (result.length == 0)
        throw new NotFoundException(`NO Common data found for this user. `);
      return result;
    } else {
      const whereClause: any = {
        OR: [
          { auth_user_id: { contains: filter.user_id.toString() } },
          { focal_user_id: { contains: filter.user_id.toString() } },
          { intra_user_id: { contains: filter.user_id.toString() } },
          { inter_user_id: { contains: filter.user_id.toString() } },
        ],
      };

      if (filter.form_type !== null && filter.form_type !== undefined) {
        whereClause.form_type = filter.form_type;
      }
      const result = await this.prisma.common.findMany({
        where: { ...whereClause, deletedAt: null },
      });
      if (result.length == 0)
        throw new NotFoundException(`NO Common data found for this user. `);

      return result;
    }
  }

  // async getShoApprovedFiles(filter: FilterCommonInput) {
  //   const query = await this.prisma.query.findMany({
  //     where: {
  //       to_user_id: filter.user_id,
  //       deletedAt: null,
  //     },
  //   });

  //   const queryids = query.map((q) => q.form_id);
  //   // if (filter.user_type == UserType.USER) {
  //   //   const whereClause: any = { user_id: filter.user_id };

  //   //   if (filter.form_type !== null && filter.form_type !== undefined) {
  //   //     whereClause.form_type = filter.form_type;
  //   //   }
  //   //   const result = await this.prisma.common.findMany({
  //   //     where: whereClause,
  //   //   });
  //   //   if (result.length == 0)
  //   //     throw new NotFoundException(`NO Common data found for this user. `);
  //   //   return result;
  //   // } else {
  //   //   const whereClause: any = {
  //   //     OR: [
  //   //       { auth_user_id: { contains: filter.user_id.toString() } },
  //   //       { focal_user_id: { contains: filter.user_id.toString() } },
  //   //       { intra_user_id: { contains: filter.user_id.toString() } },
  //   //       { inter_user_id: { contains: filter.user_id.toString() } },
  //   //     ],
  //   //   };

  //   //   if (filter.form_type !== null && filter.form_type !== undefined) {
  //   //     whereClause.form_type = filter.form_type;
  //   //   }
  //   //   const result = await this.prisma.common.findMany({
  //   //     where: { ...whereClause, deletedAt: null },
  //   //   });
  //   //   if (result.length == 0)
  //   //     throw new NotFoundException(`NO Common data found for this user. `);

  //   //   return result;
  //   // }
  // }

  async getAllCommonById(id: number) {
    const common = await this.prisma.common.findFirst({
      where: { id, deletedAt: null },
    });
    if (!common) throw new BadRequestException('No common exist with this id.');
    return common;
  }

  async createCommon(common: CreateCommonInput) {
    const dataToCreate: any = {};

    const isExist = await this.prisma.common.findFirst({
      where: {
        form_id: common.form_id,
        user_id: common.user_id,
        deletedAt: null,
      },
    });

    if (isExist) {
      throw new BadRequestException(
        'Common entry already exists for this form and user.',
      );
    }

    for (const [key, value] of Object.entries(common)) {
      if (value != null && value !== undefined) {
        dataToCreate[key] = value;
      }
    }

    const Common = await this.prisma.common.create({
      data: dataToCreate,
    });

    if (!Common) throw new BadRequestException('Unable to create common');
    return Common;
  }

  async updateCommonById(common: UpdateCommonInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(common)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.common.findUnique({
      where: { id: common.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Common with id ${common.id} not found`);
    }

    const updatedCommon = this.prisma.common.update({
      where: { id: common.id },
      data: dataToUpdate,
    });
    if (!updatedCommon)
      throw new BadRequestException('Unable to update common.');
    return updatedCommon;
  }

  async deleteCommonById(common: UpdateCommonInput) {
    const existing = await this.prisma.common.findUnique({
      where: { id: common.id },
    });

    if (!existing) {
      throw new NotFoundException(`Common with id ${common.id} not found`);
    }

    const deleteCommon = this.prisma.common.update({
      where: { id: common.id },
      data: { deletedAt: common.deletedAt },
    });

    if (!deleteCommon)
      throw new BadRequestException('Unable to update common.');
    return deleteCommon;
  }

  async getFileCount() {
    const countByFormType = {};
    const formTypes = ['MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC'];

    const count = await this.prisma.common.groupBy({
      by: ['form_type'],
      where: {
        OR: [
          {
            query_status: 'INPROCESS',
          },
          {
            query_status: 'NONE',
          },
          {
            query_status: 'QUERYRAISED',
          },
          {
            query_status: 'SUBMIT',
          },
        ],
        deletedAt: null,
      },
      _count: {
        _all: true,
      },
    });

    formTypes.forEach((formType) => {
      const matchingEntry = count.find(
        (entry) => entry.form_type.toUpperCase() === formType.toUpperCase(),
      );
      countByFormType[formType] = matchingEntry ? matchingEntry._count._all : 0;
    });

    return countByFormType;
  }

  async villageFileCount() {
    const count = await this.prisma.common.groupBy({
      by: ['village'],
      _count: {
        _all: true,
      },
    });
    const formattedResult = count.map((entry) => ({
      village: entry.village,
      count: entry._count._all,
    }));
    return formattedResult;
  }

  async officerFileCount() {
    const count = await this.prisma.common.groupBy({
      where: {
        OR: [
          {
            query_status: 'INPROCESS',
          },
          {
            query_status: 'NONE',
          },
          {
            query_status: 'QUERYRAISED',
          },
          {
            query_status: 'SUBMIT',
          },
        ],
      },
      by: ['auth_user_id'],
      _count: {
        _all: true,
      },
    });
    const formattedCount = count.reduce((result, item) => {
      let label;
      switch (item.auth_user_id) {
        case '1':
          label = 'system';
          break;
        case '2':
          label = 'admin';
          break;
        case '3':
          label = 'collector';
          break;
        case '4':
          label = 'dycollector';
          break;
        case '5':
          label = 'suptd';
          break;
        case '6':
          label = 'ldc';
          break;
        case '7':
          label = 'udc';
          break;
        case '8':
          label = 'sho';
          break;
        default:
          label = item.auth_user_id;
      }
      if (item.auth_user_id !== '0') {
        result.push({ count: item._count._all, auth_user_id: label });
      }
      return result;
    }, []);
    return formattedCount;
  }

  async officerFileProgress() {
    const countByFormType = {};
    const formTypes = ['MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC'];
    // const queryStatus = [
    //   ['NONE', 'SUBMIT', 'INPROCESS', 'QUERYRAISED'],
    //   ['APPROVED', 'CERTIFICATEGRANT', 'COMPLETED'],
    //   ['REJECTED'],
    // ];
    const queryStatus = [
      ['NONE', 'SUBMIT', 'INPROCESS', 'QUERYRAISED'],
      ['APPROVED', 'CERTIFICATEGRANT', 'COMPLETED'],
      ['REJECTED'],
    ];

    const count = await this.prisma.common.groupBy({
      by: ['form_type', 'query_status'], // Group by form_type and query_status
      _count: {
        _all: true,
      },
    });

    formTypes.forEach((formType) => {
      const matchingEntries = count.filter(
        (entry) =>
          entry.form_type.toUpperCase() === formType.toUpperCase() &&
          entry.query_status !== undefined, // Check if query_status exists
      );

      const countByStatus = {
        pending: 0,
        completed: 0,
        rejected: 0,
      };

      matchingEntries.forEach((entry) => {
        const status = entry.query_status.toUpperCase();
        if (queryStatus[0].includes(status)) {
          countByStatus.pending += entry._count._all;
        } else if (queryStatus[1].includes(status)) {
          countByStatus.completed += entry._count._all;
        } else if (queryStatus[2].includes(status)) {
          countByStatus.rejected += entry._count._all;
        }
      });

      countByFormType[formType] = countByStatus;
    });

    return countByFormType;
  }

  async villageFileProgress() {
    const formTypes = ['MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC'];

    const village = await this.prisma.village.findMany({
      select: { name: true },
    });
    const villageNames = village.map((village) => village.name);
    const counts = await this.prisma.common.groupBy({
      by: ['village', 'form_type'],
      _count: {
        _all: true,
      },
    });

    const formattedResult = villageNames.map((villageName) => {
      const villageCounts = counts.filter(
        (entry) => entry.village === villageName,
      );
      const villageFileCounts = formTypes.map((formType) => {
        const count = villageCounts.find(
          (entry) => entry.form_type === formType,
        );
        return {
          formType: formType,
          count: count ? count._count._all : 0,
        };
      });

      return {
        village: villageName,
        fileCounts: villageFileCounts,
      };
    });
    return formattedResult;
  }

  async downloadReport() {
    // 1. Fetch all forms (filtering deletedAt)
    const marriageForms = await this.prisma.marriage_form.findMany({
      where: { deletedAt: null },
    });
    const religiousForms = await this.prisma.religious_form.findMany({
      where: { deletedAt: null },
    });
    const roadshowForms = await this.prisma.roadshow_form.findMany({
      where: { deletedAt: null },
    });
    const genericForms = await this.prisma.generic_form.findMany({
      where: { deletedAt: null },
    });

    // 2. Fetch relevant commons
    const commons = await this.prisma.common.findMany({
      where: {
        OR: [
          {
            form_type: { in: ['RELIGIOUS', 'ROADSHOW', 'GENERIC', 'MARRIAGE'] },
            form_status: 225,
          },
        ],
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)), // last 30 days
        },
      },
      orderBy: {
        event_date: 'asc',
      },
    });

    // 3. Create lookup maps for fast access
    const marriageMap = new Map(marriageForms.map((m) => [m.id, m]));
    const religiousMap = new Map(religiousForms.map((r) => [r.id, r]));
    const roadshowMap = new Map(roadshowForms.map((r) => [r.id, r]));
    const genericMap = new Map(genericForms.map((g) => [g.id, g]));

    // 4. Transform commons + match with correct form
    const grouped: Record<string, any[]> = {};
    commons.forEach((c) => {
      let formData: any = null;
      if (c.form_type === 'MARRIAGE') formData = marriageMap.get(c.form_id);
      if (c.form_type === 'RELIGIOUS') formData = religiousMap.get(c.form_id);
      if (c.form_type === 'ROADSHOW') formData = roadshowMap.get(c.form_id);
      if (c.form_type === 'GENERIC') formData = genericMap.get(c.form_id);

      const row = {
        applicantName: c.name,
        applicantAddress: formData?.address ?? '',
        applicationDate: c.event_date
          ? new Date(c.event_date).toISOString().split('T')[0]
          : '',
        eventName: formData?.event_name ?? '',
        permissionAddress: formData?.event_address ?? '',
        permissionDate:
          formData?.from_date && formData?.to_date
            ? `${new Date(formData.from_date).toISOString().split('T')[0]} to ${new Date(formData.to_date).toISOString().split('T')[0]}`
            : '',
        routeInfo: formData?.route_info ?? '',
        mobile: c.number ?? formData?.mobile ?? '',
        email: formData?.email ?? '',
        relation: formData?.relation ?? '',
        formType: c.form_type,
      };

      if (!grouped[c.form_type]) grouped[c.form_type] = [];
      grouped[c.form_type].push(row);
    });

    // 5. Add row numbers (like ROW_NUMBER OVER PARTITION BY)
    const finalRows: any[] = [];

    let val = 1;
    for (const [, list] of Object.entries(grouped)) {
      list.forEach((r) => {
        finalRows.push({
          srNo: val++,
          ...r,
        });
      });
    }

    return finalRows;
  }
  async downloadPendingReport() {
    // 1. Fetch all forms (filtering deletedAt)
    const marriageForms = await this.prisma.marriage_form.findMany({
      where: { deletedAt: null },
    });
    const religiousForms = await this.prisma.religious_form.findMany({
      where: { deletedAt: null },
    });
    const roadshowForms = await this.prisma.roadshow_form.findMany({
      where: { deletedAt: null },
    });
    const genericForms = await this.prisma.generic_form.findMany({
      where: { deletedAt: null },
    });

    // 2. Fetch relevant commons
    const commons = await this.prisma.common.findMany({
      where: {
        OR: [
          {
            form_type: { in: ['RELIGIOUS', 'ROADSHOW', 'GENERIC', 'MARRIAGE'] },
            form_status: 150,
          },
        ],
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)), // last 30 days
        },
      },
      orderBy: {
        event_date: 'asc',
      },
    });

    // 3. Create lookup maps for fast access
    const marriageMap = new Map(marriageForms.map((m) => [m.id, m]));
    const religiousMap = new Map(religiousForms.map((r) => [r.id, r]));
    const roadshowMap = new Map(roadshowForms.map((r) => [r.id, r]));
    const genericMap = new Map(genericForms.map((g) => [g.id, g]));

    // 4. Transform commons + match with correct form
    const grouped: Record<string, any[]> = {};
    commons.forEach((c) => {
      let formData: any = null;
      if (c.form_type === 'MARRIAGE') formData = marriageMap.get(c.form_id);
      if (c.form_type === 'RELIGIOUS') formData = religiousMap.get(c.form_id);
      if (c.form_type === 'ROADSHOW') formData = roadshowMap.get(c.form_id);
      if (c.form_type === 'GENERIC') formData = genericMap.get(c.form_id);

      const row = {
        applicantName: c.name,
        applicantAddress: formData?.address ?? '',
        applicationDate: c.event_date
          ? new Date(c.event_date).toISOString().split('T')[0]
          : '',
        eventName: formData?.event_name ?? '',
        permissionAddress: formData?.event_address ?? '',
        permissionDate:
          formData?.from_date && formData?.to_date
            ? `${new Date(formData.from_date).toISOString().split('T')[0]} to ${new Date(formData.to_date).toISOString().split('T')[0]}`
            : '',
        routeInfo: formData?.route_info ?? '',
        mobile: c.number ?? formData?.mobile ?? '',
        email: formData?.email ?? '',
        relation: formData?.relation ?? '',
        formType: c.form_type,
      };

      if (!grouped[c.form_type]) grouped[c.form_type] = [];
      grouped[c.form_type].push(row);
    });

    // 5. Add row numbers (like ROW_NUMBER OVER PARTITION BY)
    const finalRows: any[] = [];

    let val = 1;
    for (const [, list] of Object.entries(grouped)) {
      list.forEach((r) => {
        finalRows.push({
          srNo: val++,
          ...r,
        });
      });
    }

    return finalRows;
  }
}
