// componentes/FormularioPieza.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import DateTimePicker from '@react-native-community/datetimepicker'; // Importamos el calendario

export default function FormularioPieza({ alGuardar, alCancelar }) {
  const [nombrePieza, setNombrePieza] = useState('Bujía');
  const [marca, setMarca] = useState('');
  
  // --- NUEVOS ESTADOS ---
  const [noSerie, setNoSerie] = useState('');
  const [precio, setPrecio] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const manejarCambioFecha = (event, fechaSeleccionada) => {
    setMostrarCalendario(false); // Ocultamos el calendario al elegir
    if (fechaSeleccionada) {
      setFecha(fechaSeleccionada);
    }
  };

  const manejarGuardar = () => {
    // Actualizamos el objeto para que envíe todos los datos nuevos
    const nueva = {
      id: Date.now().toString(),
      pieza: nombrePieza,
      marca: marca,
      noSerie: noSerie,
      precio: precio,
      fechaCambio: fecha.toLocaleDateString() // Convierte la fecha a texto (ej: 12/04/2026)
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

      {/* --- NUEVO: NÚMERO DE SERIE --- */}
      <Text style={styles.etiqueta}>Número de Serie</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ej: 12345678" 
        value={noSerie} 
        onChangeText={setNoSerie} 
      />

      {/* --- NUEVO: PRECIO --- */}
      <Text style={styles.etiqueta}>Precio</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ej: 25.50" 
        value={precio} 
        onChangeText={setPrecio} 
        keyboardType="numeric" // Abre el teclado de números del celular
      />

      {/* --- NUEVO: FECHA CON CALENDARIO --- */}
      <Text style={styles.etiqueta}>Fecha de Cambio</Text>
      <TouchableOpacity 
        style={styles.botonFecha} 
        onPress={() => setMostrarCalendario(true)}
      >
        <Text style={styles.textoFecha}>{fecha.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {/* El calendario solo aparece si la variable mostrarCalendario es verdadera */}
      {mostrarCalendario && (
        <DateTimePicker 
          value={fecha} 
          mode="date" 
          display="default"
          onChange={manejarCambioFecha} 
        />
      )}

      <View style={styles.botones}>
        <Button title="Guardar" onPress={manejarGuardar} color="#A3B8A8" />
        <Button title="Cancelar" onPress={alCancelar} color="#88928A" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: { 
    marginTop: 20 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#4A554D' 
  },
  etiqueta: { 
    fontSize: 16, 
    marginBottom: 5, 
    color: '#6B756E' 
  },
  contenedorPicker: { 
    borderWidth: 1, 
    borderColor: '#E1E6E2', 
    borderRadius: 10, 
    marginBottom: 15,
    backgroundColor: '#FFFFFF'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#E1E6E2', 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 15,
    backgroundColor: '#FFFFFF'
  },
  botonFecha: {
    borderWidth: 1, 
    borderColor: '#E1E6E2', 
    borderRadius: 10, 
    padding: 12, 
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  textoFecha: {
    fontSize: 16,
    color: '#4A554D'
  },
  botones: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginTop: 10
  }
});