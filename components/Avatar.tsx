import React from "react";
import { Image, View } from "react-native";
import Text from "./Text";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  uri?: string;
  name?: string;
  size?: Size;
  className?: string;
}

const sizes = {
  xs: {
    container: "w-8 h-8",
    text: "text-xs",
  },
  sm: {
    container: "w-10 h-10",
    text: "text-sm",
  },
  md: {
    container: "w-14 h-14",
    text: "text-base",
  },
  lg: {
    container: "w-20 h-20",
    text: "text-xl",
  },
  xl: {
    container: "w-28 h-28",
    text: "text-3xl",
  },
};

export default function Avatar({
  uri,
  name = "",
  size = "md",
  className = "",
}: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (uri) {
    return (
      <Image
        source={{ uri }}
        className={`${sizes[size].container} rounded-full border border-white/10 ${className}`}
      />
    );
  }

  return (
    <View
      className={`
        ${sizes[size].container}
        rounded-full
        items-center
        justify-center
        bg-zinc-800
        border
        border-white/10
        ${className}
      `}
    >
      <Text
        className={`${sizes[size].text} font-bold`}
      >
        {initials}
      </Text>
    </View>
  );
}