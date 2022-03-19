import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { user, account, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async getUser(userWhereUniqueInput: Prisma.userWhereUniqueInput): Promise<user | null> {
        return this.prismaService.user.findUnique({ 
            where: userWhereUniqueInput
        });
    }

    async getAll(): Promise<user[] | null>{
        return this.prismaService.user.findMany();
    }
    
    async getAccount(data: Prisma.accountWhereUniqueInput): Promise<account | null> {
        return this.prismaService.account.findUnique({
            where: data
        })
    } 
}
