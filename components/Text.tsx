import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";

type Variant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body2"
  | "caption"
  | "label";

interface TextProps extends RNTextProps {
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  hero: "text-5xl font-extrabold tracking-tight text-white",
  h1: "text-4xl font-bold tracking-tight text-white",
  h2: "text-3xl font-bold text-white",
  h3: "text-2xl font-semibold text-white",

  body: "text-base text-white",
  body2: "text-sm text-zinc-300",

  caption: "text-xs text-zinc-500",

  label: "text-sm font-medium text-zinc-400",
};

export default function Text({
  variant = "body",
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <RNText
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </RNText>
  );
}