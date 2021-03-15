import React from "react";
import { Link } from "@reach/router";

const DEFAULT_IMG_PLACEHOLDER = "http://placecorgi.com/300/300";

interface IProps {
  id: number;
  name: string;
  breed: string;
  medias: { small: string; medium: string; large: string; full: string }[];
  location: string;
  type: string;
}

const Pet = ({
  id,
  name,
  breed,
  medias,
  location,
  type,
}: IProps): JSX.Element => {
  return (
    <Link to={`/details/${id}`} className="pet">
      <section>
        <picture className="image-container">
          <img src={medias?.[0]?.small ?? DEFAULT_IMG_PLACEHOLDER} alt={name} />
        </picture>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${type} - ${breed} - ${location}`}</h2>
        </div>
      </section>
    </Link>
  );
};

export default Pet;
