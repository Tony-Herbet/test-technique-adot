import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_DESTINATIONS } from './graphql';
import { AdotTheme, Destination, AppProps } from './types';
import mockDestinations from './mocks/destinations';
import { useEffect } from 'react';

import Header from './components/Header';
import DestinationComponent from './components/Destination'

function App({ destinations, saveDestinations, handleLoading, loading }: AppProps) {
  const theme: AdotTheme = useTheme();

  const { loading: queryLoading, error } = useQuery(GET_DESTINATIONS)

  useEffect(() => {
      // For now since back doesn't work
      const onError = () => {
        saveDestinations(mockDestinations)
        handleLoading()
      }

      if(error && !queryLoading) {
        onError()
      }
  }, [queryLoading, error, handleLoading, saveDestinations]);
  
  // if (!data || data.destinations.length === 0) return <>No data</>

  return (
    <>
      {loading && <>Loading</>}
      {!loading && (
        <Box sx={{backgroundColor: theme.palette.background?.default, padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Header />
          <Box className="destinations" sx={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', marginTop: "30px"}}>
          {
            destinations.map((destination: Destination) => (
                <DestinationComponent destination={destination} key={destination._id} />
              ))
            }
          </Box>
        </Box>
      )}
    </>
  )
}

export default App
