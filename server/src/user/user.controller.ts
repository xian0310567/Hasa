import { Controller, Get, Post, Param, Res, Put } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserService } from './user.service';
import { account as AccountModel, user as UserModel } from '@prisma/client';


@Controller('user')
export class UserController {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly userService: UserService
    ) {}

    // 모든 유저 정보 조회
    @Get()
    async getAll(): Promise<UserModel[]> {
        return this.userService.getAll();
    }
    
    //ID로 정보 조회
    @Get(':id')
    async getAuth(@Param('id') id: string): Promise<UserModel> {
        return this.userService.getUser({ id: String(id) })
    }

    // ID로 회원 계좌 정보 조회
    @Get('/account/:id')
    async getAccount(@Param('id') id: string): Promise<AccountModel> {
        return this.userService.getAccount({ userId: String(id) })
    }

    
    // 계좌 정보
    
    // 해당 정보로 조회된 계좌 +10000
    @Put('/account/:id/deposit')
    async depositPrice(
        @Param('id') id: string
    ): Promise<AccountModel> {
        return this.userService.postPropPrice({
            where: {userId: String(id)},
            data: {
                propPrice: (await this.userService.getAccount({
                    userId: String(id)
                })).propPrice + 10000
            }
        })   
    }

    // 해당 정보로 조회된 계좌 -10000
    @Put('/account/:id/withdrawal')
    async withdrawalPrice(
        @Param('id') id: string
    ): Promise<AccountModel> {
        return this.userService.postPropPrice({
            where: {userId: String(id)},
            data: {
                propPrice: (await this.userService.getAccount({
                    userId: String(id)
                })).propPrice - 10000
            }
        })   
    }

}
