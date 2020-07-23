// @view
import { useEffect } from 'react';
import copy from 'clipboard-copy';

export default function CopyToClipboard({ value }) {
  useEffect(() => {
    copy(value);
  }, [value]);

  return null;
}
