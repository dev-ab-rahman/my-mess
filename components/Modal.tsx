import React, { useEffect } from "react";
import {
  Modal as RNModal,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView, AnimatePresence } from "moti";
import { X } from "lucide-react-native";

import Text from "./Text";

const { height } = Dimensions.get("window");

type ModalVariant = "center" | "bottom";

interface ModalProps {
  visible: boolean;
  onClose: () => void;

  title?: string;
  subtitle?: string;

  children: React.ReactNode;

  variant?: ModalVariant;
  showCloseButton?: boolean;
}

export default function Modal({
  visible,
  onClose,
  title,
  subtitle,
  children,
  variant = "bottom",
  showCloseButton = true,
}: ModalProps) {
  return (
    <RNModal
      transparent
      animationType="none"
      visible={visible}
      statusBarTranslucent
    >
      <AnimatePresence>
        {visible && (
          <>
            {/* Backdrop */}
            <Pressable
              onPress={onClose}
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0,0,0,0.35)",
                }}
              />
            </Pressable>

            {/* Modal */}
            <MotiView
              from={{
                opacity: 0,
                translateY:
                  variant === "bottom" ? 120 : 30,
                scale: variant === "center" ? 0.96 : 1,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                translateY:
                  variant === "bottom" ? 120 : 30,
              }}
              transition={{
                type: "timing",
                duration: 260,
              }}
              style={{
                position: "absolute",
                left: 16,
                right: 16,

                ...(variant === "bottom"
                  ? {
                      bottom: 24,
                    }
                  : {
                      top: height / 2 - 180,
                    }),
              }}
            >
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0.15)",
                  "rgba(255,255,255,0.06)",
                ]}
                style={{
                  borderRadius: 30,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <BlurView intensity={90} tint="dark" >
                  <View className="px-6 py-5">

                    {/* Drag Handle */}
                    {variant === "bottom" && (
                      <View className="items-center mb-5">
                        <View className="h-1.5 w-14 rounded-full bg-white/20" />
                      </View>
                    )}

                    {/* Header */}
                    {(title || showCloseButton) && (
                      <View className="flex-row items-start justify-between">

                        <View className="flex-1 pr-4">
                          {title && (
                            <Text variant="h2">
                              {title}
                            </Text>
                          )}

                          {subtitle && (
                            <Text
                              variant="body2"
                              className="mt-2"
                            >
                              {subtitle}
                            </Text>
                          )}
                        </View>

                        {showCloseButton && (
                          <Pressable
                            onPress={onClose}
                            className="h-10 w-10 rounded-full items-center justify-center bg-white/10"
                          >
                            <X
                              size={18}
                              color="white"
                            />
                          </Pressable>
                        )}
                      </View>
                    )}

                    <View className="mt-6">
                      {children}
                    </View>
                  </View>
                </BlurView>
              </LinearGradient>
            </MotiView>
          </>
        )}
      </AnimatePresence>
    </RNModal>
  );
}