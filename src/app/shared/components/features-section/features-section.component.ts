import { Component, computed } from '@angular/core';
import { featuresSectionLiterals } from '@core/i18n/features-section.literals';
import { injectI18n } from '@i18n/shared/inject-i18n';

@Component({
  selector: 'app-features-section',
  imports: [],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
})
export class FeaturesSectionComponent {
  protected readonly literals = injectI18n(featuresSectionLiterals);

  protected readonly features = computed(() => [
    {
      icon: '📋',
      ...this.literals().items.serviceOrders,
    },
    {
      icon: '🧩',
      ...this.literals().items.statusControl,
    },
    {
      icon: '👷',
      ...this.literals().items.technicianAssignment,
    },
    {
      icon: '⚙️',
      ...this.literals().items.operationalTracking,
    },
    {
      icon: '🏢',
      ...this.literals().items.customerManagement,
    },
    {
      icon: '📊',
      ...this.literals().items.teamProductivity,
    },
  ]);
}
