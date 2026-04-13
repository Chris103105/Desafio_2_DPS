import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import TarjetaPieza from './componentes/TarjetaPieza';
import FormularioPieza from './componentes/FormularioPieza';
import ModalDetalle from './componentes/ModalDetalle'; // Importamos el Modal

export default function App() {
  const [piezas, setPiezas] = useState([]);
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
  
  // --- NUEVOS ESTADOS PARA EL MODAL ---
  const [piezaElegida, setPiezaElegida] = useState(null); 
  const [verModal, setVerModal] = useState(false);

  const agregarPieza = (nueva) => {
    setPiezas([...piezas, nueva]);
    setMostrandoFormulario(false);
  };

  const abrirDetalles = (pieza) => {
    setPiezaElegida(pieza);
    setVerModal(true);
  };

  return (
    <View style={styles.contenedor}>
      {mostrandoFormulario ? (
        <FormularioPieza 
          alGuardar={agregarPieza} 
          alCancelar={() => setMostrandoFormulario(false)} 
        />
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.titulo}>Mi Historial</Text>
          
          <TouchableOpacity style={styles.boton} onPress={() => setMostrandoFormulario(true)}>
            <Text style={styles.textoBoton}>+ Agregar Pieza</Text>
          </TouchableOpacity>

          <FlatList
            data={piezas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TarjetaPieza 
                pieza={item} 
                alTocar={() => abrirDetalles(item)} // <-- Le pasamos la función al tocar
              />
            )}
          />
        </View>
      )}

      {/* --- AQUI LLAMAMOS AL MODAL --- */}
      <ModalDetalle 
        visible={verModal} 
        pieza={piezaElegida} 
        alCerrar={() => setVerModal(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F7F9F7', paddingTop: 60, paddingHorizontal: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#4A554D', textAlign: 'center', marginBottom: 20 },
  boton: { backgroundColor: '#A3B8A8', padding: 15, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  textoBoton: { color: 'white', fontWeight: 'bold' }
});