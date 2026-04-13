import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedor}>
      {/* Título de la App */}
      <Text style={styles.tituloPrincipal}>Piezas</Text>
      
      {/* Botón inicial (Aún no tiene funcionalidad) */}
      <TouchableOpacity style={styles.botonAdd}>
        <Text style={styles.textoBotonAdd}>+ Agregar Pieza</Text>
      </TouchableOpacity>

      {/* Mensaje de estado vacío */}
      <View style={styles.contenedorVacio}>
        <Text style={styles.textoVacio}>No hay piezas, Agregue una</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos básicos iniciales
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F7F9F7', // Nuestro fondo relajante
    paddingTop: 80, // Espacio para que no choque con la hora del celular
    paddingHorizontal: 20,
  },
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
  },
  botonAdd: {
    backgroundColor: '#000742', // Verde salvia
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotonAdd: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contenedorVacio: {
    alignItems: 'center',
    marginTop: 80,
  },
  textoVacio: {
    fontSize: 16,
    color: '#102647',
  }
});