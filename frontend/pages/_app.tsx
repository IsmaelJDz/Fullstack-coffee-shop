import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

import client from "../config/apollo";

import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
export default MyApp;
