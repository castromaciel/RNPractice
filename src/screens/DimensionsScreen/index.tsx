import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions()
  return (
    <View>
      <View style={styles.container}>
        <View 
          style={{
            ...styles.purpleBox,
            width: width * 0.2
          }}>
        </View>
        <View style={styles.orangeBox}></View>
      </View>
      <Text style={styles.title}>
        Width: {width}, Height: {height}
      </Text>
    </View>
 )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: '#0d1117'
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%'
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    width: '50%',
    height: '50%'
  },
});

export default DimensionsScreen
