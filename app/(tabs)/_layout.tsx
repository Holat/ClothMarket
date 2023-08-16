import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import CustomTab from "../../components/CustomTab";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "black",
      }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="payment" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
