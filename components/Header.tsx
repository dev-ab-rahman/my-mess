import { Bell } from "lucide-react-native";
import { Pressable, View } from "react-native";

import Avatar from "@/components/Avatar";
import Text from "@/components/Text";

interface HeaderProps {
  name?: string;
  image?: string;
  notificationCount?: number;
  onNotificationPress?: () => void;
}

export default function Header({
  name = "Abdur Rahman",
  image,
  notificationCount = 0,
  onNotificationPress,
}: HeaderProps) {
  const greeting = getGreeting();

  return (
    <View className="flex-row items-center justify-between py-4">
      {/* Left */}
      <View className="flex-1">
        <Text
          variant="body2"
          className="text-zinc-400"
        >
          {greeting} 👋
        </Text>

        <Text
          variant="h2"
          className="mt-1"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text
          variant="caption"
          className="mt-1 text-zinc-500"
        >
          {formatDate()}
        </Text>
      </View>

      {/* Right */}
      <View className="flex-row items-center gap-3">
        <Pressable
          onPress={onNotificationPress}
          className="h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
        >
          <Bell
            size={22}
            color="white"
          />

          {notificationCount > 0 && (
            <View className="absolute right-2 top-2 h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1">
              <Text className="text-[10px] font-bold">
                {notificationCount > 99
                  ? "99+"
                  : notificationCount}
              </Text>
            </View>
          )}
        </Pressable>

        <Avatar
          uri={image}
          name={name}
          size="md"
        />
      </View>
    </View>
  );
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";

  return "Good Night";
}

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}