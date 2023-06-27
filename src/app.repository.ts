import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRepository {
  public upload() {
    const response = 'App repository';
    return response;
  }
}
