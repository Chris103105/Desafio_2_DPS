// componentes/ModalDetalle.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

// Importamos los estilos centralizados
import { estilosGrupales } from '../estilos'; 

export default function ModalDetalle({ visible, pieza, alCerrar }) {
  if (!pieza) return null; 

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={estilosGrupales.fondoModal}>
        <View style={estilosGrupales.cajaModal}>
          <Text style={estilosGrupales.tituloModal}>Detalle de la pieza</Text>
          
          <View style={estilosGrupales.info}>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Pieza:</Text> {pieza.pieza}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Marca:</Text> {pieza.marca}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>No Serie:</Text> {pieza.noSerie}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Precio:</Text> ${pieza.precio}</Text>
            <Text style={estilosGrupales.textoDetalle}><Text style={estilosGrupales.negrita}>Fecha:</Text> {pieza.fechaCambio}</Text>
          </View>

          <TouchableOpacity style={estilosGrupales.botonCerrar} onPress={alCerrar}>
            <Text style={estilosGrupales.textoBotonCerrar}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}