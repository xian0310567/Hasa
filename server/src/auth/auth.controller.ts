import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    
    @Get('all')
    getAll() {
        return `return all user`;
    }
}