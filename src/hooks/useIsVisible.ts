import { RefObject, useEffect, useState } from 'react';

type TUseIsVisibleCallbacks = {
  onVisible?: (entity: IntersectionObserverEntry) => void;
  onHide?: (entity: IntersectionObserverEntry) => void;
};

type TCustomOptions = {
  withHeaderHeight?: boolean;
};

export function useIsVisible(
  ref: RefObject<HTMLElement>,
  callbacks?: TUseIsVisibleCallbacks,
  options?: TCustomOptions & IntersectionObserverInit,
) {
  const { onVisible, onHide } = callbacks || {};
  const { withHeaderHeight = true, ...restOptions } = options || {};

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const withValue = typeof entry !== 'undefined';

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      rootMargin: withHeaderHeight ? '-56px 0px 0px 0px' : '',
      ...restOptions,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (withValue) {
      if (entry.isIntersecting) {
        onVisible?.(entry);
      } else {
        onHide?.(entry);
      }
    }
  }, [entry]);

  return { entry, withValue };
}
