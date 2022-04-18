import React from "react";
import type { NextPage } from "next";

import styles from "../styles/pages/index.module.scss";

import InputExample from "../components/inputExample";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <InputExample />
    </div>
  );
};

export default Home;
