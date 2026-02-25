# MANUAL DE USUARIO

Esta aplicación web permite generar paletas de colores dinámicas en formato HEX o HSL. Incluye animaciones visuales y un fondo estilo playa con burbujas turquesa animadas. Para ejecutar la aplicación sigue los siguientes pasos:

1)  Seleccionar la cantidad de colores (6, 8 o 9).
* ![imagen de guia para el usuario(1)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/imagen-usuario-1.png)

2)  Elegir el formato de color: HEX o HSL.
* ![imagen de guia para el usuario(2)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/imagen-usuario-2.png)

3)  Hacer clic en el botón 'Generar Paleta'.
* ![imagen de guia para el usuario(3)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/imagen-usuario-3.png)

4)  La paleta aparecerá automáticamente en pantalla.
* ![imagen de guia para el usuario(4)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/imagen-usuario-4.png)

5)  El sistema mostrará un mensaje indicando el formato y cantidad generada.
* ![imagen de guia para el usuario(5)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/imagen-usuario-5.png)

6)  Para generar otra paleta de colores aleatoria, repite los pasos anteriores modificando la cantidad de colores y el formato de colores que desees.


# DESICIONES TECNICAS

1)  Separación de responsabilidades (HTML / CSS / JS)

•  Decisión: Dividir estructura, presentación y lógica en archivos independientes.

![imagen de decision tecnica(1)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-1.png)

•  ¿Por qué es clave?: Reduce acoplamiento, mejora mantenibilidad y permite escalar o migrar a frameworks sin reescribir todo el proyecto.

2)  Generación dinámica del DOM

•  Decisión: Crear los bloques de color con createElement() en tiempo de ejecución en lugar de tenerlos definidos en HTML.

![imagen de decision tecnica(2)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-2.png)

•  ¿Por qué es clave?: Permite que la interfaz se adapte a una cantidad variable de colores.Es la base del comportamiento dinámico de la aplicación.

3)  Limpieza del contenedor

•  Decisión: Reinicialización del estado del contenedor antes del renderizado

![imagen de decision tecnica(3)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-3.png)

•  ¿Por qué es clave?: Evita acumulación de nodos en el DOM, previene fugas visuales y mantiene el render limpio en cada generación.

4)  Soporte dual de formato (HEX / HSL) con funciones separadas

•  Decisión: Implementar funciones independientes (generarHex() y generarHsl()) y usar lógica condicional para elegir cuál ejecutar.

![imagen de decision tecnica(4)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-4.png)

•  ¿Por qué es clave?: Mantiene el código modular, legible y escalable si se agregan nuevos formatos en el futuro.


# PASOS PARA EJECUTAR LA APLICACION

# # Descargar la aplicación del repositorio de GITHUB:

1) Ingresa al repositorio de github mediante este link :
https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua

2)  Dirige el cursor hacia el selector llamado “Code”, haz clic para que te muestre las opciones.
* ![repositorio de github parte 1](images/github-2.png)

3)  Mueve el cursor hacia la opción llamada “Dowload ZIP”, haz clic para descargar.
* ![repositorio de github parte 2](images/github-3.png)

4)  Listo, ya terminamos con la descarga de la aplicación. 

# # Instalación del Visual Studio Code :

1)  Descarga e instala el visual Studio Code . Puedes ingresar a Google y descargarlo o puedes ingresar a este link de la página oficial: https://code.visualstudio.com/

2)  Una vez que hayas descargado el visual Studio Code, ábrelo y sigue los pasos de instalación.

3)  Si todo se instaló correctamente, Ejecuta el programa.

4)  Observa la interfaz del programa y dirígete a la opción de “Extensiones”
* ![Interfas del VSC parte 1](images/vsc-4.png)

5)  Descarga la extensión “Live Server”.
* ![Interfas del VSC parte 2](images/vsc-5.png)

6)  Listo, ya terminamos con la descarga e instalación del Visual Studio Code y su extensión “Live Server”.

# # Ejecución de la aplicación :

1) Busca el archivo ZIP que descargaste del repositorio GITHUB.

2) Haz clic derecho sobre el archivo para “Extraer todo”.
* ![Ejecucion de la parte 2](images/ejecucion-app-2.png)

3) Listo ya tendrás la carpeta con los archivos de la aplicación.
* ![Ejecucion de la parte 3](images/ejecucion-app-3.png)

4) Vuelve a la interfaz del visual Studio Code.
* ![Ejecucion de la parte 4](images/ejecucion-app-4.png)

5) Seleccione la opción de “Open folder”.
* ![Ejecucion de la parte 5](images/ejecucion-app-5.png)

6) Busca la carpeta de la aplicación que extrajiste anteriormente. Y selecciona “Select folder”.
* ![Ejecucion de la parte 6](images/ejecucion-app-6.png)

7) Te aparecerá un aviso para abrir una nueva carpeta por primera vez. Haz clic sobre el botón “Yes, i trust the authors”.
* ![Ejecucion de la parte 7](images/ejecucion-app-7.png)

8) Ahora tienes acceso a todos los archivos de la aplicación.
* ![Ejecucion de la parte 8](images/ejecucion-app-8.png)

9) Lo siguiente es ejecutarlo en un navegador. Y para eso haz click en el símbolo de “Live Server” que tiene forma de antena(que se encuentra en la parte inferior derecha).
* ![Ejecucion de la parte 9-1](images/ejecucion-app-9-1.png)
* ![Ejecucion de la parte 9-2](images/ejecucion-app-9-2.png)

10) Y listo, la aplicación se habrá ejecutado correctamente.
* ![Ejecucion de la parte 10](images/ejecucion-app-10.png)
