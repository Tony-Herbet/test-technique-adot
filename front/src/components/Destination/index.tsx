import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AdotTheme, DestinationProps } from '../../types';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';

function Destination({
    destination,
    handleFormOpeningClosing,
    deleteDestination,
    saveDestinationForm,
    toggleDestination
  }: DestinationProps) {
  const theme: AdotTheme = useTheme();

  return (
    <Box className="destination" sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.customBorderRadius.sm,
        backgroundColor: theme.palette.common.white,
        flexBasis: "33%",
        maxWidth: "28%",
        marginBottom: "30px"
      }}
    >
    
      <FirstRow
        destination={destination}
        handleFormOpeningClosing={handleFormOpeningClosing}
        deleteDestination={deleteDestination}
        saveDestinationForm={saveDestinationForm}
      />
      <SecondRow destination={destination} toggleDestination={toggleDestination} />
      <ThirdRow destination={destination} />
    </Box>
  )
}

export default Destination
