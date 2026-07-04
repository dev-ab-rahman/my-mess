import BottomBar from "@/components/BottomBar";
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: "#050607",
        },

        tabBarHideOnKeyboard: true,

        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="duties"
        options={{
          title: "Duties",
        }}
      />

      <Tabs.Screen
        name="finance"
        options={{
          title: "Finance",
        }}
      />

      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
        }}
      />
    </Tabs>
  );
}