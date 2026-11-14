# Tablero de Lotería

Tablero de lotería (bingo) de una sola página para llevar el control de las bolillas sorteadas, del 01 al 90.

## Uso

1. Abrir `index.html` en un navegador. No requiere servidor ni instalación.
2. Pulsar un número para marcarlo como sorteado (fondo amarillo). Pulsarlo de nuevo lo desmarca.
3. El estado se guarda en el navegador (`localStorage`) y se conserva al recargar la página.
4. El botón de recarga (icono circular) desmarca todas las bolillas, previa confirmación.

## Estructura

- `index.html`: página principal.
- `js/loteria.js`: genera el tablero, alterna las marcas y guarda el estado.
- `css/loteria.css`: estilos propios.
- `css/bootstrap.min.css` y `js/jquery-3.7.1.min.js`: bibliotecas de terceros (Bootstrap 5.3.3 y jQuery 3.7.1).

## Notas

- El estado es por navegador y por equipo. No se comparte entre dispositivos.
- Si el navegador bloquea `localStorage` (por ejemplo, en modo privado), el tablero funciona pero no conserva las marcas.
