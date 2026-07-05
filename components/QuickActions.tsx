import {
  ShoppingCart,
  BrushCleaning,
  Wallet,
  Users,
} from "lucide-react-native";
import { Pressable, View } from "react-native";

import Card from "@/components/Card";
import Text from "@/components/Text";

interface QuickActionsProps {
  onMarketPress?: () => void;
  onCleaningPress?: () => void;
  onFinancePress?: () => void;
  onMembersPress?: () => void;
}

export default function QuickActions({
  onMarketPress,
  onCleaningPress,
  onFinancePress,
}: QuickActionsProps) {
  return (
    <View className="mt-6">
      <Text variant="h3" className="mb-4">
        Quick Actions
      </Text>

      <View className="flex-row flex-wrap justify-between gap-y-4">
        <ActionItem
          icon={
            <ShoppingCart
              size={26}
              color="#22C55E"
            />
          }
          title="Market"
          subtitle="Today's market"
          onPress={onMarketPress}
        />

        <ActionItem
          icon={
            <BrushCleaning
              size={26}
              color="#3B82F6"
            />
          }
          title="Cleaning"
          subtitle="Duty schedule"
          onPress={onCleaningPress}
        />

        <ActionItem
          icon={
            <Wallet
              size={26}
              color="#A855F7"
            />
          }
          title="Finance"
          subtitle="Expenses"
          onPress={onFinancePress}
        />
      </View>
    </View>
  );
}

interface ActionItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress?: () => void;
}

function ActionItem({
  icon,
  title,
  subtitle,
  onPress,
}: ActionItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.97 : 1 }],
        width: "48%",
      })}
    >
      <Card className="items-center py-6">
        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
          {icon}
        </View>

        <Text
          className="mt-4 text-lg font-semibold"
        >
          {title}
        </Text>

        <Text
          variant="caption"
          className="mt-1 text-center"
        >
          {subtitle}
        </Text>
      </Card>
    </Pressable>
  );
}