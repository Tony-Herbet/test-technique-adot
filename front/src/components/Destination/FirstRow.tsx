import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdotTheme, DestinationFirstRow } from '../../types';

function FirstRow({
    destination,
    handleFormOpeningClosing,
    deleteDestination,
    saveDestinationForm
  }: DestinationFirstRow) {
  const theme: AdotTheme = useTheme();

  const editColor = destination.disable ? theme.palette.info.light : theme.palette.info.main;
  const deleteColor = destination.disable ? theme.palette.info.light : theme.palette.error.main;

  const handleEdit = () => {
    if(!destination.disable) {
      handleFormOpeningClosing();
      saveDestinationForm(destination);
    }
  }

  const handleDelete = () => {
    if(!destination.disable) {
      // Should do an API call
      deleteDestination(destination._id)
    }
  }
  
  return (
    <Box className="first_row" sx={{
        width: "100%",
        position: "relative"
      }}
    >
      <Box component="img" src={destination.img} sx={{ borderTopLeftRadius: theme.customBorderRadius.sm, borderTopRightRadius: theme.customBorderRadius.sm, width: "100%"}} />

      <Box className="actions" sx={{
          backgroundColor: theme.palette.common.white,
          position:  "absolute",
          top: "0px",
          right: "0px",
          borderRadius: theme.customBorderRadius.sm,
        }}
      >
        <Button 
          sx={{
            backgroundColor: theme.palette.common.white,
            borderRadius: "0px",
            borderTopLeftRadius: theme.customBorderRadius.sm,
            borderBottomLeftRadius: theme.customBorderRadius.sm,
          }}
          onClick={handleEdit}
        >
          <CreateIcon style={{ color: editColor}} />
        </Button>
        <Button 
          sx={{
            backgroundColor: theme.palette.common.white,
            borderRadius: "0px",
            borderTopRightRadius: theme.customBorderRadius.sm
          }}
          onClick={handleDelete}
        >
          <DeleteIcon style={{ color: deleteColor}} />
        </Button>
      </Box>
    </Box>
  )
}

export default FirstRow