import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormFeild from '../../components/formfeild';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { StatusBar } from 'react-native';
// import { createUser } from '../../lib/appwrite';

const Sign = () => {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [isSubmit, isSetSubmit] = useState(false);

  const Sumbmit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }
    isSetSubmit(true);
    try {
      // Assuming createUser is a function that creates a user
      const result = await createUser(form.email, form.password, form.username);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1">
            <StatusBar 
        barStyle="light-content"
        backgroundColor="#01613B" 
      />
      <View className="flex-1 justify-between bg-white">
        <View className="relative w-full justify-center">
          <Image
            source={images.background}
            resizeMode="cover"
            className="w-full h-half"
          />
          <Image
            source={images.sign}
            resizeMode="contain"
            className="absolute top-0 left-0 right-0 bottom-0 m-auto"
          />
          <Text className="absolute bottom-14 left-0 right-0 text-4xl text-center text-white font-bold">
            Sign Up
          </Text>
        </View>
        <View className="px-2 pb-10">
          <View>
            <FormFeild
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-2"
              textColor="black"
            />
            <FormFeild
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-2"
              keyboardType="email-address"
              textColor="black"
            />
            <FormFeild
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-2"
              secureTextEntry
              textColor="black"
            />
          </View>
          <View className="flex-row justify-end">
            <Text className="text-gray-600">Already have an account? </Text>
            <Link href="/login" className="text-blue-500 font-semibold">
              Log In
            </Link>
          </View>
        </View>
        <CustomButton
          title="Sign Up"
          onPress={Sumbmit}
          otherStyles="mb-7 mx-3"
        />
      </View>
    </SafeAreaView>
  );
}

export default Sign;
