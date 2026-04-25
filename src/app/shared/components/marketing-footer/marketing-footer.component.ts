import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { marketingFooterLiterals } from '@core/i18n/marketing-footer.literals';
import { injectI18n } from '@i18n/shared/inject-i18n';

@Component({
  selector: 'app-marketing-footer',
  imports: [RouterLink],
  templateUrl: './marketing-footer.component.html',
  styleUrl: './marketing-footer.component.scss',
})
export class MarketingFooterComponent {
  protected readonly literals = injectI18n(marketingFooterLiterals);
}
