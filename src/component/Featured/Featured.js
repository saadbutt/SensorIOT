import React from "react";
import { DotIcon } from "../../assets/svgs/dot_icon";

import "./Featured.css";

export const Featured = () => {
  return (
    <div className="Featured" id="Features">
      <div className="global-container">
        <div className="global-block-wrapper">
          <div className="feature-block global-block">
            <div className="heading-block d-flex align-items-center gap-2">
              <DotIcon />
              <h6 className="main-heading">Blockchain-Enabled Platform</h6>
            </div>
            <p className="main-text">
              Enhance your <span className="highlight-text">IoT networks</span>{" "}
              with our{" "}
              <span className="highlight-text">
                decentralized cybersecurity solution
              </span>
              , mint sensor values onto a private blockchain, and{" "}
              <span className="highlight-text">secure your transactions</span>,
              ensuring IoT data is{" "}
              <span className="highlight-text">
                safely recorded and managed
              </span>{" "}
              within a permissioned network.
            </p>
            <p className="bottom-text">
              Experience seamless communication and scalability with our{" "}
              <br className="d-sm-none d-md-block d-none" />
              state-of-the-art cross-compatible platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
