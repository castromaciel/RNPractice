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
        style={styles.fabLocationRight}
      >
        <View 
          style={styles.fab}
        >
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={decreaseCount}
        style={styles.fabLocationLeft}
      >
        <View
          style={styles.fab}
        >
          <Text style={styles.fabText}>-1</Text>
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
  fabLocationRight: {
    bottom: 10,
    position: 'absolute',
    right: 10,
  },
  fabLocationLeft: {
    bottom: 10,
    left: 10,
    position: 'absolute',
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  fabText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default CounterScreen