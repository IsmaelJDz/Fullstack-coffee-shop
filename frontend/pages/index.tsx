import config from "../config/apollo";
import { QueryUsers } from "../graphql/queries/home";

import { User } from "../ts/home";

import MainContainer from "../components/home";

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Main movies container
 */

export default function Home(props: User) {
  console.log(props);

  return <MainContainer />;
}

export async function getStaticProps() {
  const { data } = await config.query({
    query: QueryUsers
  });

  if (!data) {
    return {
      redirect: {
        destination: "/no-data"
      }
    };
  }

  if (data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      users: data
    },
    revalidate: 60
  };
}
