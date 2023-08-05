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
    flex: 1,
    backgroundColor: '#0D1117'
  },
  box: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  first: {
    flex: 1,
  },
  second: {
    flex: 2,
  },
  third: {
    flex: 3,
  },
});

export default FlexScreen
