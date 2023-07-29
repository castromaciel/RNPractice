import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

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

      <TouchableOpacity
        onPress={incrementCount}
      >
        <View
          style={{
            backgroundColor: 'blue',
            borderRadius: 2,
          }}
        >
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={decreaseCount}
      >
        <View style={{
          backgroundColor: 'red',
          borderRadius: 2
        }}>
          <Text>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CounterScreen