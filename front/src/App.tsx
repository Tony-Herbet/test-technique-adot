import { Box } from '@mui/material'
import { useQuery } from '@apollo/client';
import { GET_DESTINATIONS } from './graphql';
import { Destination } from './types';

function App() {
  const { data, loading} = useQuery(GET_DESTINATIONS)
  
  if (loading) return <>Loading</>
  if (!data || data.destinations.length === 0) return <>No data</>
  
  return (
    <>
      {
        data.destinations.map((destination: Destination) => (
          <Box key={destination._id}>
            {destination.name}
          </Box>
        ))
      }
    </>
  )
}

export default App
