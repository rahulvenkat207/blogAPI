import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/types/role.types';
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(private readonly prisma : PrismaService){}

    async register(email: string,password:string,role:Role){
        const hashedPassword  = await bcrypt.hash(password,10);
        return this.prisma.user.create({
            data :{
                email,
                password:hashedPassword,
                role
            },
        });

    }

    async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id }, select: { id: true, email: true, role: true } });
  }
}
