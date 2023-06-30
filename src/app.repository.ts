import { Injectable } from '@nestjs/common';

export type student = {
  age: number;
  name: string;
};

@Injectable()
export class AppRepository {
  public upload() {
    const response = 'App repository';
    return response;
  }
}
