import React, {useState,useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Form from './Form';
import Selector from './Selector';
import Display from './Display';
import Result from './Result';

const App = () => {
  const [selectValue, setSelectedValue] = useState("suma");
  const [valueInput, setValueInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [result, setResultado] = useState();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    showResults();
  }, [selectValue]);

 
  const urlRandom = "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new";

  const getRandom =async () => {
    const response=await fetch(urlRandom);
    const resp=await response.json();
    return resp;

    
    };

  function showResults(){
    setDisable(true);
    if (numbers.length>0){
      
      if(selectValue == "suma"){

        setResultado(sumValues);
      
      
      }
      if(selectValue == "promedio"){
        setResultado(promedioValues());

      }
      
    }
    if(selectValue == "aleatorio"){
      setDisable(false);
      getRandom().then(random =>{
        setResultado(random);
      });
    }
 


    }

  function  handleOnPress() {
    if(!isNaN(valueInput)){
      let arr = numbers;
      arr.push({key:Math.random(),value:Number(valueInput)});
    
      setNumbers([...arr]);
    
      
      showResults();


    }
   
    
  };

  function sumValues(){
    let sum = 0;
    for(let number of numbers){
     
      sum += Number(number.value);
    }
    return sum;
   
  }

  function promedioValues(){
    let suma= sumValues();
    return suma/numbers.length
  }
  return( 
    <View style={styles.container}>
     
      <Selector selectValue={selectValue} setSelectedValue={setSelectedValue} styles={styles}/>
      

      <Form handleOnPress={handleOnPress} disable={disable} setValueInput={setValueInput} styles={styles} />

      
      <Display numbers={numbers} styles={styles} />
      
      <Result result={result} styles={styles}/>

      


    </View>
  
    );
};

const styles = StyleSheet.create({
  container: {flex:1, alignItems: "center",    },
  containerTitle : {flex:2, flexDirection:'row',margin: 10},
  title: { fontSize:30 , height:50},
  picker: { height: 50, width: 150, marginLeft:20 },
  textInput: {height: 40,backgroundColor: 'azure', fontSize: 20, textAlign:"center"},
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: 'gray'
    
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16,
    textAlign: 'center'
  }
})

export default App;
