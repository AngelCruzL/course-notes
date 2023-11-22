import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.361cb293.js";const F=JSON.parse('{"title":"Diccionarios y listas","description":"","frontmatter":{},"headers":[],"relativePath":"python/diccionarios-listas.md","filePath":"python/diccionarios-listas.md"}'),p={name:"python/diccionarios-listas.md"},o=l(`<h1 id="diccionarios-y-listas" tabindex="-1">Diccionarios y listas <a class="header-anchor" href="#diccionarios-y-listas" aria-label="Permalink to &quot;Diccionarios y listas&quot;">​</a></h1><h2 id="listas" tabindex="-1">Listas <a class="header-anchor" href="#listas" aria-label="Permalink to &quot;Listas&quot;">​</a></h2><p>Las listas son una estructura de datos que almacena una secuencia de elementos. Los elementos de una lista pueden ser de cualquier tipo, incluyendo números, cadenas, objetos e incluso otras listas.</p><p>Las listas se crean utilizando corchetes <code>[]</code>. Por ejemplo, la siguiente lista almacena tres números:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span></code></pre></div><p>Los elementos de una lista se pueden acceder utilizando índices. <strong>El índice del primer elemento es <code>0</code></strong>, el índice del segundo elemento es 1, y así sucesivamente. Por ejemplo, la siguiente expresión devuelve el segundo elemento de la lista numeros:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">numeros[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]  </span><span style="color:#6A737D;"># 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">numeros[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]  </span><span style="color:#6A737D;"># 2</span></span></code></pre></div><p>Las listas se pueden modificar. Los elementos de una lista se pueden agregar, eliminar o modificar. Por ejemplo, la siguiente expresión agrega un elemento a la lista numeros:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">numeros.append(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">numeros.append(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span></code></pre></div><p>Esta expresión agregará el número 4 a la lista numeros.</p><p>Ejemplos de listas</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Lista de números</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de cadenas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nombres </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;Juan&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Pedro&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;María&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de objetos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">personas </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&quot;nombre&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Juan&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;edad&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">}, {</span><span style="color:#9ECBFF;">&quot;nombre&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Pedro&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;edad&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">}, {</span><span style="color:#9ECBFF;">&quot;nombre&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;María&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;edad&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">}]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de listas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">lista_de_listas </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">], [</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Lista de números</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de cadenas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nombres </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;Juan&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Pedro&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;María&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de objetos</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">personas </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&quot;nombre&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Juan&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;edad&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">}, {</span><span style="color:#032F62;">&quot;nombre&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Pedro&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;edad&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">}, {</span><span style="color:#032F62;">&quot;nombre&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;María&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;edad&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">}]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Lista de listas</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">lista_de_listas </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">], [</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">]]</span></span></code></pre></div><h2 id="funciones-para-modificar-las-listas-de-python" tabindex="-1">Funciones para modificar las listas de python <a class="header-anchor" href="#funciones-para-modificar-las-listas-de-python" aria-label="Permalink to &quot;Funciones para modificar las listas de python&quot;">​</a></h2><p>Existen distintos métodos (funciones) para mutar (modificar) la estructura y/o contenido de una lista.</p><ul><li><code>append()</code>: Agrega un elemento al final de la lista.</li><li><code>insert()</code>: Inserta un elemento en una posición determinada de la lista.</li><li><code>extend()</code>: Agrega los elementos de una lista a otra lista.</li><li><code>remove()</code>: Elimina el primer elemento de la lista que coincida con el valor especificado.</li><li><code>pop()</code>: Elimina el elemento de la lista en la posición especificada.</li><li><code>clear()</code>: Elimina todos los elementos de la lista.</li><li><code>sort()</code>: Ordena la lista en orden ascendente.</li><li><code>reverse()</code>: Invierte el orden de los elementos de la lista.</li></ul><p>Ejemplo:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Agregar un elemento al final de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.append(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Insertar un elemento en una posición determinada de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.insert(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 5, 2, 3]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Agregar los elementos de una lista a otra lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">lista1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">lista2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">lista1.extend(lista2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(lista1)  </span><span style="color:#6A737D;"># [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar el primer elemento de la lista que coincida con el valor especificado</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.remove(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar el elemento de la lista en la posición especificada</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.pop(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar todos los elementos de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.clear()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ordenar la lista en orden ascendente</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.sort()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Invertir el orden de los elementos de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">numeros </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">numeros.reverse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(numeros)  </span><span style="color:#6A737D;"># [4, 3, 2, 1]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Agregar un elemento al final de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.append(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Insertar un elemento en una posición determinada de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.insert(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 5, 2, 3]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Agregar los elementos de una lista a otra lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">lista1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">lista2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">lista1.extend(lista2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(lista1)  </span><span style="color:#6A737D;"># [1, 2, 3, 4, 5, 6]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar el primer elemento de la lista que coincida con el valor especificado</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.remove(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar el elemento de la lista en la posición especificada</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.pop(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Eliminar todos los elementos de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.clear()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ordenar la lista en orden ascendente</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.sort()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [1, 2, 3, 4]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Invertir el orden de los elementos de la lista</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">numeros </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">numeros.reverse()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(numeros)  </span><span style="color:#6A737D;"># [4, 3, 2, 1]</span></span></code></pre></div>`,17),e=[o];function c(t,r,y,E,i,d){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{F as __pageData,C as default};
