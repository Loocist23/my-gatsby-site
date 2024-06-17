import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'bootstrap/dist/css/bootstrap.min.css';

const DishTemplate = ({ data }) => {
  const { markdownRemark: dish } = data;
  const coverImage = getImage(dish.frontmatter.image_cover.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            {coverImage && <GatsbyImage image={coverImage} alt={dish.frontmatter.title} className="img-fluid" />}
          </div>
          <div className="col-md-6">
            <h1 className="mb-4">{dish.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: dish.html }} className="mb-4" />
            <p><strong>Ingredients:</strong> {dish.frontmatter.ingredients.join(', ')}</p>
            <p><strong>Calories:</strong> {dish.frontmatter.calories}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        ingredients
        calories
        image_cover {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <title>Eat Good - {data.markdownRemark.frontmatter.title}</title>;

export default DishTemplate;

