import View from './view.js';
import React from 'react';
// import { useSetFlowTo, normalizePath } from 'Logic/ViewsFlow.js'
// import { useData } from 'Data/ViewsData.js'
// import { DataProvider } from 'Data/ViewsData.js'

export default function Logic(props) {
  // let data = useData({
  //   context: 'thing',
  //   path: 'thing.json[path].to.field'
  // })

  // let setFlowTo = useSetFlowTo()

  return (
    <View
      data={[
        ['Age', 'Weight'],
        [4, 5.5],
        [8, 12],
      ]}
    />
  );

  // function onClick() {
  //   setFlowTo(normalizePath(props.viewPath, 'View/Inside')) // '../ViewUp'
  // }

  // return (
  //   <DataProvider context="stuff" value={value} onSubmit={onSubmit}>
  //     <View />
  //   </DataProvider>
  // )
  //
  // async function onSubmit(next) {
  //   // you need to make isInvalid
  //   // if (isInvalid(next.stuff)) return false
  //
  //   console.log(next)
  // }
  //
  // DataProvider also takes an onChange prop. You rarely need it.
  // function onChange(next, change) {
  //   console.log('stuff change', next)
  //   // change is a change function to do tweak values based off the change
  // }
}
