import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateTenantTrialRequest } from '@core/models/requests/create-tenant-trial.request';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenantRegistrationService {
  private readonly httpClient = inject(HttpClient);

  createTrial(request: CreateTenantTrialRequest): Observable<string> {
    return this.httpClient.post<string>(
      `${environment.apiUrl}/commercial/tenants`,
      request,
    );
  }
}
