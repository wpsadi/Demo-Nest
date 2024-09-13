import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message: 'Hello World!',
    };
  }

  getUniversal(): { message: string } {
    return {
      message: 'Universal Greeting!',
    };
  }
}
