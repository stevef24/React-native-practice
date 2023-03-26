import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
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
import * as yup from "yup";

export default function RegisterScreen({ setIsSignedIn }) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});
	console.log(formData);

	const reviewSchema = yup.object({
		email: yup.string().email("Please provide a valid email").required(),
		password: yup.string().required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Password is required"),
		firstName: yup.string().required("First name cannot be empty").max(20),
		lastName: yup.string().required("Last name cannot be empty").min(4).max(20),
	});
	const register = () => {
		createUserWithEmailAndPassword(auth, formData.email, formData.password)
			.then((user) => {})
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
				onSubmit={(
					{ email, password, confirmPassword, firstName, lastName },
					actions
				) => {
					setFormData({
						email,
						password,
						confirmPassword,
						firstName,
						lastName,
					});
				}}
				validationSchema={reviewSchema}
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
						{props.errors.firstName && props.touched.firstName && (
							<View className="flex flex-row justify-between ">
								<Text className="text-red-500">{props.errors.firstName}</Text>
								<MaterialIcons name="error-outline" size={20} color="red" />
							</View>
						)}
						<View>
							<Text>Last Name</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="e.g ever"
								value={props.values.lastName}
								onChangeText={props.handleChange("lastName")}
							/>
							{props.errors.lastName && props.touched.lastName && (
								<View className="flex flex-row justify-between ">
									<Text className="text-red-500">{props.errors.lastName}</Text>
									<MaterialIcons name="error-outline" size={20} color="red" />
								</View>
							)}
						</View>
						<View>
							<Text>Email</Text>
							<TextInput
								className="py-4 px-2 border border-stone-200 rounded-xl focus:border-purple-900 mt-2"
								placeholder="Email"
								value={props.values.email}
								onChangeText={props.handleChange("email")}
							/>
							{props.errors.email && props.touched.email && (
								<View className="flex flex-row justify-between ">
									<Text className="text-red-500">{props.errors.email}</Text>
									<MaterialIcons name="error-outline" size={20} color="red" />
								</View>
							)}
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
							{props.errors.password && props.touched.password && (
								<View className="flex flex-row justify-between ">
									<Text className="text-red-500">{props.errors.password}</Text>
									<MaterialIcons name="error-outline" size={20} color="red" />
								</View>
							)}
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
							{props.errors.confirmPassword &&
								props.touched.confirmPassword && (
									<View className="flex flex-row justify-between ">
										<Text className="text-red-500">
											{props.errors.confirmPassword}
										</Text>
										<MaterialIcons name="error-outline" size={20} color="red" />
									</View>
								)}
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
