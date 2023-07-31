import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Box Object Model
      </Text>
      <Text style={styles.title}>
        Box Object Model
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d1117',
    flex: 1,
  },
  title: {
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#ffffff',
    fontSize: 24,
    marginHorizontal: 15,
  }
})

export default BoxObjectModelScreen
