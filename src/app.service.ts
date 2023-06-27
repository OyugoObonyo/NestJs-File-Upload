import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly _appRepository: AppRepository) {}

  public upload() {
    const response = this._appRepository.upload();
    return response;
  }
}
