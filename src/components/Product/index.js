import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ data }) {
 return (
   <View style={styles.Container}>
    <View>
      <Text style={styles.Title}> {data.name} </Text>
      <Text style={styles.Name}> R$ {data.price} </Text>
    </View>

    <TouchableOpacity style={styles.ButtonAdd}>
      <Text style={styles.ButtonText}>+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Title:{
    fontWeight: 'bold'
  },
  ButtonAdd:{
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#168FFF',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2
  }
})