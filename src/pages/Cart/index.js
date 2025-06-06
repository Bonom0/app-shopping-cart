import { useContext } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import { CartContext } from '../../contexts/CartContext'
import CardItem from '../../components/CardItem'

export default function Cart(){
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

  return(
    <View style={styles.Container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        key={ (item) => String(item.id) }
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho..</Text> }
        renderItem={ ({ item }) => (
          <CardItem
            data={item}
            addAmount={ () => addItemCart(item) }
            removeAmount={ () => removeItemCart(item) }
          />
        )}
        ListFooterComponent={ () => <Text style={styles.Total}>Total R$ {total} </Text> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14
  },
  Total:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 24,
  }
})