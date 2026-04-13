// estilos.js
import { StyleSheet } from 'react-native';

export const estilosGrupales = StyleSheet.create({
// estilos generales para toda la app
  contenedor: { 
    flex: 1, 
    paddingTop: 60, 
    paddingHorizontal: 20, 
    backgroundColor: 'white' 
  },
  encabezado: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    marginBottom: 20 
  },
  tituloPrincipal: { 
    fontSize: 28, fontWeight: 'bold', color: '#0F1C30' 
  },
  botonAdd: { 
    backgroundColor: '#668DC0', 
    paddingVertical: 10, paddingHorizontal: 15, borderRadius: 20 
  },
  textoBotonAdd: { color: 'white', fontWeight: 'bold' },
  
  // Lista vacía para cuando no hay piezas registradas
  contenedorVacio: { alignItems: 'center', justifyContent: 'center', marginTop: 100 },
  iconoVacio: { fontSize: 70, marginBottom: 15 },
  textoVacio: { fontSize: 18, color: '#304A6E', fontWeight: 'bold' }, // Azul Oscuro
  subtextoVacio: { fontSize: 14, color: '#668DC0', marginTop: 5 }, // Azul Medio

//estilos del formulario para agregar nueva pieza
  tituloSecundario: { 
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#0F1C30' 
  },
  fila: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  etiqueta: { width: '30%', fontSize: 16, color: '#304A6E', fontWeight: 'bold' },
  input: { 
    flex: 1, backgroundColor: '#FFFFFF', padding: 12, 
    borderRadius: 8, fontSize: 16, color: '#0F1C30', 
    borderWidth: 1, borderColor: '#C2C6CE' 
  },
  botonFecha: { 
    flex: 1, backgroundColor: '#C0D0EF', padding: 12, borderRadius: 8, alignItems: 'center', // Azul Cielo Claro
    borderWidth: 1, borderColor: '#668DC0'
  },
  textoFecha: { fontSize: 16, color: '#0F1C30', fontWeight: 'bold' },
  filaBotones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  boton: { padding: 15, borderRadius: 8, flex: 0.48, alignItems: 'center' },
  botonGuardar: { backgroundColor: '#304A6E' }, 
  botonCancelar: { backgroundColor: '#C2C6CE' }, 
  textoBotonBlanco: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  textoBotonOscuro: { color: '#0F1C30', fontWeight: 'bold', fontSize: 16 },

// estilos para las tarjetas de cada pieza en la lista
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
  
  // estilos para el modal de detalles de la pieza
  // Usamos tu color más oscuro con un poco de transparencia para el fondo del modal
  fondoModal: { flex: 1, backgroundColor: 'rgba(15, 28, 48, 0.6)', justifyContent: 'center', alignItems: 'center' },
  cajaModal: { width: '80%', backgroundColor: 'white', padding: 25, borderRadius: 15, borderWidth: 2, borderColor: '#668DC0' },
  tituloModal: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#0F1C30' },
  info: { marginBottom: 25 },
  textoDetalle: { fontSize: 16, marginBottom: 8, color: '#304A6E' },
  negrita: { fontWeight: 'bold', color: '#0F1C30' },
  botonCerrar: { backgroundColor: '#C2C6CE', padding: 12, borderRadius: 8, alignItems: 'center' },
  textoBotonCerrar: { fontWeight: 'bold', color: '#0F1C30' }
});