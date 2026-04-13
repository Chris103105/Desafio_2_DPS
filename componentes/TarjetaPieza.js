
//  Traemos 2 tipos de "botones" TouchableOpacity y TouchableHighlight  para dar distintos tipos de feedback visual en la misma tarjeta.
import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { estilosGrupales } from '../estilos';

// Nuestro componente recibe 3 "props" los datos y funciones que le inyecta su papá, App.js
// pieza: El objeto que trae el nombre, fecha, precio, etc.
// alTocar: La función que se dispara para abrir la ventana de detalles (el Modal).
// alEliminar: La función que avisa que esta tarjeta debe ser borrada de la lista.
export default function TarjetaPieza({ pieza, alTocar, alEliminar }) {
  return (
    // boton contendor de toda la tarjeta para abrir el modal al tocar cualquier parte de ella
    // Usamos TouchableHighlight porque permite cambiar el color de fondo cuando lo dejas presionado.
    // Esto le da al usuario la sensación táctil de que toco la tarjeta.
    <TouchableHighlight 
      style={estilosGrupales.tarjeta} 
      onPress={alTocar} // Si tocan en cualquier parte de la tarjeta, abrimos el modal
      underlayColor="#668DC0" 
    >
      
      {/* Contenedor interno con Flexbox: 
          flexDirection: 'row' pone las cosas de izquierda a derecha.
          justifyContent: 'space-between' empuja los textos a la izquierda y el botón a la derecha. */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        
        {/* La información resumida */}
        <View>
          {/* Leemos el nombre de la pieza directamente del objeto que nos pasaron */}
          <Text style={estilosGrupales.textoPrincipal}>{pieza.pieza}</Text>
          <Text style={estilosGrupales.textoSecundario}>Cambiada el: {pieza.fechaCambio}</Text>
        </View>
        
        {/*  El botón de borrar */}
        {/* Usamos TouchableOpacity aquí adentro para aislar el evento. 
            Al tocar "Eliminar", se ejecuta 'alEliminar' y el botón se hace un poco transparente, 
            sin activar por error la función 'alTocar' de la tarjeta gigante. */}
        <TouchableOpacity onPress={alEliminar} style={estilosGrupales.botonEliminar}>
          <Text style={estilosGrupales.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>
        
      </View>
    </TouchableHighlight>
  );
}