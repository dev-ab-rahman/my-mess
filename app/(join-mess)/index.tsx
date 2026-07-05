import { Link, router } from "expo-router";
import { ArrowRight, KeyRound } from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function JoinMessScreen() {
    return (
        <View className="flex-1 bg-[#050607] px-6 pt-20">

            {/* Header */}
            <View className="items-center">

                <View className="h-20 w-20 items-center justify-center rounded-full bg-sky-500/10">
                    <KeyRound
                        size={36}
                        color="#38BDF8"
                    />
                </View>

                <Text className="mt-6 text-center text-4xl font-bold text-white">
                    Join a Mess
                </Text>

                <Text className="mt-3 text-center text-base leading-7 text-zinc-400">
                    Enter the invite code shared by your mess admin to become a member.
                </Text>

            </View>

            {/* Invite Code */}

            <View className="mt-12">

                <Text className="mb-3 text-sm font-medium text-zinc-300">
                    Invite Code
                </Text>

                <View className="h-16 flex-row items-center rounded-2xl border border-zinc-800 bg-zinc-900 px-5">

                    <KeyRound
                        size={20}
                        color="#71717A"
                    />

                    <TextInput
                        placeholder="e.g. MESS-4K8P"
                        placeholderTextColor="#71717A"
                        autoCapitalize="characters"
                        autoCorrect={false}
                        className="ml-4 flex-1 text-lg font-semibold tracking-[2px] text-white"
                    />

                </View>

            </View>

            {/* Info Card */}

            <View className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-5">

                <Text className="text-base font-semibold text-white">
                    Need an invite code?
                </Text>

                <Text className="mt-2 leading-6 text-zinc-400">
                    Ask your mess admin to share the invite code with you. Once you enter
                    a valid code, you'll be able to preview the mess before joining.
                </Text>
                <Text className="mt-5 text-center text-sm leading-6 text-zinc-500">
                    Do you want to create a new mess instead? <Link href="/(create-mess)" className="font-semibold text-emerald-500 text-decoration: underline;">
                        Create a Mess</Link>
                </Text>

            </View>

            {/* Button */}

            <Pressable
                onPress={() => {
                    // Verify Invite Code
                    router.push("/(member-information)");
                }}
                className="mt-auto mb-10 h-14 flex-row items-center justify-center rounded-2xl bg-sky-500 active:opacity-90"
            >

                <Text className="text-base font-semibold text-black">
                    Continue
                </Text>

                <ArrowRight
                    size={18}
                    color="#000"
                    style={{ marginLeft: 8 }}
                />

            </Pressable>

        </View>
    );
}