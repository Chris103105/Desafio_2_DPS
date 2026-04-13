// componentes/TarjetaPieza.js
import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { estilosGrupales } from '../estilos';

export default function TarjetaPieza({ pieza, alTocar, alEliminar }) {
  return (
    // --- AQUÍ ESTÁ EL TOUCHABLEHIGHLIGHT ---
    <TouchableHighlight 
      style={estilosGrupales.tarjeta} 
      onPress={alTocar}
      underlayColor="#668DC0" // Color que brilla al mantener presionado
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        <View>
          <Text style={estilosGrupales.textoPrincipal}>{pieza.pieza}</Text>
          <Text style={estilosGrupales.textoSecundario}>Cambiada el: {pieza.fechaCambio}</Text>
        </View>
        <TouchableOpacity onPress={alEliminar} style={estilosGrupales.botonEliminar}>
          <Text style={estilosGrupales.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
}// componentes/TarjetaPieza.js
import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { estilosGrupales } from '../estilos';

export default function TarjetaPieza({ pieza, alTocar, alEliminar }) {
  return (
    // --- AQUÍ ESTÁ EL TOUCHABLEHIGHLIGHT ---
    <TouchableHighlight 
      style={estilosGrupales.tarjeta} 
      onPress={alTocar}
      underlayColor="#668DC0" // Color que brilla al mantener presionado
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        <View>
          <Text style={estilosGrupales.textoPrincipal}>{pieza.pieza}</Text>
          <Text style={estilosGrupales.textoSecundario}>Cambiada el: {pieza.fechaCambio}</Text>
        </View>
        <TouchableOpacity onPress={alEliminar} style={estilosGrupales.botonEliminar}>
          <Text style={estilosGrupales.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
}