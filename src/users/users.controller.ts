import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupDto } from './dto/signupDto';
import { completeSignupDto } from './dto/completeSignupData';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post("/signup")
    async createUser(@Body(ValidationPipe) data: SignupDto) {
        return this.usersService.createUser(data)
    }

  @Post("/signup/complete")
  async completeCreateuser(@Body(ValidationPipe) data: completeSignupDto) {
    return this.usersService.completeCreateuser(data)
  }

}
