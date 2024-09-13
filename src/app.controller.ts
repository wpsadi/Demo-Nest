import { All, Controller} from '@nestjs/common';
import { AppService } from './app.service';
import { NextFunction } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @All("/")
  universal() {
    return this.appService.getUniversal();
  }
}
