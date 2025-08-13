import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { jwtSecret } from 'src/utils/const';
import { MobileLoginInput } from './dto/mobile-auth.input';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async signup(name: string, contact: string, password: string) {
    const foundUser: user = await this.prisma.user.findFirst({
      where: { contact: contact },
    });
    if (foundUser)
      throw new BadRequestException('contact number already exist');
    const hashedPassword = await this.hashPassword(password);

    const user = await this.prisma.user.create({
      data: {
        password: hashedPassword,
        name: name,
        contact: contact,
        role: 'USER',
      },
    });

    const token = await this.singToken({
      id: user.id,
      contact: Number(user.contact),
      role: user.role,
    });

    return { ...user, token };
  }

  async signin(number: string, password: string) {
    const user: user = await this.prisma.user.findFirst({
      where: { contact: number },
    });

    if (!user) throw new BadRequestException('Wrong Credentials');

    const isMatch = await this.comparePassword({
      password: password,
      hash: user.password,
    });

    if (!isMatch) throw new BadRequestException('Wrong Credentials');
    const token = await this.singToken({
      id: user.id,
      contact: Number(user.contact),
      role: user.role,
    });

    return { ...user, token };
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: {
    password: string;
    hash: string;
  }): Promise<boolean> {
    return await bcrypt.compare(args.password, args.hash);
  }

  async singToken(args: {
    id: number;
    contact: number;
    role: string;
  }): Promise<string> {
    const payload = args;
    return this.jwt.signAsync(payload, {
      secret: jwtSecret,
    });
  }

  async mobileLogin(data: MobileLoginInput) {
    const otp = this.generateOTP();

    const hashedPassword = await this.hashPassword('a6hqE9OM0w');

    const user = await this.prisma.user.findFirst({
      where: { contact: data.contact },
    });

    let userdata: user;

    if (user) {
      userdata = await this.prisma.user.update({
        where: { id: user.id },
        data: { otp: otp },
      });
      if (!userdata) {
        throw new BadRequestException('Unable to save otp.');
      }
    } else {
      userdata = await this.prisma.user.create({
        data: {
          password: hashedPassword,
          contact: data.contact,
          role: 'USER',
          otp: otp,
        },
      });
      if (!userdata) {
        throw new BadRequestException('Unable to create user.');
      }
    }

    const res = await axios.post(
      `http://sms.smartechwebworks.com/submitsms.jsp?user=ESTDAMAN&key=7670b7cc9eXX&mobile=+91${data.contact}&message=Your%20One-Time%20Password%20(OTP)%20is%20${otp}.%20Please%20do%20not%20share%20this%20OTP%20with%20anyone.-ESTABLISHMENT%2CCOLLECTORATE%20DAMAN.&senderid=ESTDMN&accusage=1&entityid=1701175448046997959&tempid=1707175473102089564`,
    );

    if (res.data.toString().split(',')[0].trim() == 'sent') {
      return userdata;
    } else {
      throw new BadRequestException('Something went wrong unable to sent otp.');
    }
  }

  async verifyOtp(data: MobileLoginInput) {
    const user = await this.prisma.user.findFirst({
      where: { contact: data.contact },
    });
    if (!user) throw new BadRequestException('User not exist with this id.');

    if (data.otp != user.otp)
      throw new BadRequestException('Wrong Otp try again!');

    const update = await this.prisma.user.update({
      where: { id: user.id },
      data: { name: data.name },
    });

    if (!update) throw new BadRequestException('Unable to update user name.');

    const token = await this.singToken({
      id: user.id,
      contact: Number(user.contact),
      role: user.role,
    });
    return { ...update, token };
  }

  generateOTP(): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
}
