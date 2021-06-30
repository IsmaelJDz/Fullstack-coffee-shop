import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import client from "../config/apollo";

import { Provider } from "react-redux";
import store from "../redux/store";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </I18nextProvider>
    </ApolloProvider>
  );
}
export default MyApp;
