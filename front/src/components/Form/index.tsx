import { Box, Button, Typography, Modal, InputLabel, Input } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdotTheme, FormProps } from "../../types";
import { ChangeEvent } from "react";


function Form({
    destinationForm,
    handleFormOpeningClosing,
    saveDestinationForm,
    destinations,
    saveDestinations
  }: FormProps) {
  const theme: AdotTheme = useTheme();

  const handleCancel = () => {
    saveDestinationForm({}) // Clear the state
    handleFormOpeningClosing()
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const newDestinationForm = {
      ...destinationForm,
      [event.target.id]: event.target.value
    }
    saveDestinationForm(newDestinationForm)
  }
  
  const handleFormSubmit = () => {
    // Should do some verification and then make an API call
    // Work around for now
    const mockWithoutTheEditedDestination = destinations.filter(destination => destination._id !== destinationForm._id)
    const newMockDestinations = [...mockWithoutTheEditedDestination, destinationForm];
    saveDestinations({destinations: [...newMockDestinations]})
    handleFormOpeningClosing()
  }

  return (
    <Modal open >
      <Box sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ 
            backgroundColor: theme.palette.common.white,
            borderRadius: theme.customBorderRadius.sm,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <Typography sx={{
            "fontSize": "1.3125rem",
            "fontWeight": 600,
            "lineHeight": "1.16667em",
            "fontFamily": "'Poppins', sans-serif",
          }}
          >
              Ajouter une nouvelle destination
          </Typography>
          <Box>
            <InputLabel 
              htmlFor="name"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.75rem",
                "fontWeight": 400,
                "lineHeight": "1.375em"
              }}
            >
              Nom de la destination
            </InputLabel>
            <Input 
              id="name"
              sx={{
                width: '100%',
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.875rem",
                "fontWeight": 600,
                "lineHeight": "1.3em"
              }}
              value={destinationForm.name}
              onChange={handleInput}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="address"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.75rem",
                "fontWeight": 400,
                "lineHeight": "1.375em"
              }}
            >
              Adresse
            </InputLabel>
            <Input
              id="address"
              sx={{
                width: '100%',
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.875rem",
                "fontWeight": 600,
                "lineHeight": "1.3em"
              }}
              value={destinationForm.address}
              onChange={handleInput}
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="img"
              sx={{
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.75rem",
                "fontWeight": 400,
                "lineHeight": "1.375em"
              }}
            >
              Lien de l'image
            </InputLabel>
            <Input
              id="img"
              sx={{
                width: '100%',
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.875rem",
                "fontWeight": 600,
                "lineHeight": "1.3em"
              }}
              value={destinationForm.img}
              onChange={handleInput}
            />          
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: '34px'
            }}
          >
            <Box>
              <InputLabel
                htmlFor="residents"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.75rem",
                  "fontWeight": 400,
                  "lineHeight": "1.375em"
                }}
              >
                Nombre d'habitants
              </InputLabel>
              <Input
                id="residents"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
                value={destinationForm.residents}
                onChange={handleInput}
                />
              </Box>

            <Box>
              <InputLabel
                htmlFor="hotels"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.75rem",
                  "fontWeight": 400,
                  "lineHeight": "1.375em"
                }}
              >
                Nombre d'hôtels
              </InputLabel>
              <Input
                id="hotels"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
                value={destinationForm.hotels}
                onChange={handleInput}
              />
            </Box>

            <Box>
              <InputLabel
                htmlFor="avg_income"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.75rem",
                  "fontWeight": 400,
                  "lineHeight": "1.375em"
                }}
              >
                Revenu Moy (€)
              </InputLabel>
              <Input
                id="avg_income"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
                value={destinationForm.avg_income}
                onChange={handleInput}
              />
            </Box>

            <Box>
              <InputLabel
                htmlFor="square_kilometer"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.75rem",
                  "fontWeight": 400,
                  "lineHeight": "1.375em"
                }}
              >
                Superficie (km²)
              </InputLabel>
              <Input
                id="square_kilometer"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
                value={destinationForm.square_kilometer}
                onChange={handleInput}
              />            
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '34px'
            }}
          >
            <Button
              sx={{ 
                backgroundColor: theme.palette.common.white,
                borderRadius: theme.customBorderRadius.sm,
                fontFamily: "Roboto",
                color: theme.palette.common.black, 
                "fontSize": "0.875rem",
                "textTransform": "uppercase",
                "fontWeight": 500, 
              }}
              onClick={handleCancel}
            >
              annuler
            </Button>
            <Button
              sx={{ 
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.customBorderRadius.sm,
                fontFamily: "Roboto",
                color: theme.palette.common.black, 
                "fontSize": "0.875rem",
                "textTransform": "uppercase",
                "fontWeight": 500,
              }}
              onClick={handleFormSubmit}
            >
              ajouter
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default Form
