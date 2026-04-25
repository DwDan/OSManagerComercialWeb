import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CommercialPlanListItemResponse } from '@core/models/responses/commercial-plan-list-item-response';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommercialPlansService {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<CommercialPlanListItemResponse[]> {
    return this.httpClient.get<CommercialPlanListItemResponse[]>(
      `${environment.apiUrl}/api/commercial/plans`,
    );
  }
}
