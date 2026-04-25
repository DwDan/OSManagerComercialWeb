import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { signupLiterals } from '@core/i18n/signup.literals';
import { TenantRegistrationService } from '@core/services/tenant-registration/tenant-registration.service';
import { injectI18n } from '@i18n/shared/inject-i18n';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly tenantRegistrationService = inject(
    TenantRegistrationService,
  );

  protected readonly literals = injectI18n(signupLiterals);

  protected readonly loading = signal(false);
  protected readonly success = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    document: ['', [Validators.maxLength(20)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(160)],
    ],
    phoneNumber: ['', [Validators.maxLength(20)]],
  });

  private readonly nameChanges = toSignal(
    this.form.controls.name.valueChanges.pipe(
      startWith(this.form.controls.name.value),
    ),
    { initialValue: this.form.controls.name.value },
  );

  protected readonly slug = computed(() => this.createSlug(this.nameChanges()));

  protected submit(): void {
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const request = {
      name: this.form.controls.name.value,
      slug: this.slug(),
      document: this.form.controls.document.value || undefined,
      email: this.form.controls.email.value,
      phoneNumber: this.form.controls.phoneNumber.value || undefined,
    };

    this.tenantRegistrationService.createTrial(request).subscribe({
      next: () => {
        this.success.set(true);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.literals().errors.submit);
        this.loading.set(false);
      },
    });
  }

  private createSlug(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
