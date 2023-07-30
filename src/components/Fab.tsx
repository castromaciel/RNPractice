import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface FabProps {
  title: string
}

const Fab: FC<FabProps> = ({
  title = 'Fab',
}) => {
  return (
    <TouchableOpacity
        onPress={() => console.log('Click')}
        style={styles.fabLocationRight}
      >
        <View 
          style={styles.fab}
        >
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default Fab
