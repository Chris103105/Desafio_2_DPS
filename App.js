// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Importamos nuestros componentes "ayudantes"
import FormularioPieza from './componentes/FormularioPieza';
import TarjetaPieza from './componentes/TarjetaPieza';
import ModalDetalle from './componentes/ModalDetalle';

// 1. IMPORTAMOS TUS ESTILOS CENTRALIZADOS
import { estilosGrupales } from './estilos';

export default function App() {
  const [listaDePiezas, setListaDePiezas] = useState([]);
  const [pantallaActual, setPantallaActual] = useState('lista'); 
  const [modalDetalle, setModalDetalle] = useState(false);
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);

  const agregarPiezaALaLista = (nuevaPieza) => {
    const nuevaLista = [...listaDePiezas, nuevaPieza].sort((a, b) => b.fechaParaOrdenar - a.fechaParaOrdenar);
    setListaDePiezas(nuevaLista);
    setPantallaActual('lista'); 
  };

  const eliminarPieza = (id) => {
    setListaDePiezas(listaDePiezas.filter(p => p.id !== id));
  };

  // --- RENDERIZADO DEL FORMULARIO ---
  if (pantallaActual === 'formulario') {
    return (
      <View style={estilosGrupales.contenedor}>
        <FormularioPieza 
          alGuardar={agregarPiezaALaLista} 
          alCancelar={() => setPantallaActual('lista')} 
        />
      </View>
    );
  }

  // --- RENDERIZADO DE LA LISTA PRINCIPAL ---
  return (
    <View style={estilosGrupales.contenedor}>
      
      {/* Nuevo encabezado más elegante */}
      <View style={estilosGrupales.encabezado}>
        <Text style={estilosGrupales.tituloPrincipal}>Piezas</Text>
        <TouchableOpacity style={estilosGrupales.botonAdd} onPress={() => setPantallaActual('formulario')}>
          <Text style={estilosGrupales.textoBotonAdd}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* AQUÍ ESTÁ EL ICONO DE LA TUERCA Y EL MENSAJE VACÍO */}
      {listaDePiezas.length === 0 ? (
        <View style={estilosGrupales.contenedorVacio}>
          <Text style={estilosGrupales.iconoVacio}>⚙️</Text>
          <Text style={estilosGrupales.textoVacio}>No hay piezas registradas.</Text>
          <Text style={estilosGrupales.subtextoVacio}>Toca en "+ Agregar" para empezar.</Text>
        </View>
      ) : (
        <FlatList
          data={listaDePiezas}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TarjetaPieza 
              pieza={item} 
              alTocar={() => { setPiezaSeleccionada(item); setModalDetalle(true); }}
              alEliminar={() => eliminarPieza(item.id)}
            />
          )}
        />
      )}

      {/* Aquí llamamos al Modal */}
      <ModalDetalle 
        visible={modalDetalle} 
        pieza={piezaSeleccionada} 
        alCerrar={() => setModalDetalle(false)} 
      />
    </View>
  );
}