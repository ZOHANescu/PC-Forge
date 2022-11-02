import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const UserMainScreen = () => {
  return (
    <>
        <View style={styles.container}>
            <Text>User Screen</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#9E7BFF",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default UserMainScreen