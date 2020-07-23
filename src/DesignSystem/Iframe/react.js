import React from 'react';

function noop() {}

let Iframe = (props) => {
  // let iframe = useRef()

  // useEffect(() => {
  //   if (!iframe.current) return

  //   iframe.current.contentWindow.console.log = noop
  //   iframe.current.contentWindow.console.table = noop
  //   iframe.current.contentWindow.console.warn = noop
  //   iframe.current.contentWindow.console.error = noop
  //   iframe.current.contentWindow.console.info = noop
  // }, [iframe, props.source])

  return (
    <iframe
      title={props.title}
      src={props.source}
      style={{
        border: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
      }}
    />
  );
};
Iframe.defaultProps = {
  title: 'Iframe',
  source: '...',
};
export default Iframe;
