import AmbientBackground from "@/components/Background";
import { View, Text, StatusBar, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
      <AmbientBackground>
        <View>
          <Text className="text-3xl font-bold text-white">
            Home Im the Home Screen
          </Text>
        </View>
      </AmbientBackground>
    
    
  );
}