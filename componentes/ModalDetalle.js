
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { estilosGrupales } from '../estilos'; 

// Nuestro componente recibe 3 "props" desde App.js:
// visible: Un booleano (true/false) que le dice al Modal si debe mostrarse o no.
// pieza: El objeto completo con los datos (marca, precio, etc.) de la tarjeta que el usuario tocó.
// alCerrar: La función que cambia el booleano visible a false para desaparecer esta ventana.
export default function ModalDetalle({ visible, pieza, alCerrar }) {
  
  // validacion de seguridad (Corta-circuitos o Early Return)
  // Si por alguna razón la app intenta abrir el Modal sin haber seleccionado una pieza, 
  // detenemos el renderizado devolviendo 'null' para que la app no muestre una pantalla roja.
  if (!pieza) return null; 

  return (
    // El componente Modal es una ventana emergente que aparece por encima de todo lo demás.
    // transparent={true} permite que veamos la lista borrosa por detrás en lugar de un fondo blanco sólido.
    // animationType="fade" hace que aparezca y desaparezca suavemente, en lugar de aparecer de golpe.
    <Modal visible={visible} transparent={true} animationType="fade">
      
    
      {/* Esta View ocupa toda la pantalla (flex: 1) y tiene un color negro semitransparente (rgba) */}
      <View style={estilosGrupales.fondoModal}>
        
        {/* LA CAJA BLANCA DEL CENTRO */}
        <View style={estilosGrupales.cajaModal}>
          <Text style={estilosGrupales.tituloModal}>Detalle de la pieza</Text>
          
          {/* seccion de información */}
          <View style={estilosGrupales.info}>
           
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Pieza:</Text> {pieza.pieza}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Marca:</Text> {pieza.marca}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>No Serie:</Text> {pieza.noSerie}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Precio:</Text> ${pieza.precio}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Fecha:</Text> {pieza.fechaCambio}</Text>
          </View>

          {/* botton de cierre */}
          {/* Este botón ejecuta la función 'alCerrar' que nos mandó App.js, lo cual apaga el Modal. */}
          <TouchableOpacity style={estilosGrupales.botonCerrar} onPress={alCerrar}>
            <Text style={estilosGrupales.textoBotonCerrar}>Cerrar</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
}