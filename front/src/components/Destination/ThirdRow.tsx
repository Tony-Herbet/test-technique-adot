import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AdotTheme, DestinationProp } from '../../types';

function ThirdRow({ destination }: DestinationProp) {
  const theme: AdotTheme = useTheme();
  
  return (
    <Box className="numbers" sx={{
        display: 'flex',
        justifyContent: "space-between",
        "fontSize": "0.75rem",
        "fontWeight": 400,
        "lineHeight": "1.375em",
        textAlign: 'center'
      }}
    >
      <Box sx={{ padding: '10px'}}>
        <Typography>
          {destination.resident}
        </Typography>
        <Typography sx={{ color: theme.palette.info.main }}>
          Habitants
        </Typography>
      </Box>
      <Box sx={{ padding: '10px'}}>
        <Typography>
          {destination.hotels}
        </Typography>
        <Typography sx={{ color: theme.palette.info.main }}>
          Hôtels
        </Typography>
      </Box>  
      <Box sx={{ padding: '10px'}}>
        <Typography>
          {destination.avg_income}
        </Typography>
        <Typography sx={{ color: theme.palette.info.main }}>
          Revenu Moy
        </Typography>
      </Box> 
      <Box sx={{ padding: '10px'}}>
        <Typography>
          {destination.square_kilometer}
        </Typography>
        <Typography sx={{ color: theme.palette.info.main }}>
          km²
        </Typography>
      </Box>             
    </Box>
  )
}

export default ThirdRow