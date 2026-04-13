// componentes/TarjetaPieza.js
import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

export default function TarjetaPieza({ pieza, alEliminar }) {
  return (
    <TouchableHighlight 
      style={styles.tarjeta} 
      underlayColor="#E1E6E2" // Color suave al presionar
      onPress={() => console.log("Tocaste la pieza: ", pieza.pieza)}
    >
      <View style={styles.contenidoTarjeta}>
        <View>
          <Text style={styles.textoPrincipal}>{pieza.pieza}</Text>
          <Text style={styles.textoSecundario}>Marca: {pieza.marca}</Text>
          <Text style={styles.textoSecundario}>Fecha: {pieza.fechaCambio}</Text>
        </View>
        
        {/* Boton de eliminar */}
        <TouchableOpacity onPress={alEliminar} style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tarjeta: { 
    backgroundColor: '#FFFFFF', 
    marginBottom: 15, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: '#EBEFEB',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 
  },
  contenidoTarjeta: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20,
  },
  textoPrincipal: { fontSize: 17, fontWeight: '700', color: '#4A554D' },
  textoSecundario: { fontSize: 14, color: '#88928A', marginTop: 4, fontWeight: '500' },
  botonEliminar: { 
    paddingVertical: 8, paddingHorizontal: 12, 
    backgroundColor: '#F4E3E3', 
    borderRadius: 8 
  }, 
  textoEliminar: { color: '#B87B7B', fontWeight: 'bold' }
});