import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import TabBar from "../../../components/miniComponent/TabBar";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: "#503a3a", 
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <View
              className={`p-4 rounded-full ${
                focused ? "bg-soil" : "bg-white"
              }`}
            >
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={focused ? "#fff" : color}
                size={20}
              />
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "chatbox-ellipses-sharp" : "chatbox-ellipses-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name='transaction'
        options={{
          title: "Transaction",
          tabBarIcon: ({ focused, color }) => (
            <View
              className={`p-4 rounded-full ${
                focused ? "bg-soil" : "bg-white"
              }`}
            >
              <Ionicons
                name={focused ? "receipt-sharp" : "receipt-outline"}
                color={focused ? "#fff" : color}
                size={20}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <View
              className={`p-4 rounded-full ${
                focused ? "bg-soil" : "bg-white"
              }`}
            >
              <Ionicons
                name={focused ? "person-sharp" : "person-outline"}
                color={focused ? "#fff" : color}
                size={20}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    marginHorizontal: 24,   
    marginBottom: 15,       
    paddingHorizontal: 20,  
    paddingBottom: 20,  
    paddingVertical: 20,
    borderRadius: 30,       
    backgroundColor: "white",
    minHeight: 120,
    maxHeight: 140,
    justifyContent: 'center', 
    elevation: 0, 
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0, 
    shadowRadius: 0,
  },
  tabBarLabelStyle: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarBackgroundStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', 
  }
});