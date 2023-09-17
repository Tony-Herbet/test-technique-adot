import { Box, Button, Typography, Modal, InputLabel, Input } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdotTheme } from "../../types";


function Form() {
  const theme: AdotTheme = useTheme();

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
              htmlFor="destination"
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
              id="destination"
              sx={{
                width: '100%',
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.875rem",
                "fontWeight": 600,
                "lineHeight": "1.3em"
              }}
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
            />
          </Box>

          <Box>
            <InputLabel
              htmlFor="image"
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
              id="image"
              sx={{
                width: '100%',
                fontFamily: "'Roboto', sans-serif",
                "fontSize": "0.875rem",
                "fontWeight": 600,
                "lineHeight": "1.3em"
              }}
            />          </Box>

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
              />
            </Box>

            <Box>
              <InputLabel
                htmlFor="income"
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
                id="address"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
              />
            </Box>

            <Box>
              <InputLabel
                htmlFor="surface"
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
                id="surface"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  "fontSize": "0.875rem",
                  "fontWeight": 600,
                  "lineHeight": "1.3em"
                }}
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
            <Button sx={{ 
              backgroundColor: theme.palette.common.white,
              borderRadius: theme.customBorderRadius.sm,
              fontFamily: "Roboto",
              color: theme.palette.common.black, 
              "fontSize": "0.875rem",
              "textTransform": "uppercase",
              "fontWeight": 500, 
            }}
            >
              annuler
            </Button>
            <Button sx={{ 
              backgroundColor: theme.palette.primary.main,
              borderRadius: theme.customBorderRadius.sm,
              fontFamily: "Roboto",
              color: theme.palette.common.black, 
              "fontSize": "0.875rem",
              "textTransform": "uppercase",
              "fontWeight": 500,
            }}
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
