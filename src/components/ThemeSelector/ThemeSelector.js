import React from "react";

function ThemeSelector() {
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || ""
  );
  const id = React.useId();

  const handleSetTheme = (e) => {
    const theme = e.target.value;

    if (theme === "") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "");
        document.documentElement.dataset.theme = "dark";
      } else {
        localStorage.setItem("theme", "");
        document.documentElement.dataset.theme = "light";
      }
    }

    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.dataset.theme = "dark";
    }

    if (theme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.dataset.theme = "light";
    }

    setTheme(theme);
  };

  return (
    <div className="dark-mode-toggle">
      <label htmlFor={id}>Theme</label>
      <select id={id} value={theme} onChange={handleSetTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="">System</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
