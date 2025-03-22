import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartItem({ data, addAmount, removeAmount }) {
  const [amount, setAmout] = useState(data?.amount)
 
  function handleIncrease(){
    addAmount();
    setAmout(item => item + 1)
  }

  function handleDecrease(){
    removeAmount();
    if(amount === 0){
      setAmout(0);
      return;
    }

    setAmout(item => item - 1);
  }

  return (
   <View style={styles.Container}>
    <View>
      <Text style={styles.Title}>{data.name}</Text>
      <Text style={styles.Price}>R$ {data.price}</Text>
    </View>

    <View style={styles.AmountContainer}>
      <TouchableOpacity style={styles.ButtonAdd} onPress={handleDecrease}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.Amount}>{amount}</Text>
      <TouchableOpacity style={styles.ButtonAdd} onPress={handleIncrease}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8
  },
  Title:{
    fontWeight: 'bold',
    fontSize: 18
  },
  Price:{
    fontSize: 16
  },
  AmountContainer:{
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  ButtonAdd:{
    backgroundColor: '#168FFF',
    padding: 6,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 2
  },
  Amount:{
    marginLeft: 14,
    marginRight: 14
  }
})