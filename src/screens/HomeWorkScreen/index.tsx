import { StyleSheet, View } from 'react-native';

const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.first]}>
      </View>
      <View style={[styles.box, styles.second]}>
      </View>
      <View style={[styles.box, styles.third]}>
      </View>
      <View style={[styles.box, styles.first]}>
      </View>
      <View style={[styles.box, styles.second]}>
      </View>
      <View style={[styles.box, styles.third]}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 12,
    borderColor: '#FFFFFF',
  },
  paragraph: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  first: {
    backgroundColor: '#34495E',
    alignSelf: 'flex-end',
  },
  second: {
    backgroundColor: '#34495E',
  },
  third: {
    backgroundColor: '#34495E',
    alignSelf: 'center',
  },
});

export default HomeWorkScreen
