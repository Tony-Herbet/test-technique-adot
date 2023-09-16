import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdotTheme } from '../../types';


function Header() {
  const theme: AdotTheme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography sx={{
          color: theme.palette.common.black,
          "fontSize": "2.125rem",
          "fontWeight": 300,
          "lineHeight": "1.20588em",
        }}
        >
        Destinations
      </Typography>
      <Button sx={{ 
        backgroundColor: theme.palette.primary.main,
        fontFamily: "Roboto",
        color: theme.palette.common.black, 
        "fontSize": "0.875rem",
        "textTransform": "uppercase",
        "fontWeight": 400,
      }}
      >
        Ajouter
      </Button>
    </Box>
  )
}

export default Header
