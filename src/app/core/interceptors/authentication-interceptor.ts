import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { I18nStore } from '@core/i18n/shared/i18n.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const i18nStore = inject(I18nStore);

  const language = i18nStore.currentLanguage();

  const authReq = req.clone({
    setHeaders: {
      'Accept-Language': language,
    },
  });

  return next(authReq);
};
