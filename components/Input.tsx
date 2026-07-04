import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { MotiView } from "moti";
import Text from "./Text";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View className="w-full">
      {label && (
        <Text variant="label" className="mb-2">
          {label}
        </Text>
      )}

      <MotiView
        animate={{
          borderColor: focused
            ? "rgba(255,255,255,0.25)"
            : "rgba(255,255,255,0.08)",
          backgroundColor: focused
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.04)",
        }}
        transition={{
          type: "timing",
          duration: 180,
        }}
        style={{
          borderWidth: 1,
          borderRadius: 18,
        }}
      >
        <View className="flex-row items-center px-5 py-4">
          {leftIcon && (
            <View className="mr-3">{leftIcon}</View>
          )}

          <TextInput
            className="flex-1 text-base text-white"
            placeholderTextColor="rgba(255,255,255,0.35)"
            selectionColor="white"
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            {...props}
          />

          {rightIcon && (
            <View className="ml-3">{rightIcon}</View>
          )}
        </View>
      </MotiView>

      {error ? (
        <Text className="mt-2 text-red-400 text-sm">
          {error}
        </Text>
      ) : hint ? (
        <Text className="mt-2 text-zinc-500 text-sm">
          {hint}
        </Text>
      ) : null}
    </View>
  );
}