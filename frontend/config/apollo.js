import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from "@apollo/client";

import fetch from "node-fetch";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: "http://localhost:4000/",
    fetch
  }),
  connectToDevTools: true,
  cache: new InMemoryCache()
});

export default client;
