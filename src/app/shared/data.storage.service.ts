import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable()
export class DataStorageService {
  constructor(private http: HttpClientModule) {}
}