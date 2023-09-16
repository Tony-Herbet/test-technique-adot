import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_DESTINATIONS } from './graphql';
import { AdotTheme, Destination } from './types';
import mockDestinations from './mocks/destinations';

import Header from './components/Header';
import DestinationComponent from './components/Destination'

function App() {
  const theme: AdotTheme = useTheme();

  const { loading} = useQuery(GET_DESTINATIONS)
  
  if (loading) return <>Loading</>
  // if (!data || data.destinations.length === 0) return <>No data</>

  return (
    <Box sx={{backgroundColor: theme.palette.background?.default, padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Header />
      <Box className="destinations" sx={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', marginTop: "30px"}}>
      {
        mockDestinations.destinations.map((destination: Destination) => (
          <DestinationComponent destination={destination} />
        ))
      }
      </Box>
    </Box>
  )
}

export default App
