import React from "react";
import {
  ScrollView,
  View,
  ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import AmbientBackground from "@/components/Background";

type ScreenProps = ViewProps & {
  children: React.ReactNode;

  /**
   * Enable scrolling
   */
  scroll?: boolean;

  /**
   * Show ambient background
   */
  ambient?: boolean;

  /**
   * Remove default horizontal padding
   */
  padded?: boolean;

  /**
   * Extra content class
   */
  contentClassName?: string;
};

export default function Screen({
  children,
  scroll = false,
  ambient = true,
  padded = true,

  className = "",
  contentClassName = "",
}: ScreenProps) {
  const content = scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerClassName={`
        flex-grow
        ${padded ? "px-6 pb-10" : ""}
        ${contentClassName}
      `}
    >
      {children}
    </ScrollView>
  ) : (
    <View
      className={`
        flex-1
        ${padded ? "px-6" : ""}
        ${className}
      `}
    >
      {children}
    </View>
  );

  return (
    <>
      <StatusBar style="light" />

      {ambient ? (
        <AmbientBackground>
          <SafeAreaView className="flex-1">
            {content}
          </SafeAreaView>
        </AmbientBackground>
      ) : (
        <SafeAreaView className="flex-1 bg-[#050607]">
          {content}
        </SafeAreaView>
      )}
    </>
  );
}