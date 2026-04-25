import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { marketingHeaderLiterals } from '@core/i18n/marketing-header.literals';
import { environment } from '@environments/environment';
import { injectI18n } from '@i18n/shared/inject-i18n';

@Component({
  selector: 'app-marketing-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marketing-header.component.html',
  styleUrl: './marketing-header.component.scss',
})
export class MarketingHeaderComponent {
  protected readonly appUrl = environment.appUrl;

  protected readonly literals = injectI18n(marketingHeaderLiterals);
}
