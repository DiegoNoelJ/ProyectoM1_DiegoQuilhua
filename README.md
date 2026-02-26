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

---

# DECISIONES TECNICAS

1)  **Separación de responsabilidades (HTML / CSS / JS)**

•  Decisión: Dividir estructura, presentación y lógica en archivos independientes.

![imagen de decision tecnica(1)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-1.png)

•  ¿Por qué es clave?: Reduce acoplamiento, mejora mantenibilidad y permite escalar o migrar a frameworks sin reescribir todo el proyecto.

2)  **Generación dinámica del DOM**

•  Decisión: Crear los bloques de color con createElement() en tiempo de ejecución en lugar de tenerlos definidos en HTML.

![imagen de decision tecnica(2)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-2.png)

•  ¿Por qué es clave?: Permite que la interfaz se adapte a una cantidad variable de colores.Es la base del comportamiento dinámico de la aplicación.

3)  **Limpieza del contenedor**

•  Decisión: Reinicialización del estado del contenedor antes del renderizado

![imagen de decision tecnica(3)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-3.png)

•  ¿Por qué es clave?: Evita acumulación de nodos en el DOM, previene fugas visuales y mantiene el render limpio en cada generación.

4)  **Soporte dual de formato (HEX / HSL) con funciones separadas**

•  Decisión: Implementar funciones independientes (generarHex() y generarHsl()) y usar lógica condicional para elegir cuál ejecutar.

![imagen de decision tecnica(4)](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/decisiones-tecnicas-4.png)

•  ¿Por qué es clave?: Mantiene el código modular, legible y escalable si se agregan nuevos formatos en el futuro.

---

# PASOS PARA EJECUTAR LA APLICACION

## Descargar la aplicación del repositorio de GITHUB:

1) Ingresa al repositorio de github mediante este link :
https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua

2)  Dirige el cursor hacia el selector llamado “Code”, haz clic para que te muestre las opciones.
* ![repositorio de github parte 1](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/github-2.png)

3)  Mueve el cursor hacia la opción llamada “Dowload ZIP”, haz clic para descargar.
* ![repositorio de github parte 2](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/github-3.png)

4)  Listo, ya terminamos con la descarga de la aplicación. 

## Instalación del Visual Studio Code :

1)  Descarga e instala el visual Studio Code . Puedes ingresar a Google y descargarlo o puedes ingresar a este link de la página oficial: https://code.visualstudio.com/

2)  Una vez que hayas descargado el visual Studio Code, ábrelo y sigue los pasos de instalación.

3)  Si todo se instaló correctamente, Ejecuta el programa.

4)  Observa la interfaz del programa y dirígete a la opción de “Extensiones”
* ![Interfas del VSC parte 1](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/vsc-4.png)

5)  Descarga la extensión “Live Server”.
* ![Interfas del VSC parte 2](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/vsc-5.png)

6)  Listo, ya terminamos con la descarga e instalación del Visual Studio Code y su extensión “Live Server”.

## Ejecución de la aplicación :

1) Busca el archivo ZIP que descargaste del repositorio GITHUB.

2) Haz clic derecho sobre el archivo para “Extraer todo”.
* ![Ejecucion de la parte 2](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-2.png)

3) Listo ya tendrás la carpeta con los archivos de la aplicación.
* ![Ejecucion de la parte 3](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-3.png)

4) Vuelve a la interfaz del visual Studio Code.
* ![Ejecucion de la parte 4](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-4.png)

5) Seleccione la opción de “Open folder”.
* ![Ejecucion de la parte 5](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-5.png)

6) Busca la carpeta de la aplicación que extrajiste anteriormente. Y selecciona “Select folder”.
* ![Ejecucion de la parte 6](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-6.png)

7) Te aparecerá un aviso para abrir una nueva carpeta por primera vez. Haz clic sobre el botón “Yes, i trust the authors”.
* ![Ejecucion de la parte 7](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-7.png)

8) Ahora tienes acceso a todos los archivos de la aplicación.
* ![Ejecucion de la parte 8](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-8.png)

9) Lo siguiente es ejecutarlo en un navegador. Y para eso haz click en el símbolo de “Live Server” que tiene forma de antena(que se encuentra en la parte inferior derecha).
* ![Ejecucion de la parte 9-1](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-9-1.png)
* ![Ejecucion de la parte 9-2](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-9-2.png)

