import React from "react";
import { View } from "react-native";
import Text from "./Text";

interface SectionProps {
  title?: string;
  subtitle?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  subtitle,
  right,
  children,
  className = "",
}: SectionProps) {
  return (
    <View className={`mb-8 ${className}`}>
      {(title || subtitle || right) && (
        <View className="mb-4 flex-row items-center justify-between">
          <View className="flex-1">
            {title && (
              <Text variant="h3">
                {title}
              </Text>
            )}

            {subtitle && (
              <Text
                variant="body2"
                className="mt-1"
              >
                {subtitle}
              </Text>
            )}
          </View>

          {right}
        </View>
      )}

      {children}
    </View>
  );
}