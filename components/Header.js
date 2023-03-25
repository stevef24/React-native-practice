import { Text, View } from "react-native";

export default function Header() {
	return (
		<View className="bg-red-400 w-full p-16 flex justify-center items-center mt-10">
			<Text className="font-bold text-red-700 text-xl">To do List</Text>
		</View>
	);
}
