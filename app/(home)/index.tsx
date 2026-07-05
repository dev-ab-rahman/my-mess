import BalanceCard from "@/components/BalanceCard";
import Header from "@/components/Header";
import MealStatus from "@/components/MealStatus";
import NoticeCard from "@/components/NoticeCard";
import QuickActions from "@/components/QuickActions";
import Screen from "@/components/Screen";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {

  const router = useRouter();


  const [lunch, setLunch] = useState(true);
  const [dinner, setDinner] = useState(false);

  return (
    <Screen scroll>
      <Header />
      {/* name = "Abdur Rahman",
      image,
      notificationCount = 0,
      onNotificationPress, */}
      <BalanceCard balance={4000} due={5000}/>
      {/* balance,
      due = 0,
      onPress, */}


      <MealStatus
        lunch={lunch}
        dinner={dinner}
        onLunchChange={setLunch}
        onDinnerChange={setDinner}
      />

      <QuickActions
        onMarketPress={() => router.push("/")}
        onCleaningPress={() => router.push("/duties")}
        onFinancePress={() => router.push("/finance")}
      />

      <NoticeCard
        title="Water Supply Maintenance"
        description="Water supply will remain unavailable today from 2:00 PM to 4:00 PM due to maintenance work."
        time="2 hours ago"
        urgent
        onPress={() => router.push("/")}
      />
      <View className="h-20"></View>
    </Screen>


  );
}