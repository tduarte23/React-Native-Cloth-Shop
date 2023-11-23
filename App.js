import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS } from './src/constants/colors';
import { Home } from './src/pages/home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.statusbar} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  statusbar:{
    backgroundColor: COLORS.PRIMARY['500']
  }
});
