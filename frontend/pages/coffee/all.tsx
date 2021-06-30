import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import Layout from "../../layout";
import Card from "../../components/card";
import Loader from "../../components/loader";

import { QueryCoffees } from "../../graphql/queries/coffee";
import { Coffee } from "../../ts/coffees";

import styles from "./all.module.scss";

const FullLoader = () => {
  return (
    <div className={styles.fullLoader}>
      <Loader />
    </div>
  );
};

const AllCoffee = () => {
  const { data, loading, error } = useQuery(QueryCoffees);

  if (loading) return <FullLoader />;

  const { getAllCoffees } = data;

  return (
    <Layout>
      <div className={styles.main}>
        {getAllCoffees.map((coffee: Coffee) => (
          <Card {...coffee} key={coffee.id} />
        ))}
      </div>
    </Layout>
  );
};

export default AllCoffee;
