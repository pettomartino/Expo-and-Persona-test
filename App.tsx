import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inquiry from 'react-native-persona'

const InquiryLauncher = ({templateId}) => {
  const handleSuccess = useCallback((inquiryId, attributes) => {
     console.log("Inquiry #{inquiryId} succeeded with attributes #{attributes}");
  }, []);

  const handleCancelled = useCallback(() => {
    console.log("Inquiry was cancelled")
  }, []);

  const handleFailed = useCallback(inquiryId => {
    console.log("Inquiry #{inquiryId} failed.")
  }, []);

  const handleError = useCallback(error => {
    console.error(error);
  }, []);

  const handleBeginInquiry = useCallback(() => {
    Inquiry.fromTemplate(templateId)
      .onSuccess(handleSuccess)
      .onCancelled(handleCancelled)
      .onFailed(handleFailed)
      .onError(handleError)
      .build()
      .start();
  }, [templateId])

  return (
    <Button onPress={handleBeginInquiry} title="Start inquiry" />
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <InquiryLauncher templateId="tmpl_uaNLbtnrSPw38zYgRdVasLbU" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
