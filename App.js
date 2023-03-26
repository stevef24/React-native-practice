import { SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import Home from "./screens/Home";
import Navigator from "./routes/loginStack";

export default function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	return (
		<SafeAreaView className="flex w-full h-full ">
			{isSignedIn ? <Home /> : <Navigator />}
		</SafeAreaView>
	);
}
