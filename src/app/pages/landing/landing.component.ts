import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaqSectionComponent } from '@components/faq-section/faq-section.component';
import { FeaturesSectionComponent } from '@components/features-section/features-section.component';
import { MarketingFooterComponent } from '@components/marketing-footer/marketing-footer.component';
import { MarketingHeaderComponent } from '@components/marketing-header/marketing-header.component';
import { PricingSectionComponent } from '@components/pricing-section/pricing-section.component';
import { landingLiterals } from '@core/i18n/landing.literals';
import { injectI18n } from '@i18n/shared/inject-i18n';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: true,
  imports: [
    MarketingHeaderComponent,
    FeaturesSectionComponent,
    PricingSectionComponent,
    FaqSectionComponent,
    MarketingFooterComponent,
    RouterLink,
  ],
})
export class LandingComponent {
  protected readonly literals = injectI18n(landingLiterals);

  protected readonly orders = computed(() => [
    {
      className: 'order-card order-card--primary',
      ...this.literals().dashboard.orders.first,
    },
    {
      className: 'order-card order-card--warning',
      ...this.literals().dashboard.orders.second,
    },
    {
      className: 'order-card order-card--success',
      ...this.literals().dashboard.orders.third,
    },
    {
      className: 'order-card order-card--primary',
      ...this.literals().dashboard.orders.fourth,
    },
  ]);

  protected readonly companies = [
    'SILVA MOTORS',
    'TECHFIX',
    'CLIMACERTO',
    'PROLIMP',
    'ELETROSERV',
    'MESTRE',
  ];
}
