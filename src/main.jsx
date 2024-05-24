import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import logo from "./assets/logo.png";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#01161E",
    800: "#124559",
    700: "#598392",
    600: "#AEC3B0",
    500: "#EFF6E0",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

// Dynamically set the favicon
const setFavicon = () => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = logo;
  document.head.appendChild(link);
};

setFavicon();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
