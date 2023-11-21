# Diccionarios y listas

## Listas

Las listas son una estructura de datos que almacena una secuencia de elementos. Los elementos de una lista pueden ser de cualquier tipo, incluyendo números, cadenas, objetos e incluso otras listas.

Las listas se crean utilizando corchetes `[]`. Por ejemplo, la siguiente lista almacena tres números:

```py
numeros = [1, 2, 3]
```

Los elementos de una lista se pueden acceder utilizando índices. **El índice del primer elemento es `0`**, el índice del segundo elemento es 1, y así sucesivamente. Por ejemplo, la siguiente expresión devuelve el segundo elemento de la lista numeros:

```py
numeros[1]  # 2
```

Las listas se pueden modificar. Los elementos de una lista se pueden agregar, eliminar o modificar. Por ejemplo, la siguiente expresión agrega un elemento a la lista numeros:

```py
numeros.append(4)
print(numeros)  # [1, 2, 3, 4]
```

Esta expresión agregará el número 4 a la lista numeros.

Ejemplos de listas

```py
# Lista de números

numeros = [1, 2, 3]

# Lista de cadenas

nombres = ["Juan", "Pedro", "María"]

# Lista de objetos

personas = [{"nombre": "Juan", "edad": 20}, {"nombre": "Pedro", "edad": 25}, {"nombre": "María", "edad": 30}]

# Lista de listas

lista_de_listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

## Funciones para modificar las listas de python

Existen distintos métodos (funciones) para mutar (modificar) la estructura y/o contenido de una lista.

- `append()`: Agrega un elemento al final de la lista.
- `insert()`: Inserta un elemento en una posición determinada de la lista.
- `extend()`: Agrega los elementos de una lista a otra lista.
- `remove()`: Elimina el primer elemento de la lista que coincida con el valor especificado.
- `pop()`: Elimina el elemento de la lista en la posición especificada.
- `clear()`: Elimina todos los elementos de la lista.
- `sort()`: Ordena la lista en orden ascendente.
- `reverse()`: Invierte el orden de los elementos de la lista.

Ejemplo:

```py
# Agregar un elemento al final de la lista

numeros = [1, 2, 3]
numeros.append(4)

print(numeros)  # [1, 2, 3, 4]

# Insertar un elemento en una posición determinada de la lista

numeros = [1, 2, 3]
numeros.insert(1, 5)

print(numeros)  # [1, 5, 2, 3]

# Agregar los elementos de una lista a otra lista

lista1 = [1, 2, 3]
lista2 = [4, 5, 6]

lista1.extend(lista2)

print(lista1)  # [1, 2, 3, 4, 5, 6]

# Eliminar el primer elemento de la lista que coincida con el valor especificado

numeros = [1, 2, 3, 4]
numeros.remove(2)

print(numeros)  # [1, 3, 4]

# Eliminar el elemento de la lista en la posición especificada

numeros = [1, 2, 3, 4]
numeros.pop(2)

print(numeros)  # [1, 2, 4]

# Eliminar todos los elementos de la lista

numeros = [1, 2, 3, 4]
numeros.clear()

print(numeros)  # []

# Ordenar la lista en orden ascendente

numeros = [4, 2, 1, 3]
numeros.sort()

print(numeros)  # [1, 2, 3, 4]

# Invertir el orden de los elementos de la lista

numeros = [1, 2, 3, 4]
numeros.reverse()

print(numeros)  # [4, 3, 2, 1]
```
