import React, { FC } from 'react'
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'

type FabPosition = 'bottom-left' | 'bottom-right'

interface FabProps {
  title: string
  onPress: ((event: GestureResponderEvent) => void)
  position?: FabPosition | undefined
}

const Fab: FC<FabProps> = ({
  title = 'Fab',
  onPress,
  position = 'bottom-right',
}) => {

  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[
          styles.fabLocation,
          (position === 'bottom-right') ? styles.right : styles.left
        ]}
      >
        <View 
          style={styles.fab}
        >
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          (position === 'bottom-right') ? styles.right : styles.left
        ]}
      >
      <TouchableNativeFeedback
          onPress={onPress}
          background={
            TouchableNativeFeedback.Ripple('#28425B', false, 30)
          }
        >
          <View 
            style={styles.fab}
          >
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
  fabLocation: {
    bottom: 15,
    position: 'absolute',
  },
  right: {
    right: 20
  },
  left: {
    left: 20
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    elevation: 8,
    height: 60,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
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
