import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box_lg, styles.purple]}></View>
      <View style={[styles.box_lg, styles.orange]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  box_lg: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
  },
  orange: {
    backgroundColor: '#F0A23B'
  },
  purple: {
    backgroundColor: '#800080',
    top: 100,
    left: 100
  },
});

export default PositionScreen
