import { View, Text, FlatList, StatusBar,  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/Searchinput'

const Home = () => {
  return (
    <SafeAreaView>
          <StatusBar 
        barStyle="dark-content"
        backgroundColor="#ffffff" 
      />
     <FlatList
     data={[{id: 1}]}
     keyExtractor={(item)=> item.$id }
     renderItem={({item})=>( <Text className='text-3xl'>{item.id}</Text>)}
     ListHeaderComponrent={()=>(
      <View className="my-6 mx-6 space-y-6 ">
        <View className='justify-center items-start flex-row mb-6'>
          <SearchInput />
        </View>
      </View>
     )}/>
     
    </SafeAreaView>
  )
}

export default Home 