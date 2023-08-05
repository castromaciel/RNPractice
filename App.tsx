import React from 'react'
import { SafeAreaView } from 'react-native'
import { FlexScreen } from './src/screens'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlexScreen />
    </SafeAreaView>
  )
}

export default App