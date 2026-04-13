// estilos.js
import { StyleSheet } from 'react-native';

export const estilosGrupales = StyleSheet.create({


  // Estilo de la Tarjeta de cada pieza 

  tarjeta: { 
    backgroundColor: 'white', 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 18, marginBottom: 12, 
    borderRadius: 12, borderWidth: 1, borderColor: '#C2C6CE',
    borderLeftWidth: 1, 
  },
  textoPrincipal: { fontSize: 16, fontWeight: 'bold', color: '#0F1C30' },
  textoSecundario: { fontSize: 14, color: '#668DC0', marginTop: 4, fontWeight: 'bold' },
  botonEliminar: { padding: 8, backgroundColor: '#C0D0EF', borderRadius: 6 }, 
  textoEliminar: { color: '#0F1C30', fontWeight: 'bold' }, 


  // Estilos para el Formulario de agregar nueva pieza

  tituloSecundario: { 
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#0F1C30' 
  },
  fila: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  etiqueta: { width: '30%', fontSize: 16, color: '#304A6E', fontWeight: 'bold' },
  input: { 
    flex: 1, backgroundColor: '#FFFFFF', padding: 12, 
    borderRadius: 8, fontSize: 16, color: '#0F1C30', 
    borderWidth: 1, borderColor: '#C2C6CE' // Borde Gris Claro
  },
  botonFecha: { 
    flex: 1, backgroundColor: '#C0D0EF', padding: 12, borderRadius: 8, alignItems: 'center', // Azul Cielo Claro
    borderWidth: 1, borderColor: '#668DC0'
  },
  textoFecha: { fontSize: 16, color: '#0F1C30', fontWeight: 'bold' },
  filaBotones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  boton: { padding: 15, borderRadius: 8, flex: 0.48, alignItems: 'center' },
  botonGuardar: { backgroundColor: '#304A6E' }, // Azul Oscuro
  botonCancelar: { backgroundColor: '#C2C6CE' }, // Gris Claro
  textoBotonBlanco: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  textoBotonOscuro: { color: '#0F1C30', fontWeight: 'bold', fontSize: 16 },


});