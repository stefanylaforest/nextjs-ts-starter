import React from "react";
import type { NextPage } from "next";

import styles from "../styles/pages/index.module.scss";

import Demo from "../components/demo";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Demo />
    </div>
  );
};

export default Home;
