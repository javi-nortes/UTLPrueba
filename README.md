# Mapa Personal de la Menopausia

Herramienta educativa del programa Transforma tu Menopausia. No es diagnóstica.

## Desarrollo y publicación

Sin dependencias externas. Ejecuta `npm run build` para generar `dist/`.
Para probar localmente: `python3 -m http.server 8000 --directory dist`.
Vercel utiliza `vercel.json` para publicar ese directorio.

`index.html` contiene las siete valoraciones. Al completar todas se navega en
la misma pestaña a `resultados.html`, con mapa, orientación, prioridades y
reflexión. Las respuestas se guardan en sessionStorage de esa pestaña, no en
el servidor. «Empezar de nuevo» las borra. Volver al cuestionario permite
editarlas y confirmar con «Ver mis resultados».

## Añadir audios del programa

1. Crea la carpeta `audio/` y añade tus archivos (por ejemplo `audio/calma.mp3`).
2. Añade entradas en `audios.js`:

```js
window.MENOPAUSIA_AUDIOS = [
  {
    title: 'Una pausa de calma',
    src: 'audio/calma.mp3',
    transcript: 'Incluye aquí la transcripción del audio.'
  }
];
```

3. Ejecuta `npm run build` y publica los cambios.

No hay audios del programa incluidos todavía. Los reproductores usan controles
nativos, no se inician automáticamente y admiten archivos del mismo sitio.
También se puede seleccionar un audio local en resultados: se reproduce sin
subirlo y no se conserva al cambiar de página.

## Editar orientaciones

Las frases por área y nivel están en `prompts` dentro de `app.js`: bienestar
bajo (1–2), intermedio (3) y alto (4–5). La orientación general señala todas
las áreas empatadas en el menor bienestar, sin puntuación global ni diagnóstico.
Las pautas detalladas del programa pueden añadirse más adelante en esa sección.
