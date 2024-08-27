import { Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import icons from '../../constants/icons'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const TabIcon = ({ Icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}>
      <Image
        source={Icon}
        style={{ tintColor: color, width: 24, height: 24 }} 
      />
      <Text
        style={{
          fontFamily: focused ? 'sans-serif' : 'monospace', 
          fontSize: 12, 
          color: color 
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tablayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel: false,
        tabBarActiveTintColor:'#ffffff',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle:{
          backgroundColor:'#023020',
          borderTopWidth:1,
          borderTopColor:'#232533',
          height:60,
          borderRadius:100

        }

      }}>
        <Tabs.Screen name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                Icon={icons.home}
                color={color}
                name="home"
                focused={focused}
              />
            )
          }}
        />
        
        <Tabs.Screen name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                Icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen name="addtocart"
          options={{
            title: 'Add to cart',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                Icon={icons.plus}
                color={color}
                name="addtocart"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default Tablayout