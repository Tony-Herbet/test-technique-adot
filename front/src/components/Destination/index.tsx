import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AdotTheme, DestinationProp } from '../../types';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

function Destination({ destination }: DestinationProp) {
  const theme: AdotTheme = useTheme();
  console.log(destination)

  return (
    <Box className="destination" key={destination._id} sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.customBorderRadius.sm,
        backgroundColor: theme.palette.common.white,
        flexBasis: "33%",
        maxWidth: "28%",
        marginBottom: "30px"
      }}
    >
    
      <FirstRow destination={destination} />
      <SecondRow destination={destination} />
      <ThirdRow destination={destination} />
    </Box>
  )
}

export default Destination
