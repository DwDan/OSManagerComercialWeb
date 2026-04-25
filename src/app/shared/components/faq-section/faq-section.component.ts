import { Component, computed } from '@angular/core';
import { faqSectionLiterals } from '@core/i18n/faq-section.literals';
import { injectI18n } from '@i18n/shared/inject-i18n';

@Component({
  selector: 'app-faq-section',
  imports: [],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  protected readonly literals = injectI18n(faqSectionLiterals);

  protected readonly questions = computed(() => [
    this.literals().items.creditCard,
    this.literals().items.trialPeriod,
    this.literals().items.cancelAnytime,
    this.literals().items.serviceTypes,
    this.literals().items.addUsers,
    this.literals().items.dataSecurity,
  ]);
}
