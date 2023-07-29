import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CounterScreen = () => {
  const [count, setCount] = useState(10)

  const incrementCount = () => setCount((prev) => prev + 1)
  const decreaseCount = () => setCount((prev) => prev - 1)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Counter: {count}
      </Text>

      <TouchableOpacity
        onPress={incrementCount}
      >
        <View
          style={styles.primaryButton}
        >
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={decreaseCount}
      >
        <View style={styles.secondaryButton}>
          <Text>-1</Text>
        </View>
      </TouchableOpacity>
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
  },
  primaryButton: {
    backgroundColor: 'blue',
    borderRadius: 2,
  },
  secondaryButton: {
    backgroundColor: 'red',
    borderRadius: 2
  }
})

export default CounterScreen