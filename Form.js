import React, { } from 'react'
import {Text, View, TouchableOpacity, TextInput } from 'react-native'

const Form= ({handleOnPress,disable,setValueInput , styles}) => {
  
  return( 
    <View style={styles.containerTitle}>
        <Text style={styles.title}>Añadir Operando</Text>
        <TextInput  
          style={styles.textInput}
          editable={disable} selectTextOnFocus={disable}    
          onChangeText={(text) => setValueInput(text)}
          keyboardType="numeric"  
                />  
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
        </TouchableOpacity>
    </View>
  
    );
};



export default Form;
