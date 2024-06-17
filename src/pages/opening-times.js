import React from 'react';
import Layout from '../components/Layout';

const OpeningTimesPage = () => {
  return (
    <Layout>
      <h1>Opening Times</h1>
      <p>We are open Monday to Friday from 8 AM to 6 PM.</p>
    </Layout>
  );
};

export const Head = () => <title>Eat Good - Opening Times</title>;

export default OpeningTimesPage;
