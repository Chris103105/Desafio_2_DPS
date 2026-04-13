// Importamos React y useState para darle "memoria" a nuestro componente.
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Button } from 'react-native';

// Importamos las librerías externas que instalamos el calendario y el menú desplegable.
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; 

import { estilosGrupales } from '../estilos';

// Nuestro componente recibe dos "props" funciones que le manda su papá, App.js:
// alGuardar: para enviarle los datos cuando todo esté listo.
// alCancelar: para avisarle que queremos cerrar esta pantalla.
export default function FormularioPieza({ alGuardar, alCancelar }) {
  
  // Estados locales Nuestras variables temporales para los inputs
  
  // Iniciamos el Picker con 'Bujía' para que no empiece vacío.
  const [textoPieza, setTextoPieza] = useState('Bujía'); 
  const [textoMarca, setTextoMarca] = useState('');
  const [textoNoSerie, setTextoNoSerie] = useState('');
  const [textoPrecio, setTextoPrecio] = useState('');
  
  // Para la fecha necesitamos dos cosas: el objeto Date para que la app lo entienda y ordene
  const [fechaObjeto, setFechaObjeto] = useState(new Date()); 
  // ...  amigable para que el usuario lo lea en pantalla.
  const [fechaTexto, setFechaTexto] = useState('Seleccionar fecha'); 
  
  // Interruptor para prender o apagar el calendario
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  // Funciones de validación y lógica
  
  // usamos Expresión Regular o Regex para detectar si hay números en el texto 
  //  si dentro de un texto existe algún dígito (\d). Regresa true si encuentra números.
  const tieneNumeros = (texto) => /\d/.test(texto);

  // Esta función se dispara cuando el usuario elige una fecha en el calendario emergente.
  const alCambiarFecha = (event, fechaSeleccionada) => {
    setMostrarCalendario(false); // Lo primero es esconder el calendario.
    
    // Si el usuario sí eligió una fecha y no canceló, actualizamos nuestros estados.
    if (fechaSeleccionada) {
      setFechaObjeto(fechaSeleccionada);
      setFechaTexto(fechaSeleccionada.toLocaleDateString()); // Lo convierte a un formato tipo "12/04/2026"
    }
  };

  // El  botón guardar  revisamos que todo esté bien.
  const validarYGuardar = () => {
    // Hay algún campo vacío o dejaron la fecha por default?
    if (!textoPieza || !textoMarca || !textoNoSerie || !textoPrecio || fechaTexto === 'Seleccionar fecha') {
      return Alert.alert("Campos vacíos", "Por favor, completa toda la información."); // Cortamos la función aquí.
    }
    
    // Escribieron números en la marca? Ej: "Toyota 123" no sería válido aquí
    if (tieneNumeros(textoMarca)) {
      return Alert.alert("Error", "La marca no puede contener números."); // Cortamos la función aquí.
    }

    // Si pasamos las validaciones, empaquetamos toda la info 
    const nuevaPieza = {
      // Usamos Date.now()  para generar un ID único sin necesidad de base de datos.
      id: Date.now().toString(),
      pieza: textoPieza, 
      marca: textoMarca,
      noSerie: textoNoSerie,
      precio: textoPrecio,
      fechaCambio: fechaTexto, // Mandamos el texto para mostrarlo en la tarjeta
      fechaParaOrdenar: fechaObjeto // Mandamos el objeto para usar el .sort() en App.js
    };
    
    // Le pasamos nuestro objeto terminado a la función que nos dio App.js
    alGuardar(nuevaPieza);
  };

  // El diseño de nuestro formulario

  return (
    <View style={estilosGrupales.contenedor}>
      <Text style={estilosGrupales.tituloSecundario}>Nueva Pieza</Text>
      
      {/* EL PICKER Menú desplegable */}
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Pieza</Text>
        <View style={[estilosGrupales.input, { padding: 0 }]}>
          <Picker
            selectedValue={textoPieza}
            onValueChange={(itemValue) => setTextoPieza(itemValue)} // Actualiza el estado al elegir
            dropdownIconColor="#C0D0EF"
            style={{ color: '#C0D0EF', height: 50 }}
          >
            {/* Opciones disponibles. El label es lo que se lee, el value es lo que se guarda */}
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

      {/* --- input de marca --- */}
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Marca</Text>
        {/* onChangeText actualiza automáticamente el estado con cada letra que tecleas */}
        <TextInput style={estilosGrupales.input} value={textoMarca} onChangeText={setTextoMarca} placeholder="Ej: Bosch" placeholderTextColor="#668DC0" />
      </View>
      
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>No. Serie</Text>
        <TextInput style={estilosGrupales.input} value={textoNoSerie} onChangeText={setTextoNoSerie} placeholder="Ej: 12345" placeholderTextColor="#668DC0" />
      </View>
      
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Precio</Text>
        {/* keyboardType="numeric" es magia: le abre al usuario el teclado de puros números en su celular */}
        <TextInput style={estilosGrupales.input} value={textoPrecio} onChangeText={setTextoPrecio} keyboardType="numeric" placeholder="Ej: 25.50" placeholderTextColor="#668DC0" />
      </View>
      
      {/* --- Calendario --- */}
      <View style={estilosGrupales.fila}>
        <Text style={estilosGrupales.etiqueta}>Fecha de Cambio</Text>
        {/* En lugar de un TextInput donde se puedan equivocar, usamos un botón que prende el calendario nativo */}
        <TouchableOpacity style={estilosGrupales.botonFecha} onPress={() => setMostrarCalendario(true)}>
          <Text style={estilosGrupales.textoFecha}>{fechaTexto}</Text>
        </TouchableOpacity>
      </View>

      {/* El componente del calendario solo existe en la pantalla si mostrarCalendario es 'true' */}
      {mostrarCalendario && <DateTimePicker value={fechaObjeto} mode="date" onChange={alCambiarFecha} />}

      {/* --- botones --- */}
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