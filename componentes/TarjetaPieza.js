// componentes/TarjetaPieza.js
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function TarjetaPieza({ pieza, alTocar }) {
  return (
    <TouchableHighlight 
      style={styles.tarjeta} 
      underlayColor="#E1E6E2" 
      onPress={alTocar} 
    >
      <View style={styles.contenidoTarjeta}>
        <Text style={styles.textoPrincipal}>{pieza.pieza}</Text>
        <Text style={styles.textoSecundario}>{pieza.fechaCambio}</Text>
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
  textoSecundario: { fontSize: 14, color: '#88928A' }
});