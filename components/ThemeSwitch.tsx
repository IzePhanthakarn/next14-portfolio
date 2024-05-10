"use client";

import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="w-fit flex items-center justify-center">
      <label className="swap swap-rotate text-white">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" checked={resolvedTheme === 'dark'} />

        {/* sun icon */}
        <IconSun className="swap-on" onClick={() => setTheme('dark')} size={40} />

        {/* moon icon */}
        <IconMoon className="swap-off" onClick={() => setTheme('light')} size={36} />
      </label>
    </div>
  );
};

export default ThemeSwitch;
