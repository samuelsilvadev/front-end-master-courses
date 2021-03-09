import React from "react";
import type { Photo } from "@frontendmasters/pet";

const DEFAULT_IMG_PLACEHOLDER = "http://placecorgi.com/600/600";

type Props = {
  medias?: Photo[];
};

type State = {
  medias: string[];
  active: number;
};

class Carousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      medias: [],
      active: 0,
    };

    this.handleSetActiveMedia = this.handleSetActiveMedia.bind(this);
  }

  static getDerivedStateFromProps(props: Props): Partial<State> {
    const { medias } = props;

    const largeMedias = medias?.map((media) => media.large) ?? [
      DEFAULT_IMG_PLACEHOLDER,
    ];

    return {
      medias: largeMedias,
    };
  }

  handleSetActiveMedia(event: React.MouseEvent<HTMLButtonElement>): void {
    this.setState({
      active: +(event.currentTarget.dataset?.index ?? 0),
    });
  }

  render(): React.ReactNode {
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

export default Carousel;
