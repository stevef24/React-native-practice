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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";

export default function RegisterScreen({ setIsSignedIn }) {
	const register = () => {
		createUserWithEmailAndPassword(auth, email, password)
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
				<Text className="text-3xl text-purple-500 font-bold">Register</Text>
				<Text className="text-lg text-stone-500">Sign up to continue</Text>
			</View>
			<Formik
				initialValues={{
					email: "",
					password: "",
					confirmPassword: "",
					firstName: "",
					lastName: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<View className="w-3/4 flex gap-y-2">
						<View>
							<Text>First Name</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="e.g greatest"
								value={props.values.firstName}
								onChangeText={props.handleChange("firstName")}
								required
							/>
						</View>
						<View>
							<Text>Last Name</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="e.g ever"
								value={props.values.lastName}
								onChangeText={props.handleChange("lastName")}
							/>
						</View>
						<View>
							<Text>Email ID</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="Email"
								value={props.values.email}
								onChangeText={props.handleChange("email")}
							/>
						</View>
						<View>
							<Text>Password</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="Password"
								value={props.values.password}
								secureTextEntry
								onChangeText={props.handleChange("password")}
							/>
						</View>
						<View>
							<Text>Confirm Password</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="Password"
								value={props.values.confirmPassword}
								secureTextEntry
								onChangeText={props.handleChange("confirmPassword")}
							/>
						</View>
						<View>
							<TouchableOpacity
								className="my-2 p-4 border flex justify-center items-center rounded-lg bg-purple-900 mt-2 "
								onPress={props.handleSubmit}
							>
								<Text className="text-xl text-white">Sign up!</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Formik>
		</SafeAreaView>
	);
}
