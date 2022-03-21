import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { account, Prisma } from '@prisma/client';

@Injectable()
export class AccountService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async findUnique(data: Prisma.accountWhereUniqueInput): Promise<account | null> {
        return this.prismaService.account.findUnique({
            where : data
        })
    } 

    async addPropPrice(params: {
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
