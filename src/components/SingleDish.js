import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleDish = ({ slug, title, image }) => {
  const coverImage = getImage(image);

  return (
    <div className="col-md-4 mb-4">
      <Link to={`/our-menu/${slug}`} className="text-decoration-none text-dark">
        <div className="card h-100">
          {coverImage && <GatsbyImage image={coverImage} alt={title} className="card-img-top" />}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleDish;
