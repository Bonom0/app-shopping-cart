import { useState, useContext } from "react"
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native"

import { Feather } from '@expo/vector-icons'
import Product from "../../components/Product"
import { useNavigation } from "@react-navigation/native"
import { CartContext } from '../../contexts/CartContext'

export default function Home(){
  const { cart } = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])
  
  return(
    <SafeAreaView  style={styles.Container}>
      <View style={styles.CartContent}>
        <Text style={styles.Title}>Lista de produtos</Text>
        
        <TouchableOpacity 
          style={styles.CartButton}
          onPress={ () => navigation.navigate("Cart") }
        >
          <View style={styles.Dot}>
            <Text style={styles.DotText}>
              {cart?.length}
            </Text>
          </View>
          <Feather name="shopping-cart" size={30} color="#000"/>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.List}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Product data={item} /> }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14
  },
  CartContent:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24
  },
  Title:{
    fontSize: 24,
    fontWeight: "bold"
  },
  Dot:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute", //fica sobre o ícone do cart
    zIndex: 99, //faz com que a dot fique em cima do carrinha e não atrás
    bottom: -2,
    left: -4
  },
  DotText:{
    fontSize: 12
  }
})