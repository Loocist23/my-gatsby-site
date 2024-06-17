import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <h1>Welcome to Eat Good</h1>
      <p>Your favorite place for healthy and delicious meals.</p>
    </Layout>
  );
};

export const Head = () => <title>Eat Good - Home</title>;

export default HomePage;
