import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller('users')
export class UsersController {

    constructor(private connection: Connection){}

    @Get()
    findAll(): string {
      return 'This action returns all users';
    }

    

}
