import React from "react";
import PropTypes from "prop-types";

const DEFAULT_IMG_PLACEHOLDER = "http://placecorgi.com/600/600";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medias: [],
      active: 0,
    };

    this.handleSetActiveMedia = this.handleSetActiveMedia.bind(this);
  }

  static getDerivedStateFromProps(props) {
    const { medias } = props;

    const largeMedias = medias?.map((media) => media.large) ?? [
      DEFAULT_IMG_PLACEHOLDER,
    ];

    return {
      medias: largeMedias,
    };
  }

  handleSetActiveMedia(event) {
    this.setState({
      active: +event.currentTarget.dataset.index,
    });
  }

  render() {
    const { medias, active } = this.state;

    return (
      <div className="carousel">
        <img src={medias[active]} alt="animal to adoption" />
        <ul className="carousel-smaller">
          {medias.map((media, index) => {
            const isSelected = index === active;

            return (
              <li key={media}>
                <button
                  className="thumbnail-button"
                  aria-label={
                    isSelected ? "selected image" : `select image ${index + 1}`
                  }
                  onClick={this.handleSetActiveMedia}
                  data-index={index}
                >
                  <img
                    className={isSelected ? "active" : ""}
                    src={media}
                    alt="animal to adoption thumbnail"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  medias: PropTypes.array,
};

export default Carousel;
