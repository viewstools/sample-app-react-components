import useShortcut from './use-shortcut.js';

let Shortcut = (props) => {
  useShortcut({ keys: props.keys, type: props.type, onPress: props.onPress });
  return null;
};
export default Shortcut;
