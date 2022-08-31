import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private baseApiUrl = 'http://localhost:3333/api/forms';

  constructor(private http: HttpClient) {}

  createForm(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.baseApiUrl, formData);
  }
}
