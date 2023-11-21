# Operadores Lógicos

Los operadores lógicos se utilizan para realizar operaciones lógicas básicas, como comparación, conjunción, disyunción, etc.

## Operadores de comparación

Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (`True` o `False`). Los operadores de comparación en Python son los siguientes:

| Operador | Descripción     |
| -------- | --------------- |
| ==       | Igual a         |
| !=       | Distinto a      |
| >        | Mayor que       |
| <        | Menor que       |
| >=       | Mayor o igual a |
| <=       | Menor o igual a |

Por ejemplo, la siguiente expresión compara dos números:

```py
a = 1
b = 2

c = a == b
print(c)
```

Esta expresión devolverá el valor False, ya que 1 no es igual a 2, por ello si se ejecuta el código se imprimirá `False`.

## Operadores lógicos

Los operadores lógicos se utilizan para combinar dos o más expresiones lógicas. Los operadores lógicos en Python son los siguientes:

|Operador	| Descripción|
|---|---|
|and	| Conjunción|
|or	| Disyunción|
|not	| Negación|

### Conjunción

La conjunción se utiliza para combinar dos expresiones lógicas y devolver un valor booleano. La conjunción solo devolverá **`True` si ambas expresiones** lógicas son True.

Por ejemplo, la siguiente expresión combina dos expresiones lógicas:

```py
a = 1
b = 2

c = a == 1 and b == 2
```

Esta expresión devolverá el valor `True`, ya que ambas expresiones lógicas son verdaderas.

### Disyunción

La disyunción se utiliza para combinar dos expresiones lógicas y devolver un valor booleano. La disyunción devolverá **`True` si al menos una de las expresiones lógicas es True**.

Por ejemplo, la siguiente expresión combina dos expresiones lógicas:

```py
a = 1
b = 2

c = a == 1 or b == 2
```

Esta expresión devolverá el valor `True`, ya que una de las expresiones lógicas es `True`.

### Negación

La negación se utiliza para invertir el valor de una expresión lógica. La negación devolverá True si la expresión lógica es False y devolverá False si la expresión lógica es True.

Por ejemplo, la siguiente expresión niega una expresión lógica:

```py
a = 1

c = not a == 2
```

Esta expresión devolverá el valor `True`, ya que la expresión lógica es `False`.

Ejemplos de operaciones lógicas

```py
# Conjunción

a = 1
b = 2

c = a == 1 and b == 2
print(c)  # True

d = a == 1 and b < 2
print(d)  # False

# Disyunción

a = 1
b = 2

c = a == 1 or b == 2
print(c)  # True

d = a == 2 or b == 3
print(d)  # False

# Negación

a = 1

c = not a == 2
print(c)  # True

d = not a == 1
print(d)  # False
```
