import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign" />
        <Stack.Screen name="login" />
      </Stack>
        <StatusBar 
        barStyle="light-content" // Use 'dark-content' for dark text/icons
        backgroundColor="#023020" // Set the status bar color to green
      />
    </>
  )
}

export default AuthLayout