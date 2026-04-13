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


});