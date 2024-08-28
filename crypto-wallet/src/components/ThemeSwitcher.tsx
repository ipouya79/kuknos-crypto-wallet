const ThemeSwitcher: React.FC = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded "
    >
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;
