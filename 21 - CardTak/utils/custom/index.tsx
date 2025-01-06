import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface CustomBoxProps {
  sx?: SxProps<Theme>;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

function BoxRow({ sx, children, ...other }: CustomBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        color: "primary.contrastText",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

function BoxColumn({ sx, children, ...other }: CustomBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 1,
        color: "primary.contrastText",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

function BoxRowAround({ sx, children, ...other }: CustomBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",
        gap: 1,
        color: "primary.contrastText",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

export { BoxRow, BoxColumn, BoxRowAround };
