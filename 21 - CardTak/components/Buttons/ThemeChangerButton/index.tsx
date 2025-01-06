"use client";

import { useThemeContext } from "@/utils/context/ThemeContext";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { BoxRow } from "@/utils/custom";
import { IconButton, Button, Typography } from "@mui/material";

const ThemeTogglerButton = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <BoxRow sx={{ width: "100%", direction: "ltr" }}>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
        startIcon={themeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      >
        <Typography variant="h6">
          {themeMode === "dark" ? "حالت تاریک" : "حالت روشن"}
        </Typography>
      </Button>
    </BoxRow>
  );
};

const ThemeTogglerIconButton = () => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <BoxRow
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      <IconButton onClick={toggleTheme} color="primary" size="large">
        {themeMode === "light" ? (
          <LightModeIcon fontSize="inherit" />
        ) : (
          <DarkModeIcon fontSize="inherit" />
        )}
      </IconButton>
    </BoxRow>
  );
};

export { ThemeTogglerButton, ThemeTogglerIconButton };
