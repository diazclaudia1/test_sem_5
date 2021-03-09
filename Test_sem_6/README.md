# Funcionalidades bajo pruebas semana 6

| Id   | Nombre | Resumen| 
| ---- | ----- | ----- |
| F001 | Login | Permite iniciar sesión correctamente con validaciones respectivas. |
| F002 | Filtrar post | Permite filtrar post por diferentes parámetros. |
| F003	| Filtrar Pages	| Permite ver mi información como usuario y modificarlo. |
| F004	| Filtrar Tags | 	Permite la creacion de un tag, ver tags internos publicos y eliminar un tag.|
| F005	| Navegar menú del perfil	| Permite navegar por las opciones del perfil |


# Escenarios por funcionalidad bajo pruebas

| Id Funcionalidad | Escenario| Requerimiento |Tipo |
| ---- | ----- | ----- | -----|
| F001 | Hacer login con campos vacios | Funcional | Negativo|
| F001 | Hacer login con un campo lleno | Funcional | Negativo| 
| F001 | Hacer login con campos erróneos | Funcional | Negativo| 
| F001 | Hacer login correctamente | Funcional | Positivo| 
| F002 | Filtrar post por all posts draft post | Funcional | Positivo| 
| F002 | Filtrar post por all authors ghost | Funcional | Positivo| 
| F002 | Filtrar post por oldest | Funcional | Positivo| 
| F002 | Filtrar post por published post | Funcional | Positivo| 
| F003 | Filtrar pages por all posts draft post | Funcional | Positivo| 
| F003 | Filtrar pages por all authors ghost | Funcional | Positivo| 
| F003 | Filtrar pages por oldest | Funcional | Positivo| 
| F003 | Filtrar pages por published post | Funcional | Positivo| 


# Guía de despliegue Cypress

1. Para desplegar se debe ejecutar el desde la carpeta raíz del proyecto el comando `./node_modules/.bin/cypress open`, por ejemplo:

CypressProject -> Desde acá
    * cypress
    * cypress.json
    * node_modules
    * package-lock.json

[Directorio](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EbzVylDgb0dCk2dbdLfLY4cBJG4TEcPzaJhtIAzTcavw4w?e=vtX4nP)

2. Al abrir Cypress se debe hacer clic en el archivo monkey_testing.spec.js y monkey_testing_ghost3.spec.js que se encuentra fuera de la carpeta examples:

[Ejecutar](https://uniandes-my.sharepoint.com/:i:/g/personal/cx_diaz_uniandes_edu_co/EXaM-GJDBTxFnG_Yc9-vkzsBUPryUShLP54gTtH2t9BqrQ?e=XMH8KE)

# Informe de pruebas Cypress

* Ghost 3: ![Último ghost](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/last.png)
* Ultimo Ghost: ![Ghost versión 3](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/old.png)


# Guía de despliegue Backstop

* Instalar backstop según los pasos [Guia](https://misovirtual.virtual.uniandes.edu.co/codelabs/visual-regression-testing-backstop/index.html#0)
* Desde la carpeta raíz ejecutar `backstop init`
* En el archivo backstop.json del directorio raíz se debe generar las referencias con las imágenes de la carpeta de screenshots [screenshots base](https://github.com/diazclaudia1/test_sem_5/tree/master/Test_sem_6/CypressProject/cypress/screenshots/monkey_testing.spec.js/monkey_testing.spec.js)
* Desde la carpeta raíz ejecutar `backstop reference`
* Agregar las url de las imágenes a comparar en el archivo backstop.json [screenshots comparar](https://github.com/diazclaudia1/test_sem_5/tree/master/Test_sem_6/CypressProject/cypress/screenshots/monkey_testing.spec.js/monkey_testing_ghost3.spec.js)
* Desde la carpeta raíz ejecutar `backstop test`

# Informe de regresión visual BackStop

* [Informe html](https://github.com/diazclaudia1/test_sem_5/blob/master/Test_sem_6/Backstop/backstop_data/html_report/index.html)
* ![Informe](https://raw.githubusercontent.com/diazclaudia1/test_sem_5/master/Test_sem_6/img/_C__Users_Claudia_Desktop_Backstop_backstop_data_html_report_index.html.png)


# Pros de las herramientas

## Cypress 

### Contras

* Es muy manual la forma como se debe ir y ver los nombres y clases de los elementos para que sean accedidos
* Doble trabajo ya que hay probar dos versiones de la misma aplicación y cada una tiene diferentes elementos

### Pros

* Es interesante el tomar los screenshots para analizar las pantallas y que sean usadas para una regresión visual


## Backstop

### Contras

* Es muy milimétrico y si las pantallas son iguales pero hay una diferencia en la posición de un elemento ya lo toma como falla 

### Pros

* Es muy rápido hacer las comparaciones para dos versiones de la misma herramienta y así enfocarse en las funcionalidades que cambiaron


