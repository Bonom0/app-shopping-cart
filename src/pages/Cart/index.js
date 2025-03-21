import { View, Text, StyleSheet } from "react-native"


export default function Cart(){
  return(
    <View style={styles.Container}>
      <Text>Página Carrinho</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1
  }
})