import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { user, account, Prisma } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime';

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

    async createUser(data: Prisma.userCreateInput): Promise<user | null> {
        return this.prismaService.user.create({
            data
        })
    } 

    // 계좌 정보
    async getAccount(data: Prisma.accountWhereUniqueInput): Promise<account | null> {
        return this.prismaService.account.findUnique({
            where: data
        })
    }

    // 계좌 정보 생성
    async createAccount(data: Prisma.accountCreateInput): Promise<account | null> {
        return this.prismaService.account.create({
            data
        })
    }

    // 계좌 잔액 추가
    async putPropPrice(params: {
        where: Prisma.accountWhereUniqueInput,
        data: Prisma.accountUpdateInput
    }): Promise<account | null> {
        const { where, data } = params;
        return this.prismaService.account.update({
            where,
            data
        })
    }
}
