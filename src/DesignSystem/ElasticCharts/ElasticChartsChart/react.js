// import { Chart } from '@elastic/charts';
// import '@elastic/charts/dist/theme_only_light.css';

import React from 'react';
import '@elastic/charts/dist/theme_only_light.css';
import { Chart, Settings, LIGHT_THEME, DARK_THEME } from '@elastic/charts';

let THEMES = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
};

export default function ElasticChartsChart({ theme, ...props }) {
  return (
    <React.Fragment>
      <Chart size={[props.width, props.height]}>
        {theme ? <Settings theme={THEMES[theme]} /> : null}
        {typeof props.children === 'function' ? props.children() : null}
      </Chart>
    </React.Fragment>
  );
}

// export default function ElasticChart(props) {
//   return (
//     <Chart size={[props.width, props.height]}>
//       {typeof props.children === 'function'? props.children() : null}
//     </Chart>
//   )
// }
