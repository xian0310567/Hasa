import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserController } from './users/users.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [
    UserController
  ],
  providers: [
    PrismaService,
    UserService
  ],
})
export class AppModule {}