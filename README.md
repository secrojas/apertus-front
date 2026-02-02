# Apertus Frontend

Sistema de gestión de Recursos Humanos con portal web público y panel de administración.

## Demo

Ver el proyecto en producción: **[https://apertus.com.ar](https://apertus.com.ar)**

## Tecnologías

- **Framework:** React 18 con TypeScript
- **Build:** Vite 3
- **State Management:** Redux Toolkit
- **Routing:** React Router v6 (HashRouter)
- **HTTP Client:** Axios
- **UI:** Bootstrap 5, React Bootstrap
- **Notificaciones:** React Toastify, SweetAlert2

## Requisitos

- Node.js 16+
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd apertus-front

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con la URL del API
```

## Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL base del API backend | `http://127.0.0.1:8030/api` |

## Scripts

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción (tsc + vite build)
npm run preview  # Preview del build de producción
```

## Estructura del Proyecto

```
src/
├── admin/          # Módulo de administración
│   ├── components/ # Componentes del admin (SideBar, DashboardCard)
│   ├── hooks/      # Hooks del admin (useDashboard, useJobs, etc.)
│   ├── pages/      # Páginas del admin (Dashboard, Jobs, Categories)
│   ├── router/     # Router del admin
│   └── styles/     # Estilos CSS Modules
│
├── auth/           # Módulo de autenticación
│   ├── components/ # Formularios (Login, Registro, ResetPassword)
│   ├── pages/      # Página contenedora (LoginRegistro)
│   └── css/        # Estilos
│
├── web/            # Módulo público
│   ├── components/ # Header, Footer, WhatsAppBtn
│   ├── hooks/      # useNavbar, usePerfil, usePostulaciones, etc.
│   ├── pages/      # Home, Servicios, Postulaciones, Perfil, etc.
│   └── router/     # Router web
│
├── reducers/       # Redux slices
│   ├── authSlice.ts
│   ├── jobSlice.ts
│   ├── candidatoSlice.ts
│   ├── searchSlice.ts
│   ├── contactosSlice.ts
│   ├── serviciosSlice.ts
│   └── general.ts
│
├── store/          # Configuración Redux store
├── routes/         # Configuración de rutas principales
├── hooks/          # Hooks globales
├── helpers/        # Funciones utilitarias
├── components/     # Componentes compartidos
└── assets/         # Imágenes y CSS global
```

## Módulos

### Web (Público)
Portal público con:
- Home con secciones informativas
- Listado de búsquedas activas (jobs)
- Detalle de servicios (Academia, RRHH, Capacitación, etc.)
- Carga de CV
- Formulario de contacto
- Perfil de usuario (requiere autenticación)

### Admin (Protegido)
Panel de administración con:
- Dashboard con estadísticas
- CRUD de trabajos, categorías, tecnologías, empresas
- Gestión de usuarios y candidatos
- Configuración de redes sociales y logo

### Auth
Flujo de autenticación:
- Login
- Registro
- Reset de password
- Cambio de password

## Rutas

### Públicas
| Ruta | Página |
|------|--------|
| `/` | Home |
| `/nosotros` | Nosotros |
| `/servicios/*` | Servicios (con sub-rutas) |
| `/postulaciones` | Búsquedas activas |
| `/cargaCv` | Carga de CV |
| `/contacto` | Contacto |
| `/equipo` | Equipo |
| `/login` | Login |
| `/registro` | Registro |
| `/perfil/*` | Perfil (requiere auth) |

### Admin (requiere rol admin)
| Ruta | Página |
|------|--------|
| `/admin/dashboard` | Dashboard |
| `/admin/jobs` | Gestión de trabajos |
| `/admin/categories` | Gestión de categorías |
| `/admin/technologies` | Gestión de tecnologías |
| `/admin/companies` | Gestión de empresas |
| `/admin/users` | Gestión de usuarios |
| `/admin/contacts` | Contactos recibidos |

## Roles de Usuario

| Rol | Acceso |
|-----|--------|
| `candidato` | Web pública + Perfil |
| `admin` | Panel de administración |

## Documentación

Ver `/docs` para documentación técnica detallada:
- [Arquitectura](./docs/01-architecture.md)
- [Estructura de Carpetas](./docs/02-folder-structure.md)
- [State Management](./docs/03-state-management.md)
- [Routing](./docs/04-routing.md)
- [API Endpoints](./docs/05-api-endpoints.md)
- [Componentes](./docs/06-components.md)
- [Plan de Migración a Next.js](./docs/07-migration-nextjs.md)
