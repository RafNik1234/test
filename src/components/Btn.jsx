import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

export const Btn = () => {
  const theme = useTheme();

  return (
    <>
      <Button
        sx={{
          color: theme?.color?.colors?.text?.secondary?.value,
          background: theme?.color?.colors?.grey[200]?.value,
        }}
      >
        click
      </Button>
      <Button
        sx={{
          background: theme?.color?.colors?.text?.secondary?.value,
          color: theme?.color?.colors?.grey[200]?.value,
        }}
      >
        click
      </Button>
    </>
  );
};
