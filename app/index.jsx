import { StatusBar } from 'expo-status-bar';
import { ScrollView,  View } from 'react-native';
import {  useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { Image } from 'react-native';
import CustomButton from '../components/CustomButton'; 

import 'react-native-url-polyfill/auto'
import BouncingBalls from '../components/AnimatedBalls';

export default function App() {
        const router = useRouter();

        return (
                <SafeAreaView  className='justify-center'>
                       
                        <ScrollView contentContainerStyle={{ height: '100%' }}>
                        <BouncingBalls />
                                <View className="h-full w-full pb-20 px-4 ">
                                <View className=" w-full justify-center items-center  h-full px-4 pb-20  ">
                                       

                                        <Image source={images.cards} 
                                        className="max-w-[1000px] w-full h-[900px]  " 
                                        resizeMode='contain'
                                        style={{ width: '100%', height: 900 ,  marginTop: -50 }}
                                        /></View>
                                        <View className='justify-center item-center px-20' >
                                                <CustomButton
                                                title="GET STARTED" 
                                                handlePress={() => router.push('/sign')}
                                                containerStyle={{ w: 20, m: 7 }}
                                                /> 
                                        
                                  </View>
                                </View>
                           
                        </ScrollView>
                </SafeAreaView>
        )
}