import { Controller, Get, Post, Param, Res, Put, Body } from '@nestjs/common';
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

    // 유저 생성
    @Post()
    async createUser(
        @Body() userData: {
            id: string,
            pw: string,
            name: string,
            phone: string,
            address: string,
            email: string
        }): Promise<UserModel> {
            return this.userService.createUser(userData)
    }
    
    // 계좌 정보

    // 계좌 생성 및 연동
    @Post('/account/:id')
    async createAccount(
        @Body() accountData: {
            user: {},
            bankCode: string,
            accountNumber: number,
            propPrice: 0,
            investCode: string
        }
    ): Promise<AccountModel> {
        return this.userService.createAccount(
            accountData
        )
    }
    
    // 해당 정보로 조회된 계좌 +10000
    @Put('/account/:id/deposit')
    async depositPrice(
        @Param('id') id: string
    ): Promise<AccountModel> {
        return this.userService.putPropPrice({
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
        return this.userService.putPropPrice({
            where: {userId: String(id)},
            data: {
                propPrice: (await this.userService.getAccount({
                    userId: String(id)
                })).propPrice - 10000
            }
        })   
    }

}
