import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SingleDish from '../components/SingleDish';

const OurMenuPage = ({ data }) => {
  const [category, setCategory] = useState('all');
  const dishes = data.allMarkdownRemark.edges;

  const filteredDishes = category === 'all'
    ? dishes
    : dishes.filter(({ node }) => node.frontmatter.category === category);

  return (
    <Layout>
      <h1>Our Menu</h1>
      <div className="container">
        <div className="mb-4">
          <button className="btn btn-primary me-2" onClick={() => setCategory('all')}>All</button>
          <button className="btn btn-primary me-2" onClick={() => setCategory('salads')}>Salads</button>
          <button className="btn btn-primary" onClick={() => setCategory('hot dish')}>Hot Dishes</button>
        </div>
        <div className="row">
          {filteredDishes.map(({ node }) => (
            <SingleDish
              key={node.frontmatter.slug}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              image={node.frontmatter.image_cover.childImageSharp.gatsbyImageData}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            image_cover {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Eat Good - Our Menu</title>;

export default OurMenuPage;
