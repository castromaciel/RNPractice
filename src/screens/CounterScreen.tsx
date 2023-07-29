import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(10)

  const incrementCount = () => setCount((prev) => prev + 1)
  const decreaseCount = () => setCount((prev) => prev - 1)

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        top: -20
      }}>
        Counter: {count}
      </Text>

      <Button title='+1' onPress={incrementCount}/>
      <Button title='-1' onPress={decreaseCount}/>

    </View>
  )
}

export default CounterScreen