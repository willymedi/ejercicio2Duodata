import React, { } from 'react'
import {Text, View} from 'react-native'

const Result= ({result , styles}) => {
  
  return( 
    <View style={styles.containerTitle}>
        <Text>Resultado: </Text>
        <Text>{result}</Text>
    </View>
  
    );
};



export default Result;
