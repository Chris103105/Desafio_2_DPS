// componentes/ModalDetalle.js
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function ModalDetalle({ visible, pieza, alCerrar }) {
  // Si no hay ninguna pieza seleccionada, no mostramos nada
  if (!pieza) return null; 

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.fondoGris}>
        <View style={styles.cajaModal}>
          <Text style={styles.titulo}>Detalles Registrados</Text>
          
          <Text style={styles.texto}>Pieza: {pieza.pieza}</Text>
          <Text style={styles.texto}>Marca: {pieza.marca}</Text>
          <Text style={styles.texto}>Fecha de cambio: {pieza.fechaCambio}</Text>

          <View style={styles.botonCerrar}>
         
            <Button title="Cerrar ventana" onPress={alCerrar} color="#88928A" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fondoGris: {
    flex: 1,
    backgroundColor: 'rgba(74, 85, 77, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaModal: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A554D',
    marginBottom: 15,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#6B756E',
    marginBottom: 8,
  },
  botonCerrar: {
    marginTop: 20,
  }
});