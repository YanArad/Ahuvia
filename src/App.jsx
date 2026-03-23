import { ThemeProvider } from './context/ThemeContext';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import ChatBox from './components/ChatBox/ChatBox';
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
          <ChatBox />
        </main>
      </div>
    </ThemeProvider>
  );
}
