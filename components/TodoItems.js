import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native";

export default function TodoItems({ item, deleteTodo }) {
	return (
		<SafeAreaView className="flex border border-black border-solid rounded-xl p-4 mt-4 w-2/3 mx-auto flex-row justify-between">
			<Text className="p-4">{item.text}</Text>
			<View className="flex flex-row justify-center items-center">
				<TouchableOpacity onPress={() => deleteTodo(item.key)}>
					<Ionicons name="trash" size={32} color="grey" />
				</TouchableOpacity>
				<TouchableOpacity>
					<Ionicons name="md-checkmark-circle" size={32} color="grey" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
