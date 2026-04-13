

// Importamos los hooks básicos de React y los componentes nativos que arman la interfaz móvil.
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Nos traemos los componentes "hijos" que fuimos creando para no tener un archivo principal gigante.
// Modularizar así hace que el código sea mucho más fácil de leer.
import FormularioPieza from './componentes/FormularioPieza';
import TarjetaPieza from './componentes/TarjetaPieza';
import ModalDetalle from './componentes/ModalDetalle';

// Importamos el archivo principal de estilos para que toda la app comparta la misma paleta de colores.
import { estilosGrupales } from './estilos';

export default function App() {

  // Estados, memoria  de nuestra app

  // Aquí guardamos todas las piezas en un arreglo. Arranca vacío [].
  const [listaDePiezas, setListaDePiezas] = useState([]);
  
  // Controla nuestra navegación. Si vale 'lista' vemos el Home, si vale 'formulario' vemos la pantalla para agregar.
  const [pantallaActual, setPantallaActual] = useState('lista'); 
  
  // Booleano que avisa si la ventanita emergente está prendida (true) o apagada (false).
  const [modalDetalle, setModalDetalle] = useState(false);
  
  // Guarda temporalmente el objeto de la pieza exacta que el usuario tocó para mandársela al modal.
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null);


  // funciones logicas de nuestra app
  

  // Esta funcion la ejecuta el formulario cuando le dan a Guardar
  const agregarPiezaALaLista = (nuevaPieza) => {
    // Agarramos la lista vieja (...listaDePiezas) y metemos la nueva y aplicamos .sort() usando la fecha para ordenarlas automáticamente de la más nueva a la más vieja.
    const nuevaLista = [...listaDePiezas, nuevaPieza].sort((a, b) => b.fechaParaOrdenar - a.fechaParaOrdenar);
    
    setListaDePiezas(nuevaLista); // Guardamos la lista ya ordenada.
    setPantallaActual('lista'); // Regresamos al usuario a la pantalla principal.
  };

  // Función de borrado directo desde la tarjeta. Recibe el ID de la pieza que queremos eliminar.
  const eliminarPieza = (id) => {
    // Usamos .filter() para actualizar el estado en otras palabras, "Deja en la lista a todas las piezas que no tengan el ID que acabo de tocar". 

    setListaDePiezas(listaDePiezas.filter(p => p.id !== id));
  };


  // Lo que ve el usuario)
  

  // Modo formulario para agregar nueva pieza

  // Si el estado dice que estamos en 'formulario', renderiza solo esa pantalla y "corta" la función aquí con el return.
  if (pantallaActual === 'formulario') {
    return (
      <View style={estilosGrupales.contenedor}>
        <FormularioPieza 
          // Le inyectamos nuestras funciones al componente hijo para que pueda comunicarse con este archivo padre.
          alGuardar={agregarPiezaALaLista} 
          alCancelar={() => setPantallaActual('lista')} // Si se arrepienten, los devolvemos al inicio.
        />
      </View>
    );
  }

  // Lista de piezas pantalla principal
  // Si el if de arriba no se cumplió, entonces por defecto mostramos esta pantalla.
  return (
    <View style={estilosGrupales.contenedor}>
      
      {/* Encabezado flexbox: empuja el título a la izquierda y el boton a la derecha */}
      <View style={estilosGrupales.encabezado}>
        <Text style={estilosGrupales.tituloPrincipal}>Piezas</Text>
        <TouchableOpacity style={estilosGrupales.botonAdd} onPress={() => setPantallaActual('formulario')}>
          <Text style={estilosGrupales.textoBotonAdd}>+ Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* logica de estado vacío "empty State" */}
      {/* Operador ternario: ¿La lista tiene 0 elementos? */}
      {listaDePiezas.length === 0 ? (
        // si es si  Mostramos un diseño  para que la pantalla no se vea  vacía.
        <View style={estilosGrupales.contenedorVacio}>
          <Text style={estilosGrupales.iconoVacio}>⚙️</Text>
          <Text style={estilosGrupales.textoVacio}>No hay piezas registradas.</Text>
          <Text style={estilosGrupales.subtextoVacio}>Toca en "+ Agregar" para empezar.</Text>
        </View>
      ) : (
        // si es No Significa que hay datos, así que renderizamos la FlatList .
        <FlatList
          data={listaDePiezas} // De dónde saca la info
          keyExtractor={item => item.id} // Le dice a React como diferenciar cada tarjeta (usando su ID)
          showsVerticalScrollIndicator={false} // Oculta la barrita gris fea de scroll a la derecha
          renderItem={({ item }) => (
            // Por cada elemento en el arreglo, dibuja una TarjetaPieza
            <TarjetaPieza 
              pieza={item} // Le mandamos los datos de esa pieza
              // Al tocar, guardamos la info de esta tarjeta y prendemos el modal
              alTocar={() => { setPiezaSeleccionada(item); setModalDetalle(true); }}
              // Al darle borrar, le pasamos su ID específico a la función
              alEliminar={() => eliminarPieza(item.id)}
            />
          )}
        />
      )}

      {/* El Modal siempre esta en el código, pero el componente ModalDetalle 
          decide si se muestra o es invisible dependiendo de la variable "modalDetalle" */}
      <ModalDetalle 
        visible={modalDetalle} 
        pieza={piezaSeleccionada} // Le inyectamos los datos de la tarjeta que el usuario toco
        alCerrar={() => setModalDetalle(false)} // Le pasamos la función para que el botón "Cerrar" sirva
      />
    </View>
  );
}