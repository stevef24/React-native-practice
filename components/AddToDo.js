import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { Box, Button, Input } from "native-base";
import uuid from "react-native-uuid";
import { Alert } from "react-native";
export default function AddToDo({ addTodo }) {
	const [text, setText] = useState("");

	const handleAddItem = () => {
		if (text.length > 5) {
			addTodo({ key: uuid.v4(), text });
			setText("");
		} else {
			Alert.alert("Oops!", "Todos must be over 5 char long", [
				{ text: "understood", onPress: () => console.log("alert Closed") },
			]);
		}
	};

	return (
		<Box className="flex w-3/4 flex-row justify-center items-center my-2 gap-x-2">
			<Input
				variant="rounded"
				placeholder="add todo"
				onChangeText={(input) => setText(input)}
				value={text}
			/>
			<Button borderRadius="full" colorScheme="success" onPress={handleAddItem}>
				<Text>add item</Text>
			</Button>
		</Box>
	);
}
