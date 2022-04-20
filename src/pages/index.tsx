import React from "react";
import type { NextPage } from "next";

import styles from "../styles/pages/index.module.scss";

import Demo from "../components/demo/demo";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Demo />
    </div>
  );
};

export default Home;
