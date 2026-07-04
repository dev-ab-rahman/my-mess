import { View, Text, TextInput, Pressable } from "react-native";
import { House, MapPin, Users, ArrowRight } from "lucide-react-native";
import Screen from "@/components/Screen";
import { useState } from "react";
import { Minus, Plus } from "lucide-react-native";
import { Link, useRouter } from "expo-router";

export default function index() {

    const router = useRouter();

    const [members, setMembers] = useState(4);

    const decrease = () => {
        if (members > 2) {
            setMembers((prev) => prev - 1);
        }
    };

    const increase = () => {
        if (members < 20) {
            setMembers((prev) => prev + 1);
        }
    };
    return (
        <Screen >
            <View className="p-6">

                {/* Header */}
                <View className="items-center">

                    <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                        <House
                            size={38}
                            color="#10B981"
                            strokeWidth={2.2}
                        />
                    </View>

                    <Text className="text-3xl font-bold text-white">
                        Create Your Mess
                    </Text>

                    <Text className="mt-3 text-center text-base leading-6 text-zinc-400">
                        Set up your shared home in less than a minute.
                    </Text>
                </View>

                {/* Mess Name */}

                <View className="mt-10">

                    <Text className="mb-2 font-medium text-zinc-300">
                        Mess Name
                    </Text>

                    <View className="h-14 flex-row items-center rounded-2xl border border-zinc-700 bg-zinc-950 px-4">

                        <House
                            size={18}
                            color="#71717A"
                        />

                        <TextInput
                            placeholder="Dream House"
                            placeholderTextColor="#71717A"
                            className="ml-3 flex-1 text-base text-white"
                        />

                    </View>
                </View>

                {/* Location */}

                <View className="mt-5">

                    <Text className="mb-2 font-medium text-zinc-300">
                        Location
                    </Text>

                    <View className="h-14 flex-row items-center rounded-2xl border border-zinc-700 bg-zinc-950 px-4">

                        <MapPin
                            size={18}
                            color="#71717A"
                        />

                        <TextInput
                            placeholder="Chattogram (Optional)"
                            placeholderTextColor="#71717A"
                            className="ml-3 flex-1 text-base text-white"
                        />

                    </View>
                </View>

                {/* Members */}

                <View className="mt-5">
                    <Text className="mb-2 font-medium text-zinc-300">
                        Expected Members
                    </Text>

                    <View className="h-14 flex-row items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-950 px-4">

                        <View className="flex-row items-center">
                            <Users size={18} color="#71717A" />

                            <Text className="ml-3 text-white">
                                Members
                            </Text>
                        </View>

                        <View className="flex-row items-center">

                            <Pressable
                                onPress={decrease}
                                className="h-9 w-9 items-center justify-center rounded-full bg-zinc-800 active:opacity-70"
                            >
                                <Minus size={18} color="#FFFFFF" />
                            </Pressable>

                            <Text className="mx-5 min-w-[30px] text-center text-lg font-bold text-white">
                                {members}
                            </Text>

                            <Pressable
                                onPress={increase}
                                className="h-9 w-9 items-center justify-center rounded-full bg-emerald-500 active:opacity-70"
                            >
                                <Plus size={18} color="#000000" />
                            </Pressable>

                        </View>

                    </View>
                </View>

                {/* Button */}

                <Pressable onPress={()=>router.push('/(home)')} className="mt-8 h-14 flex-row items-center justify-center rounded-2xl bg-emerald-500 active:opacity-90">

                    <Text className="text-base font-semibold text-black">
                        Create Mess
                    </Text>

                    <ArrowRight
                        size={18}
                        color="#000"
                        style={{ marginLeft: 8 }}
                    />

                </Pressable>

                <Text className="mt-5 text-center text-sm leading-6 text-zinc-500">
                    You can update these details later from Settings.
                </Text>
                <Text className="mt-5 text-center text-sm leading-6 text-zinc-500">
                    Have a mess code? <Link href="/(join-mess)" className="font-semibold text-emerald-500 text-decoration: underline;">
                        Join a Mess</Link>
                </Text>

            </View>
        </Screen>
    );
}