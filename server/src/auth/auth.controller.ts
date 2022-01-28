import { Controller, Get, Post, Param } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { auth as authModel } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    @Get(':id')
    async getAuth(@Param('id') id: string): Promise<authModel> {
        return this.prismaService.auth.findUnique({ where: { no: Number(id) } })
    }
}
