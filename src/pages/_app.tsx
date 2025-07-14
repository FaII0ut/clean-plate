import "@/styles/globals.css";
import type {AppProps} from "next/app";

import Layout from "../components/Layout";
import store from "@/store";
import {StoreProvider} from "easy-peasy";

import { NextPage } from "next";

type NextPageWithNoLayout = NextPage & {
  noLayout?: boolean;
};

export default function App({ Component, pageProps }: AppProps) {
  const ComponentWithNoLayout = Component as NextPageWithNoLayout;
  return (
    <StoreProvider store={store}>
      {ComponentWithNoLayout.noLayout ? (
        <ComponentWithNoLayout {...pageProps} />
      ) : (
        <Layout>
          <ComponentWithNoLayout {...pageProps} />
        </Layout>
      )}
    </StoreProvider>
  );
}
