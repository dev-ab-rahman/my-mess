import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Slot />
      <StatusBar barStyle="light-content" />
    </SafeAreaProvider>
  );
}
