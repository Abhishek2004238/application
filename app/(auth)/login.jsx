import { View, Text, Image, StatusBar, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormFeild from '../../components/formfeild';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router'; 

// import { signIn } from '../../lib/appwrite';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isSubmit, setIsSubmit] = useState(false); 
    const router = useRouter();

    const handleLogin = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }
        setIsSubmit(true);
        try {
            const result = await signIn(form.email, form.password);

          
            router.replace('/home'); 
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmit(false); 
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'white' }}>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <Image 
                        source={images.background} 
                        resizeMode="cover" 
                        style={{ width: '100%', height: 430 }}
                    />
                    <Image 
                        source={images.login} 
                        resizeMode="contain" 
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto' }}
                    />
                    <Text style={{ position: 'absolute', bottom: 14, left: 0, right: 0, fontSize: 32, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                        Sign In
                    </Text>
                </View>
                <View style={{ padding: 16 }}>
                    <View>
                        <FormFeild
                            title="Email"
                            value={form.email}
                            handleChangeText={(text) => setForm({ ...form, email: text })}
                            otherStyles={{ marginTop: 16 }}
                            keyboardType="email-address"
                            textColor="black"
                        />
                        <FormFeild
                            title="Password"
                            value={form.password}
                            handleChangeText={(text) => setForm({ ...form, password: text })}
                            otherStyles={{ marginTop: 16 }}
                            textColor="black"
                            secureTextEntry
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16 }}>
                        <Text style={{ color: 'gray' }}>Have An Account?</Text>
                        <Link href="/sign" style={{ color: 'blue', fontWeight: '600', marginLeft: 8 }}>
                            Sign In
                        </Link>
                    </View>
                    <Link href='/home'><Text>home</Text></Link>
                </View>
                <CustomButton
                    title={isSubmit ? "Signing In..." : "Sign In"}
                    onPress={handleLogin}
                    disabled={isSubmit}
                    otherStyles={{ marginBottom: 16, marginHorizontal: 16 }}
                />
                
            </View>
        </SafeAreaView>
    );
};

export default Login;
