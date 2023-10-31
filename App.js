import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView className="flex-1 flexCol bg-red-500">
      <Text className="bg-blue-500">Text1</Text>
      <Text className="bg-blue-500">Text1</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}


