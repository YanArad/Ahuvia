import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <h1>My App</h1>
          <DarkModeToggle />
        </header>
        <main className="app-content">
          <p>Welcome! Use the toggle in the top-right corner to switch themes.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}
