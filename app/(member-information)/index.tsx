import React, { useState } from "react";
import {
    View,
    Pressable,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Controller, useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, Camera } from "lucide-react-native";
import Text from "@/components/Text";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AmbientBackground from "@/components/Background";
import { useRouter } from "expo-router";



type FormData = {
    name: string;
    phone: string;
    dob: Date | null;
    occupation: string;
    image: string | null;
};

export default function CompleteProfileScreen() {

    const router = useRouter();

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            name: "",
            phone: "",
            dob: null,
            occupation: "",
            image: null,
        },
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    const image = watch("image");
    const dob = watch("dob");

    const pickImage = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) return;

        const result =
            await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
                mediaTypes: ["images"],
            });

        if (!result.canceled) {
            setValue("image", result.assets[0].uri);
        }
    };

    const onSubmit = (data: FormData) => {
        console.log(data);
        router.push("/(home)");
    };

    return (
        <AmbientBackground>
            <SafeAreaView className="flex-1">
                <KeyboardAwareScrollView
                    enableOnAndroid
                    keyboardShouldPersistTaps="handled"
                    extraScrollHeight={24}
                    contentContainerStyle={{
                        flexGrow: 1,
                        padding: 20,
                    }}
                >
                    <View className="mb-8">
                        <Text variant="h1">Complete Profile</Text>

                        <Text
                            variant="body2"
                            className="mt-2"
                        >
                            Tell us a little about yourself.
                        </Text>
                    </View>

                    <Card variant="outline">
                        <View className="items-center mb-8">
                            <Pressable onPress={pickImage}>
                                <View>
                                    <Avatar
                                        size="xl"
                                        uri={image ?? undefined}
                                        name="User"
                                    />

                                    <View className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-zinc-800 items-center justify-center border border-white/10">
                                        <Camera
                                            color="white"
                                            size={18}
                                        />
                                    </View>
                                </View>
                            </Pressable>

                            <Text
                                variant="caption"
                                className="mt-3"
                            >
                                Upload profile picture (optional)
                            </Text>
                        </View>

                        <View className="gap-5">
                            <Controller
                                control={control}
                                name="name"
                                rules={{
                                    required: "Name is required",
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Full Name"
                                        placeholder="Abdur Rahman Abid"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        error={errors.name?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="phone"
                                rules={{
                                    required: "Phone number is required",
                                }}
                                render={({ field }) => (
                                    <Input
                                        label="Phone Number"
                                        keyboardType="phone-pad"
                                        placeholder="01XXXXXXXXX"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                        error={errors.phone?.message}
                                    />
                                )}
                            />

                            <View>
                                <Text
                                    variant="label"
                                    className="mb-2"
                                >
                                    Date of Birth
                                </Text>

                                <Pressable
                                    onPress={() =>
                                        setShowDatePicker(true)
                                    }
                                >
                                    <View className="h-14 rounded-2xl border border-white/10 bg-zinc-900 px-4 flex-row items-center justify-between">
                                        <Text>
                                            {dob
                                                ? dob.toDateString()
                                                : "Select date"}
                                        </Text>

                                        <Calendar
                                            size={18}
                                            color="white"
                                        />
                                    </View>
                                </Pressable>

                                {errors.dob && (
                                    <Text className="text-red-400 mt-2 text-sm">
                                        {errors.dob.message}
                                    </Text>
                                )}
                            </View>

                            <Controller
                                control={control}
                                name="occupation"
                                render={({ field }) => (
                                    <Input
                                        label="Occupation"
                                        placeholder="Student (Optional)"
                                        value={field.value}
                                        onChangeText={field.onChange}
                                    />
                                )}
                            />

                            <Button
                                title="Save Information"
                                onPress={handleSubmit(onSubmit)}
                            />
                        </View>
                    </Card>
                </KeyboardAwareScrollView>

                {showDatePicker && (
                    <DateTimePicker
                        value={dob ?? new Date()}
                        mode="date"
                        display={
                            Platform.OS === "ios"
                                ? "spinner"
                                : "default"
                        }
                        maximumDate={new Date()}
                        onChange={(_, date) => {
                            setShowDatePicker(false);

                            if (date) {
                                setValue("dob", date);
                            }
                        }}
                    />
                )}
            </SafeAreaView>
        </AmbientBackground>
    );
}