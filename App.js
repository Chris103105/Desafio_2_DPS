// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import TarjetaPieza from './componentes/TarjetaPieza'; // Importamos el nuevo componente

// DATOS DE PRUEBA (Para ver cómo se ve la lista antes de hacer el formulario)
const DATOS_DE_PRUEBA = [
  { id: '1', pieza: 'Bujía', marca: 'Bosch', fechaCambio: '12/04/2026' },
  { id: '2', pieza: 'Filtro de Aceite', marca: 'Fram', fechaCambio: '10/04/2026' },
];

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tituloPrincipal}>Mi Historial</Text>
      
      <TouchableOpacity style={styles.botonAdd}>
        <Text style={styles.textoBotonAdd}>+ Agregar Pieza</Text>
      </TouchableOpacity>

     
      <FlatList
        data={DATOS_DE_PRUEBA}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TarjetaPieza 
            pieza={item} 
            alEliminar={() => console.log("Se intentó eliminar el id:", item.id)}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F7F9F7', 
    paddingTop: 80, 
    paddingHorizontal: 20,
  },
  tituloPrincipal: {
    fontSize: 28, fontWeight: 'bold', color: '#4A554D', textAlign: 'center', marginBottom: 30,
  },
  botonAdd: {
    backgroundColor: '#A3B8A8', padding: 15, borderRadius: 12, alignItems: 'center', marginBottom: 20,
  },
  textoBotonAdd: {
    color: '#FFFFFF', fontWeight: 'bold', fontSize: 16,
  }
});