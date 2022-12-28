import { Button, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <Button
      sx={{
        color: theme.color.colors.text.secondary.value,
        background: theme.color.colors.grey[200]?.value,
      }}
    >
      click
    </Button>
  );
}

export default App;
