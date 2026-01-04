import { InjectionToken } from '@angular/core';

export const localstorageToken = new InjectionToken<Storage>('local storage', {
  providedIn: 'root',
  factory: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage;
    }

    // 👇 fallback for SSR / Node / tests
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    } as Storage;
  },
});
