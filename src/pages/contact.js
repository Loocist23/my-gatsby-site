import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us at contact@eatgood.com</p>
    </Layout>
  );
};

export const Head = () => <title>Eat Good - Contact</title>;

export default ContactPage;
