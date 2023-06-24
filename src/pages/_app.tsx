import AuthModal from "@/components/AuthModal";
import "@/styles/globals.css";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { Provider } from "jotai";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ChakraBaseProvider>
        <AuthModal />
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </Provider>
  );
}
