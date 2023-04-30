import { environment } from './../../../environments/environment';
import { IApiResponse } from '../../SharedClassesAndTypes/iapi-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialtiesService {
  constructor(private _httpClient: HttpClient) {}

  getSpecialties(): Observable<IApiResponse> {
    return this._httpClient.get<IApiResponse>(
      environment.apiUrl + '/Doctor/Speciality'
    );
  }
}
