import { BellRing, ChevronRight } from "lucide-react-native";
import { Pressable, View } from "react-native";

import Card from "@/components/Card";
import Text from "@/components/Text";

interface NoticeCardProps {
  title: string;
  description: string;
  time: string;
  urgent?: boolean;
  onPress?: () => void;
}

export default function NoticeCard({
  title,
  description,
  time,
  urgent = false,
  onPress,
}: NoticeCardProps) {
  return (
    <View className="mt-6">
      <View className="mb-4 flex-row items-center justify-between">
        <Text variant="h3">Latest Notice</Text>

        <Pressable onPress={onPress}>
          <Text className="text-blue-400">
            View All
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.98 : 1 }],
        })}
      >
        <Card className="p-5">
          <View className="flex-row">
            {/* Icon */}
            <View
              className={`mr-4 h-14 w-14 items-center justify-center rounded-2xl ${
                urgent
                  ? "bg-red-500/15"
                  : "bg-blue-500/15"
              }`}
            >
              <BellRing
                size={24}
                color={
                  urgent ? "#ef4444" : "#3b82f6"
                }
              />
            </View>

            {/* Content */}
            <View className="flex-1">
              <View className="flex-row items-center justify-between">
                <Text
                  variant="body"
                  className="font-semibold"
                  numberOfLines={1}
                >
                  {title}
                </Text>

                <ChevronRight
                  size={18}
                  color="#71717A"
                />
              </View>

              <Text
                variant="body2"
                className="mt-2 leading-6"
                numberOfLines={2}
              >
                {description}
              </Text>

              <View className="mt-4 flex-row items-center justify-between">
                <Text
                  variant="caption"
                  className="text-zinc-500"
                >
                  {time}
                </Text>

                {urgent && (
                  <View className="rounded-full bg-red-500/15 px-3 py-1">
                    <Text className="text-xs font-semibold text-red-400">
                      URGENT
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Card>
      </Pressable>
    </View>
  );
}