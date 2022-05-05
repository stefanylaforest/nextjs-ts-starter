import React from 'react';
import type { NextPage } from 'next';

import Demo from '../components/demo/demo';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Demo />
    </div>
  );
};

export default Home;
