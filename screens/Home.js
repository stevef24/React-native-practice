import { SafeAreaView, Text } from "react-native";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

export default function Home() {
	return (
		<SafeAreaView>
			<Text>Home Page</Text>
		</SafeAreaView>
	);
}
