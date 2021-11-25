import React, { } from 'react'
import {Text, View,  FlatList } from 'react-native'

const Display= ({numbers,styles}) => {
  
  return( 
    <View style={styles.containerTitle}>
      <Text style={styles.title }>
         
          { numbers.length == 0 ? "Aun no ha ingresado numeros":"" } 
      </Text>
        <FlatList
          data={numbers}
          renderItem = {({item}) =>(
            <Text>{item.value}</Text>
          )}
        >

        </FlatList>
    </View>
  
    );
};



export default Display;
