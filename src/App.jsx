import { ThemeToggle } from '@/components/theme-toggle'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hello World
        </h1>
        <p className="text-xl text-muted-foreground">
          Welcome to React with Tailwind CSS and shadcn/ui
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <div className="p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
            <p className="text-sm">Dark/Light theme support ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
