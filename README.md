# Proyecto: Amigo Secreto

El principal objetivo de este proyecto es fortalecer las habilidades en lógica de programación al desarrollar la funcionalidad de un sencillo juego de "Amigo Secreto".

## Descripción

Este proyecto permite gestionar una lista de amigos ingresados por el usuario, visualizar la lista, y realizar un sorteo para seleccionar aleatoriamente a un amigo secreto. Se implementa utilizando **JavaScript**, y tiene como finalidad reforzar conceptos fundamentales de la programación.

## Funcionalidades

1. **Agregar amigos**: El usuario puede ingresar nombres de amigos para agregarlos a una lista.
2. **Visualizar lista de amigos**: Muestra en pantalla la lista actual de amigos ingresados.
3. **Sortear un amigo**: Selecciona al azar a un amigo de la lista como el "amigo secreto" y muestra el resultado.
4. **Validaciones**:
   - Impide agregar nombres vacíos o valores numéricos como amigos.
   - Solicita que se ingrese al menos un amigo antes de realizar el sorteo.

## Código Principal

El proyecto incluye las siguientes funciones principales:

- **`asignaTextoElemento(elemento, texto)`**: Modifica el contenido de un elemento HTML.
- **`agregarAmigo()`**: Permite al usuario agregar un nombre a la lista de amigos, realiza validaciones y actualiza la lista visualmente.
- **`mostrarListaAmigos()`**: Recorre la lista de amigos y la renderiza en el DOM.
- **`sortearAmigo()`**: Selecciona un amigo aleatorio de la lista y muestra el resultado.

## Requisitos Previos

- Navegador web con soporte para JavaScript.
- Editor de texto para modificar y probar el código (por ejemplo, Visual Studio Code).

## Estructura del Proyecto

El código JavaScript utiliza el DOM para interactuar con elementos HTML. La interfaz incluye:
- Un campo de entrada para agregar el nombre del amigo.
- Un botón para añadir amigos.
- Un botón para realizar el sorteo.
- Un área de resultados para visualizar el amigo sorteado.

## Cómo Usar

1. Ingrese el nombre de un amigo en el campo de texto.
2. Haga clic en el botón "Agregar Amigo" para añadirlo a la lista.
3. Repita los pasos para agregar más amigos.
4. Una vez lista la lista de amigos, haga clic en "Sortear Amigo" para descubrir quién es el amigo secreto.


