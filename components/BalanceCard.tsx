import { LinearGradient } from "expo-linear-gradient";
import { ArrowUpRight, Wallet } from "lucide-react-native";
import { Pressable, View } from "react-native";

import Text from "@/components/Text";

interface BalanceCardProps {
  balance: number;
  due?: number;
  onPress?: () => void;
}

export default function BalanceCard({
  balance = 0,
  due = 0,
  onPress,
}: BalanceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <View      >
        {/* Background Circle */}
        <View className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <View className="absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-white/5" />

        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Wallet size={22} color="white" />
            </View>

            <View>
              <Text className="text-white/80 text-sm">
                Current Balance
              </Text>

              <Text className="text-white text-lg font-semibold">
                Mess Wallet
              </Text>
            </View>
          </View>

          <ArrowUpRight color="white" size={22} />
        </View>

        {/* Balance */}
        <View className="mt-8">
          <Text className="text-5xl font-black tracking-tight">
            ৳ {balance.toLocaleString()}
          </Text>

          <Text className="mt-2 text-white/80">
            {due > 0
              ? `Outstanding Due ৳ ${due.toLocaleString()}`
              : "Everything is settled 🎉"}
          </Text>
        </View>

        {/* Footer */}
        <View className="mt-8 flex-row items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
          <View>
            <Text className="text-xs text-white/70">
              This Month
            </Text>

            <Text className="font-semibold">
              Expenses Updated
            </Text>
          </View>

          <Text className="font-bold">
            View →
          </Text>
        </View>
      </View>
    </Pressable>
  );
}