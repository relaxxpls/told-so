import { Montserrat, Merriweather } from "@next/font/google";
import localFont from "@next/font/local";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import Layout from "../components/Layout";
import { chains, theme, wagmiClient } from "../config/wagmi";
import "../styles/globals.css";

import type { AppProps } from "next/app";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-serif",
});

const greatBananaScript = localFont({
  src: [{ path: "../assets/font/GreatBananaScript.ttf", weight: "400" }],
  variable: "--font-brand",
});

const fonts = [
  greatBananaScript.variable,
  montserrat.variable,
  merriweather.variable,
];

const App = ({ Component, pageProps }: AppProps) => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      appInfo={{ appName: "Told.So" }}
      chains={chains}
      theme={theme}
    >
      <Layout className={fonts.join(" ")}>
        <Component {...pageProps} />
      </Layout>
    </RainbowKitProvider>
  </WagmiConfig>
);

export default App;
