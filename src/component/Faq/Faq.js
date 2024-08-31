import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { DotIcon } from "../../assets/svgs/dot_icon";
import "./Faq.css";

export const Faq = () => {
  const faqData = [
    {
      question: "What is IoT Defender?",
      answer:
        "IoT Defender is a comprehensive cybersecurity platform designed to protect Internet of Things (IoT) devices from a wide range of threats. It offers solutions for monitoring, detecting, and mitigating security risks to ensure your connected devices and the data they collect remain secure.",
    },
    {
      question: "Why do I need IoT Defender for my IoT devices?",
      answer:
        "IoT devices are often targeted by cyberattacks due to their typically weaker security measures. IoT Defender helps protect these devices from vulnerabilities, ensuring they operate securely and reliably within your network.",
    },
    {
      question: "How does IoT Defender protect my devices?",
      answer:
        "IoT Defender employs cutting-edge technologies to safeguard your IoT devices. It integrates a distributed ledger for secure data transactions, artificial intelligence (AI) for intelligent threat detection, and stores critical data as NFTs (Non-Fungible Tokens) to ensure its integrity and authenticity.",
    },
    {
      question: "What types of IoT devices does IoT Defender support?",
      answer:
        "IoT Defender supports a wide range of IoT devices, including smart home gadgets, industrial IoT equipment, healthcare devices, and more. It’s designed to be flexible and scalable to meet the needs of various IoT environments.",
    },
    {
      question: "Is IoT Defender difficult to set up?",
      answer:
        "No, IoT Defender is user-friendly and comes with straightforward installation guides. It offers quick setup options to get your IoT devices protected with minimal hassle.",
    },
    {
      question: "Does IoT Defender provide real-time monitoring?",
      answer:
        "Yes, IoT Defender offers real-time monitoring, giving you up-to-date insights into the security status of your IoT devices and allowing you to respond to threats immediately.",
    },
    {
      question: "How does IoT Defender handle updates and patches?",
      answer:
        "IoT Defender automatically updates itself to the latest security definitions and patches, ensuring your devices are always protected against the newest threats.",
    },
    {
      question: "Can I manage multiple IoT devices with IoT Defender?",
      answer:
        "Absolutely. IoT Defender provides a centralized dashboard where you can monitor and manage multiple IoT devices, making it easy to keep track of the security status across your entire network.",
    },
    {
      question: "Is IoT Defender suitable for both personal and business use?",
      answer:
        "Yes, IoT Defender is designed to be versatile, catering to both personal IoT devices and large-scale business deployments.",
    },
    {
      question: "What support does IoT Defender offer?",
      answer:
        "IoT Defender provides comprehensive support, including a detailed knowledge base, customer service, and technical assistance to help you with any issues or questions you might have.",
    },
  ];

  const [allExpanded, setAllExpanded] = useState(false);
  const [expandedPanels, setExpandedPanels] = useState([0]);
  const [showAll, setShowAll] = useState(false);

  const handleExpandAll = () => {
    setAllExpanded((prev) => !prev);
    setExpandedPanels(allExpanded ? [] : faqData.map((_, index) => index));
    setShowAll((prev) => !prev);
  };

  const handleToggle = (index) => {
    setExpandedPanels((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const displayedFaqs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <Box
      className={"global-container"}
      sx={{
        padding: "20px",
        margin: "auto",
        overflow: "hidden",
      }}
      id="FAQ"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <DotIcon />

        <Typography
          className="main-heading"
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            marginLeft: 1,
            fontWeight: "700",
          }}
        >
          FAQ
        </Typography>
      </Box>

      <Box>
        {displayedFaqs.map((item, index) => (
          <Box
            className="global-block-wrapper"
            sx={{
              background: "transparent",
              mb: 2,
            }}
            key={index}
          >
            <Accordion
              sx={{
                background: "transparent",
                p: 1,
              }}
              expanded={expandedPanels.includes(index)}
              className="global-block"
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    height="30px"
                    width="30px"
                    sx={{ color: "white", fontSize: "30px" }}
                  />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                onClick={() => handleToggle(index)}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "16px", md: "18px" },
                    textAlign: "start",
                    fontFamily: "Scandla-Bold",
                    fontWeight: 700,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "16px", md: "16px" },
                    textAlign: "start",
                    fontFamily: "Inter Tight",
                    fontWeight: 400,
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
        <Button
          sx={{
            marginBlock: 6,
            backgroundColor: "#9595B2",
            "&:hover": {
              backgroundColor: "#9595B2",
              color: "#ffffff",
            },
            "&:focus": {
              outline: "none",
            },
            color: "#ffffff",
            borderRadius: "100px",
            fontSize: "16px",
            lineHeight: "21.78px",
            fontWeight: "700",
            padding: "6px 24px",
            fontFamily: "Inter Tight",
            fontWeight: 400,
            fontSize: { xs: "15px", md: "15px" },
            padding: "8px 24px",
            textTransform: "none",
          }}
          onClick={handleExpandAll}
        >
          {showAll ? "Close all" : "View all"}
        </Button>
      </Box>
    </Box>
  );
};
