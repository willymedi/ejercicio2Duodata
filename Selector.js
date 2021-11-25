import React, { } from 'react'
import {Text, View, Picker } from 'react-native'

const Selector= ({selectValue,setSelectedValue,styles}) => {
  
  return( 
    <View style={styles.containerTitle}>
        <Text style={styles.title}>Operación</Text>
        <Picker
            
            selectedValue={selectValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Suma" value="suma" />
            <Picker.Item label="Promedio" value="promedio" />
            <Picker.Item label="Aleatorio" value="aleatorio" />
        </Picker>
        </View>
  
    );
};



export default Selector;
