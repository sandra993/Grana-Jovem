import './Header.css';

const Header = () => {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <header className="header">
      <h1>Grana Jovem 💸</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        🌙 / ☀️
      </button>
    </header>
  );
};

export default Header;
