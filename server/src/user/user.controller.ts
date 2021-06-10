import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  //user
  @Get('user/:id')
  async getUser(@Param('id') id, @Res() res) {
    try {
      const options = {
        where: {
          id: id,
        },
        include: [],
      };
      const result = await this.userService.get(options);
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_GATEWAY).json(error);
    }
  }
}
