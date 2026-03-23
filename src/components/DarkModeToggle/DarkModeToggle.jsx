import { useTheme } from '../../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <label
      className={styles.toggleWrapper}
      title="Toggle Dark Mode"
      aria-label="Toggle dark mode"
    >
      <span className={styles.icon} aria-hidden="true">
        {isDarkMode ? '🌙' : '☀️'}
      </span>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isDarkMode}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <span className={styles.slider} />
    </label>
  );
}
