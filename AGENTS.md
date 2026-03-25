# AGENTS.md - Todo o Nada

## Descripción del Proyecto
**Todo o Nada** es un juego de dados interactivo para dos jugadores desarrollado con JavaScript vanilla. Objetivo: alcanzar 30 puntos antes que el contrincante.

## Estructura Clave

### Archivos Principales
- **index.html** — Estructura: 2 secciones de jugadores (scores, puntos actuales), botones de control, popup de reglas
- **script.js** — Toda la lógica del juego (tiradas, cambios de turno, validación de ganador)
- **style.css** — Estilos y animaciones
- **images/** — Sprites de dados (dice.png)

## Mecánica del Juego

### Flujo por Turno
1. Jugador tira los dados (`btnRoll`)
2. **Si sale 1:** Pierde puntos actuales, pasa turno al otro jugador
3. **Si sale otro número:** Suma puntos a "Actual" o presiona "Hold" para guardarlos
4. Primero en alcanzar 30 gana

### Variables de Estado (script.js)
```javascript
scores = [0, 0]              // Puntos guardados por jugador
currentScore = 0             // Puntos del turno actual
activePlayer = 0             // Jugador en turno (0 o 1)
playing = true               // Estado del juego
```

## Elementos HTML Principales
```
.player--0, .player--1       // Secciones de jugadores
#score--0, #score--1         // Puntos totales
#current--0, #current--1     // Puntos actuales
.dice                        // Imagen del dado
.btn--roll, .btn--hold, .btn--new  // Botones principales
.btn--changeName             // Cambiar nombres de jugadores
```

## Guía para Agentes

### Tareas Comunes
- **Cambiar puntos objetivo:** Busca `scores[activePlayer] >= 30` en script.js
- **Modificar lógica de dados:** Función `rollDice()` genera número aleatorio
- **Agregar sonidos:** Usa eventos en botones (rollDice, switchPlayer)
- **Cambiar temas:** Edita variables CSS en style.css

### Consideraciones
- No hay base de datos (estado solo en memoria)
- Nombres de jugadores se guardan en localStorage
- Interfaz responsiva con CSS Grid/Flexbox
- Sin dependencias externas (vanilla JS/HTML/CSS)

## Comandos Útiles
```bash
npm start  # Inicia servidor local (si está configurado)
```
