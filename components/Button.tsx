import React from "react";
import {
  Pressable,
  PressableProps,
  View,
  ActivityIndicator,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import Text from "./Text";

interface ButtonProps extends PressableProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export default function Button({
  title,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <MotiView
      animate={{
        scale: disabled ? 1 : 1,
      }}
      transition={{
        type: "timing",
        duration: 150,
      }}
    >
      <Pressable
        disabled={disabled || loading}
        className={className}
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.96 : 1 }],
          opacity: disabled ? 0.5 : 1,
        })}
        {...props}
      >
        <View className="overflow-hidden rounded-2xl">
          <BlurView intensity={40} tint="dark">
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.18)",
                "rgba(255,255,255,0.08)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.18)",
                paddingVertical: 16,
                paddingHorizontal: 22,
              }}
            >
              <View className="flex-row items-center justify-center gap-2">
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <>
                    {leftIcon}
                    <Text variant="body" className="font-semibold">
                      {title}
                    </Text>
                    {rightIcon}
                  </>
                )}
              </View>
            </LinearGradient>
          </BlurView>
        </View>
      </Pressable>
    </MotiView>
  );
}