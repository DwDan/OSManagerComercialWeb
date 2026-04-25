import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingSectionLiterals } from '@core/i18n/pricing-section.literals';
import { injectI18n } from '@core/i18n/shared/inject-i18n';
import { CommercialPlanListItemResponse } from '@core/models/responses/commercial-plan-list-item-response';
import { CommercialPlansService } from '@core/services/comercial-plans/comercial-plans.service';

@Component({
  selector: 'app-pricing-section',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.scss',
})
export class PricingSectionComponent implements OnInit {
  private readonly commercialPlansService = inject(CommercialPlansService);

  readonly literals = injectI18n(pricingSectionLiterals);

  private readonly plansState = signal<CommercialPlanListItemResponse[]>([]);

  readonly plans = computed(() =>
    this.plansState()
      .filter((plan) => plan.isActive && plan.isPublic)
      .sort((left, right) => left.price - right.price),
  );

  ngOnInit(): void {
    this.commercialPlansService.getAll().subscribe((plans) => {
      this.plansState.set(plans);
    });
  }

  getFeatureLabel(featureKey: string): string {
    const featureName = featureKey.split('.').pop();

    if (!featureName) {
      return featureKey;
    }

    const literalKey = `${featureName.charAt(0).toLowerCase()}${featureName.slice(1)}`;
    const features = this.literals().features as Record<string, string>;

    return features[literalKey] ?? featureKey;
  }

  getAdminUsersLabel(plan: CommercialPlanListItemResponse): string {
    if (plan.maxAdminUsers === 2147483647) {
      return this.literals().limits.unlimitedUsers;
    }

    const label =
      plan.maxAdminUsers === 1
        ? this.literals().limits.user
        : this.literals().limits.users;

    return `${plan.maxAdminUsers} ${label}`;
  }

  getOrdersLabel(plan: CommercialPlanListItemResponse): string | null {
    if (plan.maxOrdersPerMonth === null) {
      return null;
    }

    return `${plan.maxOrdersPerMonth} ${this.literals().limits.ordersPerMonth}`;
  }

  getActionLabel(plan: CommercialPlanListItemResponse): string {
    if (plan.price === 0) {
      return this.literals().actions.startFree;
    }

    return this.literals().actions.tryFree;
  }

  getActionRoute(plan: CommercialPlanListItemResponse): string {
    return '/signup';
  }
}
