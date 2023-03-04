import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [materia, setMateria] = useState("");
  const Separator = () => <View style={styles.separator} />;
  const [materia2, setMateria2] = useState("");
  const [materia3, setMateria3] = useState("");
  const [unificador, setUnificador] = useState("");

  const onPressUnificador = () => {
    setUnificador(materia + " \n" + materia2 + " \n " + materia3),
      setMateria(""),
      setMateria2(""),
      setMateria3("");
  };

  const Materias = (props) => {
    return (
      <View>
        <Text>{props.nombre}</Text>
      </View>
    );
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>REGISTRO DE MATERIAS</Text>
      <Text style={styles.otroText}>
        Favor de Ingresar las Materias a Cursar
      </Text>
      <TextInput
        style={styles.cajaTexto}
        //defaultValue="Nombre de materia"
        onChangeText={setMateria}
        //defaultValue={materia}
        value={materia}
        placeholder="Materia 1"
      />
      <Separator />

      <TextInput
        style={styles.cajaTexto}
        //defaultValue="Nombre de materia"
        onChangeText={setMateria2}
        value={materia2}
        placeholder="Materia 2"
      />
      <Separator />
      <TextInput
        style={styles.cajaTexto}
        //defaultValue="Nombre de materia"
        onChangeText={setMateria3}
        value={materia3}
        placeholder="Materia 3"
      />
      <Separator />
      <TouchableOpacity>
          <Text style = {styles.button}>
            <Button onPress={onPressUnificador}
            title = "Cargar Materias"
            color= "white"
           
            

            ></Button>
          </Text>
        </TouchableOpacity>
     
    
      <Text style= {styles.Mat}>MATERIAS</Text>
      <Materias nombre={unificador} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaTexto: {
    height: 30,
    borderColor: "grey",
    borderWidth: 1,
    minWidth: 200,
  },
  
  titulo: {
    //height: 100,
    color: "#00ced1",
    fontSize: 33,
  },
  otroText: {
    fontSize: 20,
    padding: 20,
  },

  Mat : {
    fontSize: 40,
    color : "gold"
  },
 
  button: {
    width: 150,
    height: 40,
    borderWidth: 2,
    padding: 0,
    borderColor: 'black',
    backgroundColor: "darkturquoise" ,

    //textAlign: "center"
    
 },
  separator: {
    marginVertical: 20,
    //borderBottomColor: "#fffff",
    //borderBottomWidth: StyleSheet.hairlineWidth,
    //backgroundColor: '#253DFF'
  },
});
