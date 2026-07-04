import React from "react";
import {
  Pressable,
  PressableProps,
  View,
  ViewProps,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

type Variant =
  | "default"
  | "glass"
  | "gradient"
  | "outline"
  | "pressable";

interface CardProps extends PressableProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "rounded-3xl overflow-hidden";

const content =
  "p-5 rounded-3xl";

export default function Card({
  children,
  variant = "default",
  className = "",
  disabled,
  ...props
}: CardProps) {
  const isPressable = variant === "pressable";

  const Body = () => {
    switch (variant) {
      case "glass":
        return (
          <BlurView
            intensity={40}
            tint="dark"
            className={`${base} border border-white/15`}
          >
            <LinearGradient
              colors={[
                "rgba(255,255,255,0.15)",
                "rgba(255,255,255,0.05)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className={`${content} ${className}`}
            >
              {children}
            </LinearGradient>
          </BlurView>
        );

      case "gradient":
        return (
          <LinearGradient
            colors={["#4F46E5", "#7C3AED"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className={`${content} ${base} ${className}`}
          >
            {children}
          </LinearGradient>
        );

      case "outline":
        return (
          <View
            className={`${base} ${content} border border-white/10 bg-transparent ${className}`}
          >
            {children}
          </View>
        );

      default:
        return (
          <View
            className={`${base} ${content} bg-zinc-900 border border-white/10 ${className}`}
          >
            {children}
          </View>
        );
    }
  };

  if (isPressable) {
    return (
      <Pressable
        android_ripple={{
          color: "rgba(255,255,255,0.08)",
        }}
        disabled={disabled}
        style={({ pressed }) => ({
          transform: [{ scale: pressed ? 0.98 : 1 }],
          opacity: pressed ? 0.9 : 1,
        })}
        {...props}
      >
        <View
          className={`${base} ${content} bg-zinc-900 border border-white/10 ${className}`}
        >
          {children}
        </View>
      </Pressable>
    );
  }

  return <Body />;
}