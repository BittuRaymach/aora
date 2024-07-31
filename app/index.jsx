import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-4xl font-poppinsBlack">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home">
        <Text
          style={{
            color: "blue",
            fontSize: 19,
          }}
        >
          Go to home
        </Text>
      </Link>
    </View>
  );
}
