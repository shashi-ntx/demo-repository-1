# Hello World React App

A simple React.js project with a "Hello World" page, featuring Tailwind CSS for styling, shadcn/ui components, and dark/light theme support.

## Features

- ⚛️ **React 19** - Latest React with Vite for fast development
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🧩 **shadcn/ui** - High-quality, customizable UI components
- 🌓 **Dark/Light Theme** - Theme toggle with persistent settings
- 🚀 **Vite** - Lightning-fast build tool and dev server

## Screenshots

### Light Theme
![Light Theme](https://github.com/user-attachments/assets/75f40375-cdc6-450d-b3be-b2bd42643b8d)

### Dark Theme
![Dark Theme](https://github.com/user-attachments/assets/adce1c9b-22c3-4f9a-b2fb-be66d7a9c95f)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd demo-repository-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
demo-repository-1/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx        # Reusable button component
│   │   ├── theme-provider.jsx    # Theme context provider
│   │   └── theme-toggle.jsx      # Theme toggle button
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles with Tailwind
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Project dependencies
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **class-variance-authority** - For managing component variants
- **clsx & tailwind-merge** - For conditional class names

## Theme Support

The application includes a theme provider that supports:
- Light mode
- Dark mode
- Persistent theme preference (saved in localStorage)
- Smooth transitions between themes

## License

This project is open source and available under the MIT License.
