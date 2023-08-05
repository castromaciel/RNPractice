import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box_lg, styles.first]}></View>
      <View style={[styles.box_lg, styles.second]}></View>
      <View style={[styles.box_lg, styles.third]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  box_lg: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#1E2632',
  },
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
  },
  first: {
    backgroundColor: '#465162',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  second: {
    backgroundColor: '#173767',
    position: 'absolute',
    top: 0,
    right: 0
  },
  third: {
    backgroundColor: '#255AAB',
    position: 'absolute',
    botom: 0,
  },
});

export default PositionScreen
