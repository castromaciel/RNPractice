import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fab from '../components/Fab'

const CounterScreen = () => {
  const [count, setCount] = useState(10)

  const incrementCount = () => setCount((prev) => prev + 1)
  const decreaseCount = () => setCount((prev) => prev - 1)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Counter: {count}
      </Text>

      <Fab
        title='-1'
        onPress={decreaseCount}
        position='bottom-left'
      />

      <Fab
        title='+1'
        onPress={incrementCount}
        position='bottom-right'
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -20
  }
})

export default CounterScreen