import React, { useState } from "react";
import {
	Alert,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setIsSignedIn }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		console.log(email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				setIsSignedIn(true);
			})
			.catch((err) => {
				console.error(err);
				Alert.alert("Wrong Input", "Email or password are incorrect", [
					{ text: "Try again", onPress: () => {} },
				]);
			});
	};

	return (
		<SafeAreaView className="flex h-full justify-center items-center ">
			<View className="w-3/4 mb-4 gap-y-4">
				<Text className="text-3xl">
					Welcome to
					<Text className="text-purple-500 font-bold"> City Canvas</Text>
				</Text>
				<Text className="text-lg text-stone-500">Sign in to continue</Text>
			</View>
			<View className="flex w-3/4 gap-2 mt-2">
				<Text>Email ID</Text>
				<TextInput
					className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900"
					placeholder="Email"
					value={email}
					onChangeText={(input) => setEmail(input)}
				/>
				<Text>Password</Text>

				<TextInput
					className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900"
					placeholder="Password"
					value={password}
					secureTextEntry
					onChangeText={(input) => setPassword(input)}
				/>
			</View>
			<TouchableOpacity
				className="my-2 p-4 border flex justify-center items-center rounded-lg bg-purple-900 w-3/4 mt-4"
				onPress={signIn}
			>
				<Text className="text-xl text-white">Sign in</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
