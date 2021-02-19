import React from "react";
import PropTypes from "prop-types";
import petAPI from "@frontendmasters/pet";

import Carousel from "components/carousel";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasApiError: false,
    };
  }

  async componentDidMount() {
    const { id } = this.props;

    if (id) {
      const parsedId = +id;

      try {
        const { animal } = await petAPI.animal(parsedId);
        const { name, photos, type, description, contact, breeds } = animal;

        this.setState({
          isLoading: false,
          hasApiError: false,
          name,
          medias: photos,
          type,
          description,
          location: `${contact.address.city}, ${contact.address.state}`,
          breed: breeds?.primary,
        });
      } catch {
        this.setState({ isLoading: false, hasApiError: true });
      }
    }
  }

  render() {
    if (this.state.hasApiError) {
      return (
        <section className="details">
          <h1>Something went wrong</h1>
        </section>
      );
    }

    if (this.state.isLoading) {
      return (
        <section className="details">
          <h1>Loading</h1>
        </section>
      );
    }

    const { type, name, breed, location, description, medias } = this.state;

    return (
      <section className="details">
        <Carousel medias={medias} />
        <div>
          <h1>{name}</h1>
          <h2>{`${type} - ${breed} - ${location}`}</h2>
          <button className="details-btn">Adopt me</button>
          <p>{description}</p>
        </div>
      </section>
    );
  }
}

Details.propTypes = {
  id: PropTypes.string,
};

export default Details;
