// componentes/TarjetaPieza.js
import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

export default function TarjetaPieza({ pieza, alTocar, alEliminar }) {
  return (
    <TouchableHighlight 
      style={styles.tarjeta} 
      underlayColor="#E1E6E2" 
      onPress={alTocar}
    >
      <View style={styles.contenidoTarjeta}>
        {/* Lado Izquierdo: Textos */}
        <View style={{ flex: 1 }}>
          <Text style={styles.textoPrincipal}>{pieza.pieza}</Text>
          <Text style={styles.textoSecundario}>Marca: {pieza.marca}</Text>
        </View>

        {/* Lado Derecho: Botón Eliminar */}
        <TouchableOpacity style={styles.botonEliminar} onPress={alEliminar}>
          <Text style={styles.textoEliminar}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tarjeta: { 
    backgroundColor: '#FFFFFF', marginBottom: 15, borderRadius: 12, 
    borderWidth: 1, borderColor: '#EBEFEB', padding: 15
  },
  contenidoTarjeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  textoPrincipal: { fontSize: 16, fontWeight: 'bold', color: '#4A554D' },
  textoSecundario: { fontSize: 14, color: '#88928A' },
  botonEliminar: {
    backgroundColor: '#F4E3E3', // Salmón suave
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoEliminar: {
    color: '#B87B7B', // Rojo apagado
    fontWeight: 'bold',
  }
});