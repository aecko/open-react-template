import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BlackOverlay } from "./style";

const fadeImages = [
  {
    url: "https://mtntownmagazine.com/wp-content/uploads/2018/03/REAL-ESTATE-architect-house-plans-rebucolor-for-architectural-designs-drawings-architecture-design-jobs-awards-the-part-of-and.jpg",
  },
  {
    url: "https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/104094225_3460992347285465_8410781168281286538_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=755d08&_nc_ohc=XGcxl4TSenUAX9yM8pf&_nc_ht=scontent-man2-1.xx&oh=00_AfCavDVLBA59i5NrZU3ffuLgyfeZIuvgTwjn05WhZf0nig&oe=65A7C76B",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Central_Foundation_Boys%27_School_2.jpg/1024px-Central_Foundation_Boys%27_School_2.jpg",
  },
  {
    url: "https://pagabo.co.uk/storage/uploads/lambeth-2.jpg",
  },
  {
    url: "https://www.bathecho.co.uk/uploads/2022/02/pixash-recycling-site-banes-plans.jpg",
  },
];

export const FadingImageCarousel = () => {
  return (
    <div
      className="slide-container"
      style={{
        zIndex: -10,
      }}
    >
      <Fade arrows={false} duration={3000}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100vw", height: "100vh" }}
              src={fadeImage.url}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};
