**PLAN DE IMPLEMENTACIÓN**

Sitio Web Nouvie.co

**Cliente:** Nouvie (Ana, Claudia y Mariana)

**Fecha:** Enero 2025

**Desarrollo:** Cristina \- yosola.co

**Duración estimada:** 4 semanas (Fase 1\)

# **Resumen Ejecutivo**

Este plan detalla el desarrollo del nuevo sitio web público para Nouvie.co, reemplazando el sitio actual en Canva. El proyecto se divide en dos fases: Fase 1 (sitio público) y Fase 2 (CMS administrativo).

# **Cronograma de Entregas**

## **Primera Demo \- Viernes 17 de Enero**

El cliente verá:

* Home page con branding real, hero, tarjetas de categorías  
* Header/Footer con navegación funcional  
* Diseño responsive para móvil  
* 1-2 páginas de contenido (Nosotros, Contacto)  
* URL de preview en Vercel

## **Segunda Demo \- Viernes 24 de Enero**

El cliente verá:

* Catálogo de productos completo con filtros  
* Páginas de detalle para Línea Hogar (6 productos)  
* Botones de WhatsApp funcionales  
* Sección de promociones

## **Lanzamiento \- Viernes 31 de Enero**

Todas las páginas completas, SEO configurado, dominio nouvie.co conectado.

# **Fase 1: Sitio Web Público**

## **Semana 1: Fundamentos**

| Tarea | Detalles |
| :---- | :---- |
| Setup del proyecto | Next.js 14 (App Router), TypeScript, Tailwind |
| Conexión a base de datos | Acceso solo lectura a PostgreSQL via Prisma |
| Componentes de layout | Header, Footer, navegación móvil |
| Paleta de colores | Extraer del PDF de Canva, configurar tema Tailwind |
| Deploy inicial | Despliegue en Vercel con URL temporal |

## **Semana 2: Páginas de Contenido \+ Home**

| Tarea | Detalles |
| :---- | :---- |
| Home page | Hero con logo/tagline, tarjetas de categorías (Hogar, Capilar, Institucional), preview de filosofía, CTA WhatsApp |
| /nosotros | Contenido "Somos Nouvie" del PDF |
| /filosofia | Programa de reciclaje ("Recicla, Reusa, Repite") |
| /testimonios | Testimonio de Maria Elena (estático por ahora) |
| /contacto | Botón WhatsApp, enlaces a redes sociales |

## **Semana 3: Catálogo de Productos**

| Tarea | Detalles |
| :---- | :---- |
| /productos | Grid con filtros por categoría (Hogar, Capilar, Institucional) |
| /productos/\[slug\] \- Línea Hogar | 6 productos con páginas de detalle, tablas de dilución, links de YouTube, botón "Pedir por WhatsApp" |
| /productos/\[slug\] \- Línea Institucional | 5 productos con tablas de especificaciones técnicas |
| Sistema de promociones | Marcar productos como "en promoción" (lee del campo en BD) |
| /promociones | Productos marcados \+ sección de promoción semanal |

## **Semana 4: Tratamientos Capilares \+ Lanzamiento**

| Tarea | Detalles |
| :---- | :---- |
| /tratamientos/kiwi-acai | Página estática con guía de 3 pasos (Shampoo, Mascarilla, Loción) |
| /tratamientos/honey-melon | Página estática con guía de 3 pasos |
| /tratamientos/revitalizante | Página estática con guía de 2 pasos (línea masculina) |
| Línea Capilar en /productos | Links a páginas de tratamiento \+ tarjetas de productos individuales |
| SEO | Metadata por página, sitemap.xml, robots.txt, imágenes Open Graph |
| Configuración de dominio | Configurar DNS de nouvie.co → Vercel |
| Testing | Pruebas móvil (iOS/Android), cross-browser |

# **Fase 2: CMS (Futuro)**

*Estimado: 2-3 semanas adicionales después del lanzamiento de Fase 1*

| Funcionalidad | Enfoque |
| :---- | :---- |
| Autenticación admin | Extender auth existente de nouvie-sales o ruta admin separada |
| Gestión de productos | Editar nombre, precio, descripción, imágenes, flag de promoción |
| Testimonios | CRUD para testimonios de clientes |
| Promociones | Editor de banner/contenido de promoción semanal |
| Páginas estáticas | Editor de texto enriquecido para Nosotros, Filosofía |
| Subida de imágenes | Integración con Cloudinary |

# **Arquitectura de Datos**

### **Desde base de datos existente (solo lectura):**

* Nombre del producto, precio, categoría, URL de imagen, estado activo

### **Nuevo campo a agregar en tabla de productos:**

* is\_promotion (boolean)  
* promotion\_price (decimal opcional)

### **Hardcodeado en código (Fase 1):**

* Tablas de dilución  
* Especificaciones técnicas (pH, densidad, biodegradabilidad)  
* Guías paso a paso de tratamientos  
* URLs de videos de YouTube

*Justificación: Mantiene la Fase 1 rápida. La Fase 2 puede migrar contenido hardcodeado a BD si el cliente solicita editabilidad.*

# **Decisiones Clave**

| Decisión | Elección | Razón |
| :---- | :---- | :---- |
| Especificaciones técnicas | Hardcodeado | Raramente cambia, reduce complejidad de BD |
| Páginas de tratamientos | Rutas estáticas | Solicitud del cliente, contenido simple |
| Pedidos | Deeplinks de WhatsApp | Sin sistema de pago aún |
| Promociones | Flag en BD \+ precio opcional | Flexible para cambios semanales |
| CMS | Fase 2 | Lanzar sitio público primero |

# **Stack Tecnológico**

| Componente | Tecnología |
| :---- | :---- |
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Base de Datos | PostgreSQL (reutiliza BD existente) |
| ORM | Prisma |
| Hosting | Vercel |
| Imágenes | Cloudinary o Vercel Blob |
| Analytics | Google Analytics |

# **Estructura de Archivos**

**app/**

  page.tsx                    \# Home  
  nosotros/page.tsx  
  filosofia/page.tsx  
  testimonios/page.tsx  
  contacto/page.tsx  
  promociones/page.tsx  
  productos/  
    page.tsx                  \# Catálogo con filtros  
    \[slug\]/page.tsx           \# Detalle de producto  
  tratamientos/  
    kiwi-acai/page.tsx  
    honey-melon/page.tsx  
    revitalizante/page.tsx

—  
Preparado por Cristina \- yosola.co  
Enero 2025