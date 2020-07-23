import { useEffect } from 'react';

export default function Timeout({ onTimeout, delay }) {
  useEffect(() => {
    if (typeof onTimeout !== 'function') return;

    let cancel = false;

    let id = setTimeout(() => {
      if (cancel) return;

      onTimeout();
    }, delay);

    return () => {
      cancel = true;
      clearTimeout(id);
    };
  }, [delay, onTimeout]);

  return null;
}
