/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Get, Body, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
