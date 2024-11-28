import { View, Text } from 'react-native'
// import React from 'react'
import React, { useState } from 'react'
import { Switch } from 'react-native'


const SwitchCustomcomponent = () => {
  const [value, setValue] = useState(true);
  return (
    <View style={{}}>
            <Switch
                value={value}
                onValueChange={() => setValue(!value)}
                // disabled={true}
                // barHeight={40}
               circleSize={50}
                

            />
    </View>
  )
}

export default SwitchCustomcomponent