import React from 'react';
import { Axis, Settings } from '@elastic/charts';

// export default function ElasticChartsAxis(props) {
//   return (
//     <React.Fragment>
//       <Axis {...props} />
//     </React.Fragment>
//   );
// }

export default function ElasticChartsAxis(props) {
  return (
    <React.Fragment>
      <Settings
        theme={{
          axes: {
            axisTitleStyle: {
              fontFamily: props.fontFamily,
              fontSize: props.fontSizeTitle,
              fill: props.fillTitle,
            },
            tickLabelStyle: {
              fontFamily: props.fontFamily,
              fontSize: props.fontSizeTick,
            },
          },
        }}
      />
      <Axis {...props} />
    </React.Fragment>
  );
}
