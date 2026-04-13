// componentes/FormularioPieza.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

export default function FormularioPieza({ alGuardar, alCancelar }) {
  const [nombrePieza, setNombrePieza] = useState('Bujía');
  const [marca, setMarca] = useState('');

  const manejarGuardar = () => {
    // Creamos un objeto simple con lo que escribió el usuario
    const nueva = {
      id: Date.now().toString(),
      pieza: nombrePieza,
      marca: marca,
      fechaCambio: new Date().toLocaleDateString() // Fecha de hoy por default para no complicar el código
    };
    alGuardar(nueva);
  };

  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Nueva Pieza</Text>

      <Text style={styles.etiqueta}>¿Qué pieza es?</Text>
      <View style={styles.contenedorPicker}>
        <Picker
          selectedValue={nombrePieza}
          onValueChange={(item) => setNombrePieza(item)}
        >
          <Picker.Item label="Bujía" value="Bujía" />
          <Picker.Item label="Batería" value="Batería" />
          <Picker.Item label="Filtro" value="Filtro" />
        </Picker>
      </View>

      <Text style={styles.etiqueta}>Marca</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ej: Bosch" 
        value={marca} 
        onChangeText={setMarca} 
      />

      <View style={styles.botones}>
        {/* Usamos Button nativo como pide la rúbrica */}
        <Button title="Guardar" onPress={manejarGuardar} color="#A3B8A8" />
        <Button title="Cancelar" onPress={alCancelar} color="#88928A" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: { marginTop: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#4A554D' },
  etiqueta: { fontSize: 16, marginBottom: 5, color: '#6B756E' },
  contenedorPicker: { borderWidth: 1, borderColor: '#E1E6E2', borderRadius: 10, marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#E1E6E2', borderRadius: 10, padding: 10, marginBottom: 20 },
  botones: { flexDirection: 'row', justifyContent: 'space-around' }
});