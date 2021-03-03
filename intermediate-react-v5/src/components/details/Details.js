import React from "react";
import PropTypes from "prop-types";
import petAPI from "@frontendmasters/pet";

import Carousel from "components/carousel";
import Modal from "components/modal";
import { withErrorBoundary } from "components/error-boundary";
import { ThemeContext } from "hooks/theme";
import { navigate } from "@reach/router";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasApiError: false,
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.adopt = this.adopt.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;

    if (id) {
      const parsedId = +id;

      try {
        const { animal } = await petAPI.animal(parsedId);
        const {
          name,
          photos,
          type,
          description,
          contact,
          breeds,
          url,
        } = animal;

        this.setState({
          isLoading: false,
          hasApiError: false,
          name,
          medias: photos,
          type,
          description,
          location: `${contact.address.city}, ${contact.address.state}`,
          breed: breeds?.primary,
          url,
        });
      } catch {
        this.setState({ isLoading: false, hasApiError: true });
      }
    }
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  adopt() {
    navigate(this.state.url);
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

    const {
      type,
      name,
      breed,
      location,
      description,
      medias,
      isModalOpen,
    } = this.state;

    return (
      <section className="details">
        <Carousel medias={medias} />
        <ThemeContext.Consumer>
          {([theme]) => (
            <>
              <div>
                <h1>{name}</h1>
                <h2>{`${type} - ${breed} - ${location}`}</h2>
                <button
                  style={{ backgroundColor: theme.buttonColor }}
                  className="details-btn"
                  onClick={this.toggleModal}
                >
                  Adopt me
                </button>

                <p>{description}</p>
              </div>
              {isModalOpen ? (
                <Modal>
                  <section>
                    <h1>Would you consider adopting me?</h1>
                    <div className="buttons">
                      <button
                        onClick={this.adopt}
                        style={{ backgroundColor: theme.buttonColor }}
                      >
                        Yes
                      </button>
                      <button
                        style={{ backgroundColor: theme.buttonColor }}
                        onClick={this.toggleModal}
                      >
                        No
                      </button>
                    </div>
                  </section>
                </Modal>
              ) : null}
            </>
          )}
        </ThemeContext.Consumer>
      </section>
    );
  }
}

Details.propTypes = {
  id: PropTypes.string,
};

export default withErrorBoundary(Details);
