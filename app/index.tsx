import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MotiView } from "moti";
import {
  Users,
  Wallet,
  CalendarDays,
  ClipboardList,
  Bell,
  ArrowRight,
  Sparkles,
} from "lucide-react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");



const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Track every expense with automatic calculations.",
    color: "#10b981",
  },
  {
    icon: CalendarDays,
    title: "Duty Rotation",
    desc: "Automatically assign market and cleaning duties.",
    color: "#38bdf8",
  },
  {
    icon: Users,
    title: "Member Management",
    desc: "Manage members, rooms, and responsibilities.",
    color: "#a78bfa",
  },
  {
    icon: ClipboardList,
    title: "Task Management",
    desc: "Assign and monitor daily household tasks.",
    color: "#fb923c",
  },
  {
    icon: Bell,
    title: "Smart Notices",
    desc: "Never miss an important announcement.",
    color: "#f472b6",
  },
];

const stats = [
  { label: "Members", value: "1.2K+" },
  { label: "Messes", value: "300+" },
  { label: "Tasks Done", value: "18K+" },
];

/**
 * Reusable glass card wrapper.
 * BlurView gives the frosted-glass look; a thin gradient border
 * and translucent overlay keep it readable on any background.
 */
function GlassCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) {
  return (
    <View
      style={[
        {
          borderRadius: 28,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)",
        },
        style,
      ]}
    >
      <BlurView intensity={40} tint="dark" style={{ padding: 20 }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        />
        {children}
      </BlurView>
    </View>
  );
}

export default function HomeScreen() {
  
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#050607" }}>
      {/* Ambient gradient background */}
      <LinearGradient
        colors={["#062d24", "#050607", "#050607"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 500 }}
      />
      <LinearGradient
        colors={["transparent", "#0d1b2a55"]}
        style={{
          position: "absolute",
          top: 200,
          left: -100,
          width: width + 200,
          height: 400,
          borderRadius: 999,
          transform: [{ rotate: "-8deg" }],
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 22, paddingBottom: 48 }}
        >
          {/* Hero */}
          <MotiView
            from={{ opacity: 0, translateY: 24 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 600 }}
            style={{ alignItems: "center", paddingTop: 36 }}
          >
            <MotiView
              from={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 9, delay: 100 }}
              style={{
                height: 96,
                width: 96,
                borderRadius: 32,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(16,185,129,0.12)",
                borderWidth: 1,
                borderColor: "rgba(16,185,129,0.35)",
              }}
            >
              <Text style={{ fontSize: 44 }}>🏠</Text>
            </MotiView>

            <View
              style={{
                marginTop: 18,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(16,185,129,0.1)",
                borderRadius: 999,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderWidth: 1,
                borderColor: "rgba(16,185,129,0.25)",
              }}
            >
              <Sparkles size={14} color="#34d399" />
              <Text
                style={{
                  marginLeft: 6,
                  color: "#6ee7b7",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                All-in-one mess management
              </Text>
            </View>

            <Text
              style={{
                marginTop: 16,
                textAlign: "center",
                fontSize: 38,
                lineHeight: 44,
                fontWeight: "800",
                color: "white",
                letterSpacing: -0.5,
              }}
            >
              Mess Manager
            </Text>
            <Text
              style={{
                marginTop: 12,
                textAlign: "center",
                fontSize: 16,
                lineHeight: 24,
                color: "#a1a1aa",
                paddingHorizontal: 12,
              }}
            >
              Manage expenses, duties, meals, payments and communication —
              everything in one beautifully simple place.
            </Text>

            <Pressable
              style={({ pressed }) => ({
                marginTop: 28,
                opacity: pressed ? 0.85 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              })}
              onPress={() => {
                // Navigate to the "get-started" route when pressed
                router.push("/(root)");
              }}
            >
              <LinearGradient
                colors={["#34d399", "#059669"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 20,
                  paddingHorizontal: 28,
                  paddingVertical: 16,
                  shadowColor: "#10b981",
                  shadowOpacity: 0.4,
                  shadowRadius: 16,
                  shadowOffset: { width: 0, height: 8 },
                }}
              >
                <Text
                  style={{
                    marginRight: 8,
                    fontSize: 16,
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Get Started
                </Text>
                <ArrowRight size={18} color="white" />
              </LinearGradient>
            </Pressable>
          </MotiView>

          {/* Stats strip */}
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 600, delay: 200 }}
          >
            <GlassCard style={{ marginTop: 32 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                {stats.map((s, i) => (
                  <View key={i} style={{ alignItems: "center", flex: 1 }}>
                    <Text
                      style={{ fontSize: 22, fontWeight: "800", color: "white" }}
                    >
                      {s.value}
                    </Text>
                    <Text style={{ marginTop: 4, fontSize: 12, color: "#a1a1aa" }}>
                      {s.label}
                    </Text>
                  </View>
                ))}
              </View>
            </GlassCard>
          </MotiView>

          {/* Features */}
          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                marginBottom: 18,
                fontSize: 24,
                fontWeight: "800",
                color: "white",
              }}
            >
              Everything You Need
            </Text>

            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotiView
                  key={index}
                  from={{ opacity: 0, translateX: -16 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{
                    type: "timing",
                    duration: 500,
                    delay: 300 + index * 90,
                  }}
                >
                  <GlassCard style={{ marginBottom: 14 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <View
                        style={{
                          height: 52,
                          width: 52,
                          borderRadius: 18,
                          marginRight: 16,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${item.color}22`,
                          borderWidth: 1,
                          borderColor: `${item.color}44`,
                        }}
                      >
                        <Icon color={item.color} size={24} />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "white",
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            marginTop: 3,
                            fontSize: 13,
                            lineHeight: 18,
                            color: "#a1a1aa",
                          }}
                        >
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                  </GlassCard>
                </MotiView>
              );
            })}
          </View>

          {/* Bottom CTA card */}
          <MotiView
            from={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "timing", duration: 600, delay: 800 }}
            style={{ marginTop: 8 }}
          >
            <LinearGradient
              colors={["#059669", "#10b981", "#34d399"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                borderRadius: 28,
                padding: 24,
                shadowColor: "#10b981",
                shadowOpacity: 0.35,
                shadowRadius: 20,
                shadowOffset: { width: 0, height: 10 },
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "800", color: "white" }}>
                Built for Shared Living
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 21,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Perfect for student messes, hostels, bachelor flats and shared
                apartments. Stay organized, save time and avoid unnecessary
                confusion.
              </Text>
            </LinearGradient>
          </MotiView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}