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
| ---- | ----- | ----- | -----| -----| 
| F001 | Hacer login con campos vacios | Funcional | Negativo|
| F001 | Hacer login con un campo lleno | Funcional | Negativo| 
| F001 | Hacer login con campos erróneos | Funcional | Negativo| 
| F001 | Hacer login correctamente | Funcional | Positivo| 
| F002 | Filtrar post por all posts draft post | Funcional | Positivo| 
| F002 | Filtrar post por all authors ghost | Funcional | Positivo| 
| F002 | Filtrar post por oldest | Funcional | Negativo| 
| F002 | Filtrar post por published post | Funcional | Positivo| 
| F002 | Filtrar pages por all posts draft post | Funcional | Positivo| 
| F002 | Filtrar pages por all authors ghost | Funcional | Positivo| 
| F002 | Filtrar pages por oldest | Funcional | Negativo| 
| F002 | Filtrar pages por published post | Funcional | Positivo| 


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


