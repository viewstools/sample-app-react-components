import { useEffect } from 'react';
import Mousetrap from 'mousetrap';

// https://craig.is/killing/mice
let useMousetrap = ({ keys, onPress, type }) => {
  useEffect(() => {
    if (!keys) return;

    let actualKeys = keys.split(' ');
    Mousetrap.bind(
      actualKeys,
      () => {
        onPress();
        return false;
      },
      type
    );

    return () => {
      Mousetrap.unbind(actualKeys, type);
    };
  }, [keys, type, onPress]);
};
export default useMousetrap;
