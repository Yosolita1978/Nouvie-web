# Nouvie Web - Catálogo de Productos

Sitio web público para el catálogo de productos ecológicos de limpieza Nouvie.

## Live Demo

**[https://nouvie-web.vercel.app/](https://nouvie-web.vercel.app/)**

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** PostgreSQL via Prisma (Supabase)
- **Deployment:** Vercel

## Features

- **Catálogo de Productos** - 3 categorías con diseño único por línea:
  - Línea Hogar (rosa) - Productos de limpieza para el hogar
  - Línea Capilar (ámbar) - Tratamientos capilares naturales
  - Línea Institucional (azul) - Soluciones profesionales

- **Diseño Responsivo** - Mobile-first, optimizado para 375px+
- **Precios desde Base de Datos** - Sincronización con Supabase
- **Integración WhatsApp** - Pedidos directos por WhatsApp
- **SEO Optimizado** - Metadata por producto

## Estructura del Proyecto

```
nouvie-web/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home
│   ├── productos/         # Catálogo de productos
│   ├── productos/[slug]/  # Detalle de producto
│   ├── filosofia/         # Filosofía de la empresa
│   ├── nosotros/          # Sobre nosotros
│   ├── testimonios/       # Testimonios
│   └── contacto/          # Contacto
├── components/            # Componentes reutilizables
│   └── ui/               # Componentes de UI
├── lib/                   # Utilidades y data
│   ├── prisma.ts         # Cliente Prisma
│   ├── products.ts       # Fetching de productos
│   └── product-data.ts   # Datos hardcoded de productos
├── prisma/               # Schema de base de datos
└── public/               # Assets estáticos
    └── images/           # Imágenes de productos
```

## Getting Started

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nouvieplatform/nouvie-web.git
cd nouvie-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales
```

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Base de datos (Supabase)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Configuración pública
NEXT_PUBLIC_APP_NAME="Nouvie"
NEXT_PUBLIC_CURRENCY="COP"
```

### Desarrollo

```bash
# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000)

## Arquitectura de Datos

| Fuente | Datos |
|--------|-------|
| `lib/product-data.ts` | Descripciones, imágenes, beneficios, pasos |
| Base de datos (Prisma) | Precios, stock, estado activo |

Los productos se definen en el archivo hardcoded y los precios se obtienen de la base de datos. Si la DB no está disponible, se muestra "Consultar precio".

## Deployment

El proyecto está desplegado en Vercel con deploys automáticos desde la rama `main`.

### Deploy Manual

1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Agregar variables de entorno
3. Deploy automático

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con carousel y categorías |
| `/productos` | Catálogo con filtros por categoría |
| `/productos/[slug]` | Detalle de producto |
| `/filosofia` | Filosofía eco-friendly |
| `/nosotros` | Sobre Nouvie |
| `/testimonios` | Testimonios de clientes |
| `/contacto` | Información de contacto |

## Relacionado

- **nouvie-sales** - Sistema de administración y ventas (privado)

## Licencia

Privado - Nouvie © 2025
