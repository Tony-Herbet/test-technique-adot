import { Theme, createTheme } from "@mui/material";
import { AdotTheme } from "../types";

export const ADOT_THEME: AdotTheme = {
    "customBreakpoints": {
      "xs": 0,
      "sm": 600,
      "md": 960,
      "lg": 1280,
      "xl": 1920
    },
    "palette": {
      "common": {
        "black": "#000",
        "white": "#fff"
      },
      "primary": {
        "light": "#7affbb",
        "main": "#3FD48B",
        "dark": "#00a25d",
        "contrastText": "#000"
      },
      "secondary": {
        "light": "#556ac2",
        "main": "#194091",
        "dark": "#001b63",
        "contrastText": "#fff"
      },
      "error": {
        "light": "#ff565d",
        "main": "#E70033",
        "dark": "#ac000d",
        "contrastText": "#fff"
      },
      "warning": {
        "light": "#ffd168",
        "main": "#FFA037",
        "dark": "#c77100",
        "contrastText": "#000"
      },
      "info": {
        "light": "#c2c2c2",
        "main": "#6F6F6F",
        "dark": "#444444",
        "contrastText": "#fff"
      },
      "success": {
        "light": "#60e653",
        "main": "#15b31d",
        "dark": "#008200",
        "contrastText": "#000"
      },
      "background": {
        "default": "#F1F6FF"
      }
    },
    "typography": {
      "fontFamily": "'Poppins', sans-serif",
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightBold": 600,
      "h1": {
        "fontSize": "7rem",
        "fontWeight": 300,
        "fontFamily": "'Poppins', sans-serif",
        "letterSpacing": "-.04em",
        "lineHeight": "1.14286em"
      },
      "h2": {
        "fontSize": "3.5rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "letterSpacing": "-.02em",
        "lineHeight": "1.30357em"
      },
      "h3": {
        "fontSize": "2.8125rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.06667em"
      },
      "h4": {
        "fontSize": "2.125rem",
        "fontWeight": 300,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.20588em"
      },
      "h5": {
        "fontSize": "1.5rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.35417em"
      },
      "h6": {
        "fontSize": "1.3125rem",
        "fontWeight": 600,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.16667em"
      },
      "subtitle1": {
        "fontSize": "1rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.5em"
      },
      "body1": {
        "fontSize": "0.875rem",
        "fontWeight": 600,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.3em"
      },
      "body2": {
        "fontSize": "0.875rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.46429em"
      },
      "caption": {
        "fontSize": "0.75rem",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif",
        "lineHeight": "1.375em"
      },
      "button": {
        "fontSize": "0.875rem",
        "textTransform": "uppercase",
        "fontWeight": 400,
        "fontFamily": "'Poppins', sans-serif"
      }
    },
    "transitions": {
      "easing": {
        "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
        "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
        "easeIn": "cubic-bezier(0.4, 0, 1, 1)"
      },
      "duration": {
        "standard": 300
      }
    },
    "styleMixin": {
      "flexCenter": "display: flex; justify-content: center; align-items: center;",
      "flexSpaceBetweenCenter": "display: flex; justify-content: space-between; align-items: center;",
      "codeFont": "font-family: monospace;",
      "noOpacity": "opacity: 0;",
      "flexStartCenter": "display: flex; justify-content: start; align-items: center;",
      "flexRowBetween": "display: flex; flex-direction: row; justify-content: space-between;",
      "flexColumn": "display: flex; flex-direction: column;",
      "flexColumnReverse": "display: flex; flex-direction: column-reverse;",
      "flexColumnBetween": "display: flex; flex-direction: column; justify-content: space-between;",
      "flexColumnCenter": "display: flex; flex-direction: column; align-items: center;",
      "positionAbsoluteCenter": "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    },
    "customZIndex": {
      "base": 0,
      "container": 100,
      "containerPopovers": 200,
      "popovers": 300,
      "topbar": 400,
      "sidebar": 500,
      "appPopovers": 600
    },
    "customBorderRadius": {
      "sm": "5px",
      "md": "10px",
      "lg": "20px",
      "xl": "99px"
    },
    "customShadows": {
      "none": "none",
      "sm": "0px 0px 6px rgba(0, 0, 0, 0.1)",
      "md": "0px 0px 6px rgba(0, 0, 0, 0.3)"
    },
    "customSpacing": {
      "xxxs": "1px",
      "xxs": "2px",
      "xs": "4px",
      "sm": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "xxl": "48px",
      "xxxl": "64px"
    },
    "ultraLightColors": {
      "primary": "#d1ffe9",
      "secondary": "#c4d7ff",
      "error": "#ffd6df",
      "warning": "#ffe8cf",
      "info": "#f5f5f5",
      "success": "#CBF2CD"
    }
  }

  export const THEME: Theme = createTheme(ADOT_THEME);