import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { collection, getDocs, setDoc, doc } from "firebase/firestore/lite";
import { db } from "../firebaseConfig";
import uuid from "react-native-uuid";
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

export default function RegisterScreen({ setIsSignedIn, navigation }) {
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

	const register = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
			.then((user) => {
				console.log("user created");
			})
			.catch((err) => {
				Alert.alert("Wrong Input", "Email or password are incorrect", [
					{ text: "Try again", onPress: () => {} },
				]);
			});
	};

	const setData = (firstName, lastName, email) => {
		const data = {
			firstName,
			lastName,
			email,
		};
		return setDoc(doc(db, "users", uuid.v4()), data);
	};

	// const getData = () => {
	// 	const userCollection = collection(db, "users");
	// 	return getDocs(userCollection).then((userSnapShot) => {
	// 		const userList = userSnapShot.docs.map((doc) => doc.data());
	// 		console.log(userList);
	// 	});
	// };

	// getData();

	return (
		<SafeAreaView className="flex items-center justify-center h-full ">
			<View className="w-3/4 mb-4 gap-y-4">
				<Text className="text-3xl font-bold text-purple-500">Register</Text>
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
				onSubmit={({
					email,
					password,
					confirmPassword,
					firstName,
					lastName,
				}) => {
					setData(firstName, lastName, email);
					register(email, password).then(() => {
						navigation.goBack();
					});
				}}
				validationSchema={reviewSchema}
			>
				{(props) => (
					<View className="flex w-3/4 gap-y-2">
						<View>
							<Text>First Name</Text>
							<TextInput
								className="px-2 py-4 mt-2 border border-stone-200 rounded-xl focus:border-purple-900"
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
								className="px-2 py-4 mt-2 border border-stone-200 rounded-xl focus:border-purple-900"
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
								className="px-2 py-4 mt-2 border border-stone-200 rounded-xl focus:border-purple-900"
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
								className="px-2 py-4 mt-2 border border-stone-200 rounded-xl focus:border-purple-900"
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
								className="px-2 py-4 mt-2 border border-stone-200 rounded-xl focus:border-purple-900"
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
								className="flex items-center justify-center p-4 my-2 mt-2 bg-purple-900 border rounded-lg "
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
