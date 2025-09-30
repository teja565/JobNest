import {Stack } from "expo-router";
import React from 'react'
import {useCallback} from 'react'
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMediusm: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })


  const onLayoutRootView = useCallback(
    async()=>{if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]
  )

  if(!fontsLoaded) return null;
  return (
    <Stack onLayout = {onLayoutRootView}/>
  )
}

export default Layout