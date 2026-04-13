// componentes/FormularioPieza.js
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Importamos el Picker
import { estilosGrupales } from '../estilos';

export default function FormularioPieza({ alGuardar, alCancelar }) {
  // El estado de textoPieza ahora inicia con la primera opción del Picker
  const [textoPieza, setTextoPieza] = useState('Bujía'); 
  const [textoMarca, setTextoMarca] = useState('');
  const [textoNoSerie, setTextoNoSerie] = useState('');
  const [textoPrecio, setTextoPrecio] = useState('');
  const [fechaObjeto, setFechaObjeto] = useState(new Date()); 
  const [fechaTexto, setFechaTexto] = useState('Seleccionar fecha'); 
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const tieneNumeros = (texto) => /\d/.test(texto);

  const alCambiarFecha = (event, fechaSeleccionada) => {
    setMostrarCalendario(false);
    if (fechaSeleccionada) {
      setFechaObjeto(fechaSeleccionada);
      setFechaTexto(fechaSeleccionada.toLocaleDateString());
    }
  };

  const validarYGuardar = () => {
    if (!textoPieza || !textoMarca || !textoNoSerie || !textoPrecio || fechaTexto === 'Seleccionar fecha') {
      return Alert.alert("Campos vacíos", "Por favor, completa toda la información.");
    }
    if (tieneNumeros(textoMarca)) {
      return Alert.alert("Error", "La marca no puede contener números.");
    }

    const nuevaPieza = {
      id: Date.now().toString(),
      pieza: textoPieza, // Toma el valor del Picker
      marca: textoMarca,
      noSerie: textoNoSerie,
      precio: textoPrecio,
      fechaCambio: fechaTexto,
      fechaParaOrdenar: fechaObjeto
    };
    
    alGuardar(nuevaPieza);
  };

  return (
    <View style={estilosGrupales.contenedor}>
      <Text style={estilosGrupales.tituloSecundario}>Nueva Pieza</Text>
      
      {/* --- AQUÍ ESTÁ EL PICKER --- */}
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Pieza</Text>
        <View style={[estilosGrupales.input, { padding: 0 }]}>
          <Picker
            selectedValue={textoPieza}
            onValueChange={(itemValue) => setTextoPieza(itemValue)}
            dropdownIconColor="#C0D0EF"
            style={{ color: '#C0D0EF', height: 50 }}
          >
            <Picker.Item label="Bujía" value="Bujía" />
            <Picker.Item label="Filtro de Aceite" value="Filtro de Aceite" />
            <Picker.Item label="Batería" value="Batería" />
            <Picker.Item label="Neumáticos" value="Neumáticos" />
            <Picker.Item label="Pastillas de Freno" value="Pastillas de Freno" />
            <Picker.Item label="Motor" value="Motor" />
            <Picker.Item label="Transmisión de caja" value="Transmisión de caja" />
            <Picker.Item label="Radiador" value="Radiador" />
            <Picker.Item label="Filtro de Aire" value="Filtro de Aire" />
            <Picker.Item label="Suspensión" value="Suspensión" />

          </Picker>
        </View>
      </View>

      <View style={estilosGrupales.fila}><Text style={estilosGrupales.etiqueta}>Marca</Text><TextInput style={estilosGrupales.input} value={textoMarca} onChangeText={setTextoMarca} placeholder="Ej: Bosch" placeholderTextColor="#668DC0" /></View>
      <View style={estilosGrupales.fila}><Text style={estilosGrupales.etiqueta}>No. Serie</Text><TextInput style={estilosGrupales.input} value={textoNoSerie} onChangeText={setTextoNoSerie} placeholder="Ej: 12345" placeholderTextColor="#668DC0" /></View>
      <View style={estilosGrupales.fila}><Text style={estilosGrupales.etiqueta}>Precio</Text><TextInput style={estilosGrupales.input} value={textoPrecio} onChangeText={setTextoPrecio} keyboardType="numeric" placeholder="Ej: 25.50" placeholderTextColor="#668DC0" /></View>
      
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Fecha de Cambio</Text>
        <TouchableOpacity style={estilosGrupales.botonFecha} onPress={() => setMostrarCalendario(true)}>
          <Text style={estilosGrupales.textoFecha}>{fechaTexto}</Text>
        </TouchableOpacity>
      </View>

      {mostrarCalendario && <DateTimePicker value={fechaObjeto} mode="date" onChange={alCambiarFecha} />}

      {/* --- AQUÍ ESTÁN LOS BUTTON NATIVOS --- */}
      <View style={estilosGrupales.filaBotones}>
        <View style={{ flex: 0.48 }}>
          <Button title="Guardar" onPress={validarYGuardar} color="#668DC0" />
        </View>
        <View style={{ flex: 0.48 }}>
          <Button title="Cancelar" onPress={alCancelar} color="#304A6E" />
        </View>
      </View>
    </View>
  );
}