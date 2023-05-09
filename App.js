import React, { useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Pressable, Modal , View, FlatList,StatusBar} from 'react-native';
import Formulario from './src/COMPONENTES/formulario.js'

const App = () => {
  const [modalVisible,setModalVisible] = useState(false);
  const [pacientes,setPacientes]=useState([]);
  const [clave,setClave]=useState(0);

  type ItemProps = {nombrePaciente: string, nombrePropietario: string, email: string, telefono: string, sintomas: string};

  const Item = ({nombrePaciente, nombrePropietario, email, telefono, sintomas}: ItemProps) => (
  <View style={styles.contenedorPacientesDos}>
    <Text style={styles.labelCita}>Nombre del Paciente:</Text>
    <Text style={styles.textoCita}>{nombrePaciente}</Text>
    <Text style={styles.labelCita}>Nombre del Propietario:</Text>
    <Text style={styles.textoCita}>{nombrePropietario}</Text>
    <Text style={styles.labelCita}>Email:</Text>
    <Text style={styles.textoCita}>{email}</Text>
    <Text style={styles.labelCita}>Telefono:</Text>
    <Text style={styles.textoCita}>{telefono}</Text>
    <Text style={styles.labelCita}>Sintomas:</Text>
    <Text style={styles.textoCita}>{sintomas}</Text>
  </View>
  );

  console.log(clave);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}> Administrador de citas {''}
      	<Text style={styles.titulobold}>Veterinaria</Text>
      </Text>
      
      <Pressable
      style={styles.btnNuevaCita}
      onPress={()=>setModalVisible(true)} 
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
       
      <Formulario 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      pacientes={pacientes}
      setPacientes={setPacientes}
      clave={clave}
      setClave={setClave}
      />
      
      <View style={styles.contenedorPacientesUno}>
        <Text style={styles.titulo}>Citas Registradas:</Text>
        <FlatList
        data={pacientes}
        renderItem={({item}) => 
        <Item 
        nombrePaciente={item.nombrePaciente} 
        nombrePropietario={item.nombrePropietario}
        email={item.email}
        telefono={item.telefono}
        sintomas={item.sintomas}
        />}
        keyExtractor={item => item.clave}
      />
      </View>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#BCEBFA',
  flex: 1,
  paddingTop:40
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titulobold: {
    fontWeight: '800',
    color: '#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  contenedorPacientesUno:{
    margin:'10px',
  },
  contenedorPacientesDos:{
    margin:'10px',
    padding:'10px',
    backgroundColor:'#fff',
  },
  labelCita:{
    fontWeight:'600',
    fontSize:'20px',
  },
  textoCita:{
    fontSize:'18px',
    marginHorizontal:'5px',
  },
});

export default App;
