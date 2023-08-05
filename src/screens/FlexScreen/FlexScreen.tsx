import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.first]}>
        <Text style={styles.paragraph}>First</Text>
      </View>
      <View style={[styles.box, styles.second]}>
        <Text style={styles.paragraph}>Second</Text>
      </View>
      <View style={[styles.box, styles.third]}> 
        <Text style={styles.paragraph}>Third</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117',
    flex: 1,
  },
  box: {
    borderWidth: 2,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  first: {
    flex: 1,
  },
  second: {
    flex: 1,
  },
  third: {
    flex: 1,
  },
});

export default FlexScreen
