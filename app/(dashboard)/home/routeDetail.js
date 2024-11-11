import { View, Text, Animated, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../../components/HeaderComponent'
import Thumbnail from '../../../components/Thumbnail'
import PointOfInterestDetail from '../../../components/PointOfInterestDetail'
import { useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { getRouteById } from '../../../redux/routesSlice'

const RouteDetailScreen = () => {
  const {id, imageUrl} = useLocalSearchParams()
  // console.log('route id: ', id)
  const dispatch = useDispatch()

  const routeData = useSelector((state) => state.travelRoute.travelRoute)
  const statusRoute = useSelector((state) => state.travelRoute.status)
  const errorRoute = useSelector((state) => state.travelRoute.error)

  const [loading, setLoading] = useState(true)
  const fadeAnim = useState(new Animated.Value(0))[0]

  useEffect(() => {
    if(id) {
      dispatch(getRouteById(id));
    }

    const loadingTimeout = setTimeout(() => setLoading(false), 1000)

    return () => clearTimeout(loadingTimeout)
  }, [dispatch, id])

  useEffect(() => {
    if(!loading && statusRoute === "succeed"){
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }, [loading, statusRoute])

  if(loading || statusRoute === "looading"){
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    )
  }


  return (
    <Animated.View style={{ flex:1, opacity: fadeAnim }}>
      <HeaderComponent text={routeData.title}>
        <View className="px-6 bg-[#f8f8f8]">
          <Thumbnail
            image={
              imageUrl
            }
          />

          <View className="p-6 bg-white text-sm rounded-[30px] mb-5 gap-5">
            <Text className="text-sm font-iregular text-evergreen">
                {routeData.description}
            </Text>
          </View>

          <PointOfInterestDetail pointOfInterest={routeData.routes}/>
        </View>
      </HeaderComponent>
    </Animated.View>
  )
}

export default RouteDetailScreen