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
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const { setIsSignedIn } = useContext(UserContext);

	const signIn = () => {
		console.log(email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				// setIsSignedIn(true);
			})
			.catch((err) => {
				console.error(err);
				Alert.alert("Wrong Input", "Email or password are incorrect", [
					{ text: "Try again", onPress: () => {} },
				]);
			});
	};

	return (
		<SafeAreaView className="flex items-center justify-center h-full ">
			<View className="w-3/4 mb-4 gap-y-4">
				<Text className="text-3xl">
					Welcome to
					<Text className="font-bold text-purple-500"> City Canvas</Text>
				</Text>
				<Text className="text-lg text-stone-500">Sign in to continue</Text>
			</View>
			<View className="flex w-3/4 gap-2 mt-2">
				<Text>Email ID</Text>
				<TextInput
					className="px-2 py-4 border border-stone-200 rounded-xl focus:border-purple-900"
					placeholder="Email"
					value={email}
					onChangeText={(input) => setEmail(input)}
				/>
				<Text>Password</Text>

				<TextInput
					className="px-2 py-4 border border-stone-200 rounded-xl focus:border-purple-900"
					placeholder="Password"
					value={password}
					secureTextEntry
					onChangeText={(input) => setPassword(input)}
				/>
			</View>
			<TouchableOpacity
				className="flex items-center justify-center w-3/4 p-4 my-2 mt-4 bg-purple-900 border rounded-lg"
				onPress={signIn}
			>
				<Text className="text-xl text-white">Sign in</Text>
			</TouchableOpacity>
			<TouchableOpacity
				className="flex gap-y-2"
				onPress={() => navigation.push("Register")}
			>
				<Text>Dont have an account yet?</Text>
				<Text className="ml-2 font-bold text-center text-purple-900">
					Register here!
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
