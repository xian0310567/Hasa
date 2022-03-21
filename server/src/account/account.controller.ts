import { Controller, Param, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';
import { account as AccountModel } from '@prisma/client';

@Controller('account')
export class AccountController {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly accountService: AccountService,
        private readonly userService: UserService
    ) {}

    // 해당 계좌 +10000원
    @Put(':id/deposit')
    async depositPrice(
        @Param('id') id: string
    ): Promise<AccountModel> {
        return this.accountService.addPropPrice({
            where: {userId: String(id)},
            data: {
                propPrice: (await this.accountService.findUnique({
                    userId: String(id)
                })).propPrice + 10000
            }
        })   
    }

    // 해당 계좌 -10000원
    @Put(':id/withdrawal')
    async withdrawalPrice(
        @Param('id') id: string
    ): Promise<AccountModel> {
        return this.accountService.addPropPrice({
            where: {userId: String(id)},
            data: {
                propPrice: (await this.accountService.findUnique({
                    userId: String(id)
                })).propPrice - 10000
            }
        })
        
    }
}
