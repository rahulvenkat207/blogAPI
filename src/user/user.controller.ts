import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Response } from 'express';
import { Role } from 'src/types/role.types';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async register(@Body() createUserDto : CreateUserDto,@Res() res: Response){
        const user = await this.userService.register(
          createUserDto.email,
          createUserDto.password,
          createUserDto.role ?? Role.USER
        )

        return res.status(HttpStatus.CREATED).json({
            statusCode : HttpStatus.CREATED,
            message: 'User Registered Successfully',
            data : user,
        });
    }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

}
