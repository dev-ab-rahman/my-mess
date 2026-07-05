import { UtensilsCrossed, Moon, Sun } from "lucide-react-native";
import { Pressable, Switch, View } from "react-native";

import Card from "@/components/Card";
import Text from "@/components/Text";

interface MealStatusProps {
  lunch: boolean;
  dinner: boolean;
  onLunchChange?: (value: boolean) => void;
  onDinnerChange?: (value: boolean) => void;
  onPress?: () => void;
}

export default function MealStatus({
  lunch,
  dinner,
  onLunchChange,
  onDinnerChange,
  onPress,
}: MealStatusProps) {
  return (
    <Pressable onPress={onPress}>
      <View className="mt-6 rounded-2xl bg-white/5 p-4">
        {/* Header */}
        <View className="mb-5 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15">
              <UtensilsCrossed
                size={22}
                color="#fb923c"
              />
            </View>

            <View>
              <Text variant="h3">
                Today's Meal
              </Text>

              <Text
                variant="body2"
                className="mt-1"
              >
                Manage today's meals
              </Text>
            </View>
          </View>

          <Text className="text-zinc-400">
            View →
          </Text>
        </View>

        {/* Lunch */}
        <View className="flex-row items-center justify-between rounded-2xl bg-white/5 px-4 py-4">
          <View className="flex-row items-center gap-3">
            <Sun
              size={20}
              color="#fbbf24"
            />

            <View>
              <Text className="font-semibold">
                Lunch
              </Text>

              <Text
                variant="caption"
                className="text-zinc-500"
              >
                12:00 PM
              </Text>
            </View>
          </View>

          <Switch
            value={lunch}
            onValueChange={onLunchChange}
          />
        </View>

        {/* Dinner */}
        <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-white/5 px-4 py-4">
          <View className="flex-row items-center gap-3">
            <Moon
              size={20}
              color="#60a5fa"
            />

            <View>
              <Text className="font-semibold">
                Dinner
              </Text>

              <Text
                variant="caption"
                className="text-zinc-500"
              >
                8:00 PM
              </Text>
            </View>
          </View>

          <Switch
            value={dinner}
            onValueChange={onDinnerChange}
          />
        </View>
      </View>
    </Pressable>
  );
}