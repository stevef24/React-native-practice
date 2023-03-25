import React, { useState } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import TodoItems from "./components/TodoItems";
import AddToDo from "./components/AddToDo";
import { NativeBaseProvider } from "native-base";

import Header from "./components/Header";
export default function App() {
	const [todos, setTodos] = useState([
		{ key: "1", text: "Buy groceries" },
		{ key: "2", text: "Take out the trash" },
		{ key: "3", text: "Do laundry" },
		{ key: "4", text: "Clean the bathroom" },
		{ key: "5", text: "Pay bills" },
		{ key: "6", text: "Walk the dog" },
		{ key: "7", text: "Call mom" },
		{ key: "8", text: "Finish homework" },
		{ key: "9", text: "Go to the gym" },
		{ key: "10", text: "Cook dinner" },
	]);

	const deleteTodo = (key) => {
		setTodos((prevTodo) => {
			return prevTodo.filter((todo) => todo.key !== key);
		});
	};
	const addTodo = (todo) => {
		setTodos((prevTodo) => [todo, ...prevTodo]);
	};

	return (
		<NativeBaseProvider>
			<SafeAreaView className="flex bg-white">
				<View className="flex justify-center items-center w-full gap-y-4">
					<Header />
					<AddToDo addTodo={addTodo} />
					<View className=" w-full flex justify-center items-center m-auto">
						<FlatList
							className="w-full"
							data={todos}
							renderItem={({ item }) => {
								return <TodoItems item={item} deleteTodo={deleteTodo} />;
							}}
						/>
					</View>
				</View>
			</SafeAreaView>
		</NativeBaseProvider>
	);
}
