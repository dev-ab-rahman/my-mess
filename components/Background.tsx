import React from "react";
import {
  View,
  Dimensions,
  ViewStyle,
  ColorValue,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

/**
 * Expo LinearGradient requires at least 2 colors.
 */
type GradientColors = readonly [
  ColorValue,
  ColorValue,
  ...ColorValue[]
];

type AmbientBackgroundProps = {
  /** Base background color */
  backgroundColor?: ColorValue;

  /** Top hero gradient */
  topGradientColors?: GradientColors;

  /** Soft glow gradient */
  glowColors?: GradientColors;

  /** Height of top gradient */
  topGradientHeight?: number;

  /** Glow vertical position */
  glowTop?: number;

  /** Glow rotation */
  glowRotate?: string;

  children?: React.ReactNode;

  style?: ViewStyle;
};

export default function AmbientBackground({
  backgroundColor = "#050607",
  topGradientColors = ["#062d24", "#050607", "#050607"],
  glowColors = ["transparent", "#0d1b2a55"],
  topGradientHeight = 500,
  glowTop = 200,
  glowRotate = "-8deg",
  children,
  style,
}: AmbientBackgroundProps) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      {/* Top Hero Gradient */}
      <LinearGradient
        colors={topGradientColors}
        style={[
          styles.topGradient,
          {
            height: topGradientHeight,
          },
        ]}
      />

      {/* Ambient Glow */}
      <LinearGradient
        colors={glowColors}
        style={[
          styles.glow,
          {
            top: glowTop,
            transform: [{ rotate: glowRotate }],
          },
        ]}
      />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  glow: {
    position: "absolute",
    left: -100,
    width: width + 200,
    height: 400,
    borderRadius: 999,
  },
});