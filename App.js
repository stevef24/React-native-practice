import { SafeAreaView, Text } from "react-native";
import Login from "./screens/Login";
import Home from "./screens/Home";
import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import RegisterScreen from "./screens/RegisterScreen";

export default function App() {
	const [isSignedIn, setIsSignedIn] = useState(true);

	return (
		<NativeBaseProvider>
			<SafeAreaView className=" flex h-full w-full">
				{isSignedIn ? (
					<RegisterScreen />
				) : (
					<Login setIsSignedIn={setIsSignedIn} />
				)}
			</SafeAreaView>
		</NativeBaseProvider>
	);
}
