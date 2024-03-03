import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";

const style = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("black", "#000000")(props),
    },
  }),
};

const config = {
  initialColoMode: "",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#61616+1+",
    dark: "black",
  },
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </RecoilRoot>
  </ChakraProvider>
);
