"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

const ThemeSwitchToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setTheme(newChecked ? "dark" : "light");
  };

  return (
    <div className="w-fit flex items-center justify-center">
      <label className="swap swap-rotate">
        <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
        <IconSun
          className="swap-on text-white"
          onClick={() => setTheme("dark")}
          size={40}
        />
        <IconMoon
          className="swap-off text-black"
          onClick={() => setTheme("light")}
          size={36}
        />
      </label>
    </div>
  );
};

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setTheme(newChecked ? "dark" : "light");
  };
  return <Switch checked={isChecked} onCheckedChange={toggleTheme} />;
};
export { ThemeSwitchToggle, ThemeSwitcher };
