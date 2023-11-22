# Variables y tipos de datos

## ¿Qué son las variables?

Una variable es una unidad de datos que puede cambiar de valor y que se almacena en la memoria
de la computadora. Una variable tiene un nombre simbólico (identificador) y un tipo de dato asociado.

## ¿Para qué sirven las variables?

Las variables sirven para almacenar datos en la memoria de la computadora, los cuales se pueden utilizar en el programa
para realizar diferentes operaciones.

Tipos de variables: Los tipos de variables definen el rango de valores que puede tener una variable y las operaciones
que se pueden realizar con ella. Algunos tipos de variables comunes son: entero, punto flotante, carácter, cadena,
booleano, etc.
Declaración y asignación de variables: Para usar una variable en un programa, se debe declarar primero, indicando su
nombre y su tipo. Luego, se puede asignar un valor inicial a la variable o modificar su valor durante la ejecución del
programa. Algunos lenguajes requieren declarar las variables antes de usarlas, mientras que otros permiten definir el
valor sin declararlas.
Alcance de las variables: El alcance de una variable determina dónde se puede acceder a ella y modificarla. Hay
variables globales, que se pueden usar en todo el programa, y variables locales, que solo se pueden usar en una función
o procedimiento específico. El alcance es jerárquico y solo se aplica de forma descendente.

## Tipos de datos

Los tipos de datos son los valores que se pueden almacenar en una variable, estos pueden ser de diferentes tipos, los
cuales se pueden clasificar en:

- Números enteros: Son los números que no tienen decimales, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
- Números decimales: Son los números que tienen decimales, por ejemplo: 1.5, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9, 9.0.
- Cadenas de texto: Son los textos que se pueden almacenar en una variable, por ejemplo: "Hola mundo", "Hola", "Mundo".
- Booleanos: Son los valores que pueden ser verdadero o falso, por ejemplo: True, False.
- Listas: Son colecciones de datos que se pueden almacenar en una variable, por
  ejemplo: [1, 2, 3, 4, 5], ["Hola", "Mundo"].
- Diccionarios: Son colecciones de datos que se pueden almacenar en una variable, por ejemplo: {"nombre": "Juan", "
  edad": 20}.
- Tuplas: Son colecciones de datos que se pueden almacenar en una variable, por ejemplo: (1, 2, 3, 4, 5), ("Hola", "
  Mundo").
- Conjuntos: Son colecciones de datos que se pueden almacenar en una variable, por ejemplo: {1, 2, 3, 4, 5}, {"Hola", "
  Mundo"}.
- Números complejos: Son los números que tienen una parte real y una parte imaginaria, por ejemplo: 1 + 2j, 2 + 3j, 3 +
  4j.
- Números binarios: Son los números que están representados en base 2, por ejemplo: 0b1, 0b10, 0b11, 0b100, 0b101,
  0b110, 0b111, 0b1000, 0b1001, 0b1010.
- Números octales: Son los números que están representados en base 8, por ejemplo: 0o1, 0o2, 0o3, 0o4, 0o5, 0o6, 0o7,
  0o10, 0o11, 0o12.
- Números hexadecimales: Son los números que están representados en base 16, por ejemplo: 0x1, 0x2, 0x3, 0x4, 0x5, 0x6,
  0x7, 0x8, 0x9, 0xA, 0xB, 0xC, 0xD, 0xE, 0xF, 0x10, 0x11, 0x12.

## Declaración de variables

Para declarar una variable en Python, se debe escribir el nombre de la variable, luego el signo igual (`=`) y luego el
valor que se le quiere asignar a la variable, por ejemplo:

```py
numero = 1
decimal = 1.5
texto = "Hola mundo"
booleano = True
```

## Tipos de datos en Python

En Python, los tipos de datos se pueden clasificar en:

- Números enteros: `int`
- Números decimales: `float`
- Cadenas de texto: `str`
- Booleanos: `bool`

## Funciones para conocer el tipo de dato de una variable

Para conocer el tipo de dato de una variable, se puede utilizar la función `type`, la cual recibe como parámetro la
variable de la cual se quiere conocer el tipo de dato, por ejemplo:

```py
numero = 1
decimal = 1.5
texto = "Hola mundo"
booleano = True
    
print(type(numero)) # int
print(type(decimal)) # float
print(type(texto)) # str
print(type(booleano)) # bool
```