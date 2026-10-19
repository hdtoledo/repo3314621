# ⚡ Guía Paso a Paso: Instalación y Configuración de React con Vite

> **Ficha:** 3314621 · ADSO  
> **Instructor:** Ing. Hector David Toledo Garcia  
> **Ambiente:** Sala de Sistemas / Computadores Locales

---

## 📋 1. Prerrequisitos en el Equipo

Abre una terminal (PowerShell, Bash o Git Bash) y verifica que tengas instalado **Node.js (versión 18.x o superior)**:

```bash
node -v
# Debe retornar v18.0.0 o superior (ej: v20.x, v22.x)

npm -v
# Debe retornar v9.x o superior
```

> Si no lo tienes instalado, descárgalo desde [nodejs.org](https://nodejs.org/) (versión LTS).

---

## 🚀 2. Creación del Proyecto con Vite

En tu carpeta de proyectos de la formación, ejecuta:

```bash
# Crear proyecto con la plantilla oficial de React en JavaScript
npm create vite@latest frontend-adso -- --template react
```

*Si te solicita confirmación para instalar el paquete `create-vite`, presiona `y` y luego `Enter`.*

---

## 📦 3. Instalación de Dependencias

Una vez finalizada la descarga de la plantilla:

```bash
# 1. Ingresar al directorio recién creado
cd frontend-adso

# 2. Descargar las dependencias declaradas en el package.json
npm install
```

---

## 🎨 4. Añadir Tailwind CSS a tu Proyecto Vite (Opcional pero Recomendado)

Para que tu proyecto mantenga el estilo visual SENA:

```bash
# Instalar Tailwind CSS y sus procesadores
npm install -D tailwindcss postcss autoprefixer

# Generar archivos de configuración (tailwind.config.js y postcss.config.js)
npx tailwindcss init -p
```

### Configurar `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sena: {
          green: '#39A900',
          navy: '#00324D'
        }
      }
    },
  },
  plugins: [],
}
```

### Agregar directivas en `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 💻 5. Levantar el Servidor de Desarrollo

```bash
npm run dev
```

La consola te arrojará una dirección local similar a:
```text
  VITE v5.x.x  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Abre esa URL en tu navegador y verás tu primera aplicación React 19 corriendo a máxima velocidad.

---

## 📁 6. Estructura Recomendada para ADSO

```text
frontend-adso/
├── index.html                  # Punto de entrada HTML
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── src/
    ├── main.jsx                # Renderiza <App /> en el DOM raíz
    ├── App.jsx                 # Componente principal contenedor
    ├── index.css               # Estilos globales y Tailwind
    ├── components/             # Componentes reutilizables (Botones, Tarjetas, Modales)
    ├── hooks/                  # Custom Hooks (Lógica extraída)
    └── services/               # Llamadas asíncronas con Fetch API
```
