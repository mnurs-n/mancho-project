import darkMode from '../../shared/assets/darkMode.svg';

interface ButtonProps {
    isDark: boolean;
    onToggle: () => void;
}

export default function Button({onToggle} : ButtonProps) {
    return (
    <button onClick={onToggle} className="button" type="button">
        <img src={darkMode} className="dark-mode-icon" alt="Toggle Theme" />
      </button>
    )
}