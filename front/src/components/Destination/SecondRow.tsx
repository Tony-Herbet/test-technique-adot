import { Box, Switch, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AdotTheme, DestinationProp } from '../../types';
import { ChangeEvent } from 'react';

function SecondRow({ destination }: DestinationProp) {
  const theme: AdotTheme = useTheme();

  const handleToggle = (e: ChangeEvent) => {
    console.log('click on:', e.target?.ariaLabel)
  }
  
  return (
    <Box className="description" sx={{ 
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography sx={{
            "fontSize": "0.875rem",
            "fontWeight": 600,
            "lineHeight": "1.3em"
          }}
        >
          {destination.name}
        </Typography>
        <Typography sx={{
            "fontSize": "0.75rem",
            "fontWeight": 400,
            "lineHeight": "1.375em",
            color: theme.palette.info.main
          }}
        >
          {destination.address}
        </Typography>
      </Box>
      <Switch checked={destination.disable? false : true} onChange={(e: ChangeEvent) => handleToggle(e)} inputProps={{ 'aria-label': destination._id}} />
    </Box>
  )
}

export default SecondRow