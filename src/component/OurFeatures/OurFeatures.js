import React from "react";

import { DotIcon } from "../../assets/svgs/dot_icon";
import { BadgeIcon } from "../../assets/svgs/badge_icon";
import { LockIcon } from "../../assets/svgs/lock_icon";
import { EyeIcon } from "../../assets/svgs/eye_icon";
import { BoxIcon } from "../../assets/svgs/box_icon";
import { DatabaseIcon } from "../../assets/svgs/database_icon";
import { CodeBlockIcon } from "../../assets/svgs/code_block_icon";

import "./OurFeatures.css";
import { RightArrowIcon } from "../../assets/svgs/right_arrow_icon";

export const OurFeatures = () => {
  const GuidList = [
    {
      id: "01",
      icon: <BadgeIcon />,
      title: "Secure Data Handling",
      description:
        "Confidently mint IoT sensor values to blockchain, securing your information while ensuring your data is protected by the highest security standards.",
    },
    {
      id: "02",
      icon: <LockIcon />,
      title: "Data Immutability",
      description:
        "Data stored on our blockchain is part of an immutable record, meaning once entered, it cannot be changed or deleted. This permanence ensures a secure and trustworthy history of transactions.",
    },
    {
      id: "03",
      icon: <EyeIcon />,
      title: "Security and Privacy",
      description:
        "IoT Defender permissioned private blockchain network provides unparalleled security and privacy for user IoT data, ensuring that only authorized participants have access.",
    },
    {
      id: "04",
      icon: <BoxIcon />,
      title: "Flexible Architecture",
      description:
        "Scale with your needs. Our network adapts effortlessly, whether you're connecting a few sensors or managing a vast IoT device network, ensuring seamless performance and scalability.",
    },
    {
      id: "04",
      icon: <DatabaseIcon />,
      title: "Enhanced Data Transparency",
      description:
        "By utilizing blockchain technology, IoT Defender ensures transparent and verifiable data transactions.",
    },
    {
      id: "04",
      icon: <CodeBlockIcon />,
      title: "Seamless Integration",
      description:
        "We provide a suite of JSON APIs designed for developers to interact with our platform effortlessly",
    },
  ];
  return (
    <div className="OurFeatures" id="Feature">
      <div className="global-container">
        <div className="head-content">
          <div className="heading-container">
            <DotIcon />
            <h3 className="heading">Features</h3>
          </div>
          <p>
            IoT Defender enhances your IoT applications with our advanced
            infrastructure powered by Hyperledger Fabric. Enjoy the flexibility
            of private blockchain integration. Benefit from the adaptable,
            privacy-oriented architecture that can enhance centralized
            solutions.
          </p>
        </div>

        <div className="card_container">
          {GuidList?.map((item, index) => {
            return (
              <div className="global-block-wrapper">
                <div className="global-block">
                  <div className="card_inner">
                    <div className="icon">{item?.icon}</div>
                    <div className="title">{item?.title}</div>
                    <div className="description"> {item?.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
