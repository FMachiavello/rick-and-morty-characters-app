import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import  Constants  from 'expo-constants';

export default function App() {
  return (
    
    <View style={styles.container}>
      <AppNavigator/>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: Constants.statusBarHeight
  }
});