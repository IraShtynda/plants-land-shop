import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#fff",
    secondary: "#0d3c00",
    accent: "#79a207",
    gray: "#707070",
    body_bg: "#FAF5F2",
    black: "#000000",
    yellow: "#ecd2a0",
};

const overrides = {
    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        },
        info: {
            main: Colors.black
        }
    },
    typography: {
        menuItem: {
            fontFamily: 'Source Sans Pro',
            color: Colors.black,
            fontWeight: 400,
            fontSize: "20px",
            '&:hover': {
                color: Colors.accent,
            },
            padding: 0,
            margin: '15px',
            overflowWrap: 'break-word',
            whiteSpace: 'nowrap',
        },
        menuItemMobile: {
            fontFamily: 'Source Sans Pro',
            color: Colors.primary,
            fontWeight: 400,
            fontSize: "19px",
            '&:hover': {
                color: Colors.accent,
            },
        },
        h2: {
            fontFamily: 'Source Sans Pro',
            color: Colors.accent,
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: '2.8px',
            marginBottom: '20px',
        },
        h1: {
            fontFamily: 'Lora',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "74px",
            [`@media screen and (max-width: 900px)`]: {
                fontSize: "64px"
            },
            [`@media screen and (max-width: 600px)`]: {
                fontSize: "48px"
            },
            marginBottom: '20px',
        },
        h3: {
            fontFamily: 'Lora',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "42px",
            [`@media screen and (max-width: 900px)`]: {
                fontSize: "38px"
            },
            [`@media screen and (max-width: 600px)`]: {
                fontSize: "34px"
            },
            marginBottom: '20px',
        },
        h5: {
            fontFamily: 'Source Sans Pro',
            color: Colors.secondary,
            fontWeight: 700,
            fontSize: "24px",
            marginBottom: '20px',
        },
        subtitle: {
            fontFamily: 'Source Sans Pro',
            fontSize: "18px",
            color: Colors.black,
        },
        p: {
            fontFamily: 'Source Sans Pro',
            fontSize: "18px",
            color: Colors.gray,
        },
        aboutListItem: {
            fontFamily: 'Source Sans Pro',
            color: Colors.black,
            fontWeight: 400,
            fontSize: "15px",
        },
        h6: {
            fontFamily: 'Source Sans Pro',
            color: Colors.accent,
            fontWeight: 700,
            fontSize: "18px",
        },
        count: {
            fontFamily: 'Lora',
            color: Colors.yellow,
            fontWeight: 700,
            fontSize: "74px",
            [`@media screen and (max-width: 900px)`]: {
                fontSize: "65px"
            },
            [`@media screen and (max-width: 600px)`]: {
                fontSize: "48px"
            },
        },
        countTitle: {
            fontFamily: 'Source Sans Pro',
            color: Colors.primary,
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: '2.8px',
        },
        footerMenuItem: {
            fontFamily: 'Source Sans Pro',
            color: Colors.primary,
            fontWeight: 400,
            fontSize: "20px",
            '&:hover': {
                color: Colors.accent,
            },
            padding: 0,
            overflowWrap: 'break-word',
            whiteSpace: 'nowrap',
        },
        basketText: {
            fontFamily: 'Source Sans Pro',
            color: Colors.black,
            fontWeight: 700,
            fontSize: "18px"
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                background: 'transparent',
            },
            variants:
                [
                    {
                        props: { variant: 'primary' },
                        style: {
                            background: Colors.accent,
                            '&:hover': {
                                background: Colors.secondary,
                            },
                            color: Colors.primary,
                            borderRadius: '26px',
                            fontWeight: 700,
                            fontSize: '12px',
                            padding: '15px 40px',
                        }
                    },
                    {
                        props: { variant: 'secondary' },
                        style: {
                            background: 'transparent',
                            '&:hover': {
                                background: Colors.black,
                                color: Colors.primary,
                            },
                            color: Colors.black,
                            borderRadius: '26px',
                            border: `1px solid ${Colors.black}`,
                            fontWeight: 700,
                            fontSize: '12px',
                            padding: '14px 40px',
                        }
                    },
                    {
                        props: { variant: 'primaryOrder' },
                        style: {
                            background: Colors.accent,
                            '&:hover': {
                                background: Colors.secondary,
                            },
                            color: Colors.primary,
                            borderRadius: '17px',
                            fontWeight: 700,
                            fontSize: '10px',
                            lineHeight: '10px',
                            padding: '12px 30px',
                            marginBottom: '20px',
                            marginTop: '10px'
                        }
                    },
                    {
                        props: { variant: 'submit' },
                        style: {
                            background: Colors.accent,
                            '&:hover': {
                                background: Colors.secondary,
                            },
                            color: Colors.primary,
                            borderRadius: '26px',
                            fontWeight: 700,
                            fontSize: '12px',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            width: '100%',
                            marginTop: '20px',
                        }
                    },
                    {
                        props: { variant: 'counter' },
                        style: {
                            background: Colors.primary,
                            color: Colors.black,
                            border: `1px solid ${Colors.black}`,
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '20px',
                            padding: '1px',
                            minWidth: '20px'
                        }
                    }
                ]
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: Colors.secondary,
                    opacity: 0.6,
                    padding: '15px 20px',
                    letterSpacing: '2.8px',
                    '&.Mui-selected': {
                        color: Colors.secondary,
                        opacity: 1
                    }
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none'
                },
            },
        },
    },

};

const theme = createTheme(overrides);

export { overrides };
export default theme;