import { Controller, Get, Post, Param } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { user as UserModel } from '@prisma/client';


@Controller('users')
export class UsersController {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    @Get()
    async getAll(): Promise<UserModel[]> {
        return this.prismaService.user.findMany();
    }
    // ID로 정보 조회
    @Get(':id')
    async getAuth(@Param('id') id: string): Promise<UserModel> {
        return this.prismaService.user.findUnique({ where: { id: String(id) } });
    }
}
