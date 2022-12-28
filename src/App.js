import { Button, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <Button
      sx={{
        color: theme.color?.colors.black?.value,
        background: theme.color?.colors.grey[600]?.value,
      }}
    >
      click
    </Button>
  );
}

export default App;