10) Y listo, la aplicación se ejecutara correctamente.
* ![Ejecucion de la parte 10](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/ejecucion-app-10.png)

---

# PASOS PARA DESPLEGAR LA APLICACION

## Crearse una cuenta y repositorio en Github:
1) ve al sitio web de github: https://github.com/

2) seleccione la opción "Sing up".
* ![Cuenta github](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/crear-cuenta-github-2.png) 

3) Escoge el metodo que quieras para crear tu cuenta.
* ![Cuenta github](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/crear-cuenta-github-3.png) 

4) Una vez creada , crea un "nuevo repositorio".
* ![Cuenta github](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/crear-cuenta-github-4.png) 

5) Colocale un nombre a tu repositorio , activa el README y asegurate de que sea publico.
* ![Cuenta github](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/crear-cuenta-github-5.png) 

6) Asegurate de que siempre este en la rama "main" .(para evitar evitar problemas de sincronizacion con GIT)
* ![Cuenta github](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/crear-cuenta-github-6.png) 

7) Listo por ahora.

## Instalación del software de Git:

1) Ingresa a la pagina de GIT: https://git-scm.com/

2) Descarga y instala GIT siguiendo los pasos que del instalador.
 !!ATENCION!! , cuando llegues a la opcion de "Choosing the defauld editor used by GIT" .

* ![Atencion en la instalacion de GIT](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/instal-soft-git.png)

Es importante que en el selector elijas la opcion de "Use Visual Studio Code as Git`s default editor". Aclarado eso , podes seguir con la instalacion.

4) Listo , por ahora.

## Preparar la terminal de Visual Studio Code para ejecutar comandos:

1) Abre tu aplicación en Visual Studio Code.

2) Selecciona la "Terminal" donde podras escribir tus comandos de GIT.
* ![Preparando la terminal](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/terminal-vsc-2.png)

3) Configura la "Terminal" en "Git Bash".
* ![Preparando la terminal](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/terminal-vsc-3.png)

## Subir mi aplicacion a mi repositorio de Github:
Ingrésa los comandos:
1) conecta Git a tu cuenta de Github:
* git config --global user.name "Nombre_de_usuario"
* git config --global user.email "TU_EMAIL_DE_GITHUB@gmail.com"
(con este paso completado tu cuenta estarás asociada)

2) hacer que todos los repositorios locales empiecen en la rama main:
* git config --global init.defaultBranch main

3) Crea un repositorio local:
* git init

4) Conecta con tu repositorio remoto:
* git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
(este link se encuentra en tu repositorio en el selector de "code")

5) verifica que esté conectado correctamente:
* git remote -v

6) Mira los archivos de la aplicación:
* git status

7) selecciona todos los archivos de tu aplicación:
* git add .

8) crea un cómmit:
* git commit -m "(crea un cómmit muy claro)"

9) Pushea tus archivos:
* git push -u origin main (esto se hace una sola vez)
* git push (esto puedes hacerlo todas las veces que quieras)

10) Listo , ahora todos tus archivos se encuentran en todo repositorio remoto de Github.

## Desplegar la aplicación en github Page
Ahora y por fin vamos a desplegar la aplicación de nuestras repositorio remoto en Github Page , para eso tenemos que seguir siguientes pasos:
1) Ve a tu repositorio en github.

2) En la barra horizontal superior selecciona la opción de "Settings" .
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-2.png)

3) En el menú vertical izquierdo selecciona la opción de "Pages" .
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-3.png)

4) El texto de "Build and deployment - source" , el selector tiene que estar en "Deploy from a branch" .
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-4.png)

5) Y en "Branch" , el selector de la rama tiene que estar en "main" , y el selector de folder tienen que estar en "root".
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-5-1.png)
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-5-2.png)

6) Guardamos los cambios de Branch haciendo clic en "Save" .
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-6.png)

7) Una vez hecho todo esto si es que lo leamos hacia arriba nos aparecerá una URL que nos permitirá desplegar nuestra aplicación en internet , y esta misma podemos compartirlo con cualquier persona.
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-7-1.png)
* ![Despliegue de la app](https://github.com/DiegoNoelJ/ProyectoM1_DiegoQuilhua/blob/main/Images/desplegar-app-github-page-7-2.png)
