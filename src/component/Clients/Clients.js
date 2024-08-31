import React, { useEffect } from "react";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import amazone from "../../assets/client_logos/amazone.png";
import frame from "../../assets/client_logos/frame.png";
import google_cloud from "../../assets/client_logos/google-cloud.png";
import hyperledger from "../../assets/client_logos/hyperledger.png";
import microsoft_azure from "../../assets/client_logos/microsoft-azure.png";
import s_software from "../../assets/client_logos/s-software.png";

import "./Clients.css";

export const Clients = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <div className="Clients">
      <div className="global-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={hyperledger} alt="Hyperledger" />
            </div>
            <div className="swiper-slide">
              <img src={s_software} alt="S Software" />
            </div>
            <div className="swiper-slide">
              <img src={amazone} alt="Amazone" />
            </div>
            <div className="swiper-slide">
              <img src={microsoft_azure} alt="Microsoft Azure" />
            </div>
            <div className="swiper-slide">
              <img src={google_cloud} alt="Google Cloud" />
            </div>
            <div className="swiper-slide">
              <img src={frame} alt="Frame" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};
