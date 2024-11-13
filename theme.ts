import {
  createTheme,
  type MantineColorsTuple,
  type MantineTheme,
  rem,
} from "@mantine/core";

const $marineBlue: MantineColorsTuple = [
  "#e9f2ff",
  "#d3e2fe",
  "#a6c1f5",
  "#769fed",
  "#4f82e7",
  "#356fe3",
  "#2666e3",
  "#1656ca",
  "#0a4cb5",
  "#0042a1",
];

export const theme = createTheme({
  autoContrast: true,
  activeClassName: "",
  components: {
    InputWrapper: {
      styles: (theme: MantineTheme) => ({
        label: {
          marginBottom: theme.spacing.xxs,
          fontSize: theme.fontSizes.sm,
        },
      }),
    },
  },
  fontFamily: "Open Sans, sans-serif",
  headings: { fontFamily: "Open Sans, sans-serif" },
  primaryShade: 6,
  primaryColor: "marine-blue",
  colors: {
    "marine-blue": $marineBlue,
  },
  defaultRadius: "6px",
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(18),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  radius: { sm: "6px", md: "8px", lg: "10px" },
  spacing: {
    xxs: rem(4),
  },
}) as MantineTheme;
