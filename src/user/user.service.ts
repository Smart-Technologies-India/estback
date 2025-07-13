import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
    });
    if (!user) throw new BadRequestException('No user exist with this id.');
    return user;
  }

  async updateUserById(updateUserInput: UpdateUserInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(updateUserInput)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { id: updateUserInput.id },
    });

    if (!existingUser) {
      throw new NotFoundException(
        `User with id ${updateUserInput.id} not found`,
      );
    }
    delete dataToUpdate.id;
    const updateuser = this.prisma.user.update({
      where: { id: updateUserInput.id },
      data: dataToUpdate,
    });
    if (!updateuser) throw new BadRequestException('Unable to update user.');
    return updateuser;
  }
}
