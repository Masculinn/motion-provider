import "../styles/globals.css";
import { fontPrimary, fontSecondary } from "../lib/fonts";

import Layout from "../providers/layout";
import type { AppProps } from "next/app";
import { cn } from "../lib/utils";
import StoreProvider from "../providers/store-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout className={cn(fontPrimary.className, fontSecondary.variable)}>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
