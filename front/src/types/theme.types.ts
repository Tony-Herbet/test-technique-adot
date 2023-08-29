import { PaletteColor, Breakpoint, ThemeOptions, PaletteMode, Color } from '@mui/material';
import { PaletteTonalOffset, TypeAction, TypeBackground, TypeText } from '@mui/material/styles/createPalette';
import { ObjectType, SafeMap } from '.';
declare module '@mui/material/styles' {
    interface TypographyStyle {
        textTransform?: string | undefined;
    }
}
export type ThemeMode = {
    LIGHT: 'light';
    DARK: 'dark';
};
export type StorybookConfigType = {
    BASE: ThemeMode['LIGHT'] | ThemeMode['DARK'];
    APP_BG?: string | undefined;
    APP_CONTENT_BG?: string | undefined;
    BAR_BG?: string | undefined;
    BRAND_TITLE: string | undefined;
    BRAND_IMAGE: string | undefined;
    BRAND_TARGET: string | undefined;
    FONT_BASE: string | undefined;
    TEXT_COLOR?: string | undefined;
    BAR_TEXT_COLOR?: string | undefined;
    BAR_SELECTED_COLOR?: string | undefined;
    INPUT_BG?: string | undefined;
    INPUT_TEXT_COLOR?: string | undefined;
    INPUT_BORDER?: string | undefined;
};
export type StorybookParameters = {
    design: {
        type: string;
        url: URL;
    };
};
export type BreakpointsSizes = {
    xxs?: number | undefined;
    xs?: number | undefined;
    sm?: number | undefined;
    md?: number | undefined;
    lg?: number | undefined;
    xl?: number | undefined;
    xxl?: number | undefined;
    xxxl?: number | undefined;
};
export type Breakpoints = {
    keys: Array<Breakpoint>;
    values: Sizes;
};
export type IColors<T> = {
    primary: T;
    secondary: T;
    error: T;
    warning: T;
    info: T;
    success: T;
};
interface PaletteColorObject extends PaletteColor, ObjectType {
}
export type Colors = IColors<PaletteColorObject>;
export type UltraLightColors = IColors<string>;
export type ColorsWithCommmon = Colors & {
    common: CommonPaletteColor;
};
export interface ColorsWithMUIColors extends Colors {
    common: CommonPaletteColor;
    mode?: PaletteMode | undefined;
    grey?: Partial<Color>;
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
    action?: Partial<TypeAction>;
    contrastThreshold?: number | undefined;
    augmentColor?: string | undefined;
    tonalOffset?: PaletteTonalOffset | undefined;
    divider?: string | undefined;
}
export interface Typography extends ObjectType{
    fontFamily?: string | undefined;
    fontSize?: string | undefined;
    fontWeight?: number | undefined;
    lineHeight?: string | undefined;
    textTransform?: string | undefined;
    marginLeft?: string | undefined;
    color?: string | undefined;
    letterSpacing?: string | undefined;
}
export type ColorVariants = {
    ultraLight: string;
    light: string;
    main: string;
    dark: string;
};
export type TypographiesWithoutCategories = {
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
    button: Typography;
    caption: Typography;
    body1: Typography;
    subtitle1: Typography;
    body2: Typography;
};
export interface Typographies extends TypographiesWithoutCategories {
    fontFamily: string;
    fontSize: number;
    fontWeightBold: number;
    fontWeightLight: number;
    fontWeightRegular: number;
}
export type StyleMixin = SafeMap<string>;
export type Sizes = {
    none?: string | undefined;
    xxxs?: string | undefined;
    xxs?: string | undefined;
    xs?: string | undefined;
    sm?: string | undefined;
    md?: string | undefined;
    lg?: string | undefined;
    xl?: string | undefined;
    xxl?: string | undefined;
    xxxl?: string | undefined;
};
export type CustomZIndex = SafeMap<number>;
export interface CommonPaletteColor extends ObjectType {
    black: string;
    white: string;
}
export type CustomTransitions = {
    easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
    };
    duration: {
        standard: number;
    };
};
export interface AdotTheme extends ThemeOptions {
    palette: ColorsWithMUIColors;
    typography: Typographies;
    transitions: CustomTransitions;
    styleMixin: StyleMixin;
    customBreakpoints: BreakpointsSizes;
    customShadows: Sizes;
    customSpacing: Sizes;
    customBorderRadius: Sizes;
    customZIndex: CustomZIndex;
    ultraLightColors: UltraLightColors;
}
export type ColorValues = 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'default' | undefined;
export {};
