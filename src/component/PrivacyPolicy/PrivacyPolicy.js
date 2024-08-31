import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="global-container"
        style={{
          margin: "auto",
          padding: 20,
          textAlign: "start",
          lineHeight: "1.5",
          paddingBottom: "100px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", lg: "52px" },
            lineHeight: { xs: "35px", lg: "68px" },
            marginTop: { xs: "100px", lg: "150px" },
            textAlign: "center",
            mb: 5,
            fontWeight: 700,
            fontFamily: "Scandla-Bold",
            backgroundImage:
              "linear-gradient(to right, white 0%, #9595b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: "50px 0",
            padding: 0,
          }}
          gutterBottom
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            mb: 1,
            fontWeight: 700,
            fontFamily: "Inter Tight",
          }}
          gutterBottom
        >
          Last Updated: June 25, 2024
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
          paragraph
        >
          Welcome to IoTDefender.io, a service provided by Wolfberry LLC
          ("Wolfberry", "we", "us", "our"). We are committed to protecting the
          privacy and security of our users' information. This Privacy Policy
          outlines our practices concerning the collection, use, and sharing of
          your information through the use of our website.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
            fontWeight: 700,
            fontFamily: "Inter Tight",
          }}
        >
          Information We Collect
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
            marginBlock: 1,
            fontWeight: 700,
            fontFamily: "Inter Tight",
          }}
        >
          Personal Information
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
        >
          When you visit IoTDefender.io, we may collect personal information
          that you voluntarily provide. This may include:
        </Typography>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li
            style={{
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "20px", lg: "24px" },
              fontWeight: 400,
              fontFamily: "Inter Tight",
            }}
          >
            Contact Information: Such as your name, email address, and telephone
            number.
          </li>
          <li
            style={{
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "20px", lg: "24px" },
              fontWeight: 400,
              fontFamily: "Inter Tight",
            }}
          >
            Payment Information: If you make purchases, we collect payment
            details.
          </li>
          <li
            style={{
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "20px", lg: "24px" },
              fontWeight: 400,
              fontFamily: "Inter Tight",
            }}
          >
            Account Information: Registration and profile information associated
            with your account.
          </li>
        </ul>
        <Typography
          sx={{
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
            mb: 1,
            fontWeight: 700,
            fontFamily: "Inter Tight",
          }}
        >
          Technical Information
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
          paragraph
        >
          As you navigate through our website, we may also collect information
          via common information-gathering tools, such as log files, cookies,
          and web beacons. This information may include:
        </Typography>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            fontSize: "15px",
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
        >
          <li>IP Address</li>
          <li>Browser Type</li>
          <li>Operating System</li>
          <li>Referral Pages</li>
          <li>Device Information</li>
          <li>Usage Data</li>
        </ul>

        <Typography
          sx={{
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
            fontWeight: 700,
            fontFamily: "Inter Tight",
          }}
          gutterBottom
        >
          How We Use Your Information
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
          paragraph
        >
          The information we collect is used for various purposes:
        </Typography>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              To Provide Services:
            </span>
            To administer our services, including handling your transactions or
            contacting you regarding your account.
          </li>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              To Improve and Personalize Services:
            </span>{" "}
            To better understand how users access and use our site, both on an
            aggregated and individualized basis, to improve our services and
            respond to user desires and preferences, and for other research and
            analytical purposes.
          </li>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              To Communicate:
            </span>{" "}
            To communicate with you about your account and provide customer
            support.
          </li>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            {" "}
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              For Marketing:
            </span>{" "}
            To send you promotional materials from us or on behalf of our
            affiliates and business partners.
          </li>
        </ul>

        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter Tight",
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
          }}
          gutterBottom
        >
          Sharing Your Information
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
          paragraph
        >
          We do not sell, rent, or lease your personal information to third
          parties. We may share information about you with third parties in
          certain circumstances, including:
        </Typography>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
          }}
        >
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            {" "}
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              With Service Providers:
            </span>{" "}
            We may share your information with vendors, consultants, and other
            service providers who need access to such information to carry out
            work on our behalf.
          </li>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              For Legal Reasons:
            </span>{" "}
            We may share information to comply with laws or to respond to lawful
            requests and legal process.
          </li>
          <li style={{ fontWeight: 400, fontFamily: "Inter Tight" }}>
            <span
              style={{
                fontWeight: "15px",
                fontWeight: 700,
                fontFamily: "Inter Tight",
              }}
            >
              To Protect Rights:
            </span>
            We may share information to enforce our policies, and protect the
            rights, property, or safety of IoTDefender, our employees, our
            users, and others.
          </li>
        </ul>

        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter Tight",
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
          }}
          gutterBottom
        >
          Security
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
        >
          We take reasonable measures to help protect personal information from
          loss, theft, misuse, and unauthorized access, disclosure, alteration,
          and destruction.
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter Tight",
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
          }}
          gutterBottom
        >
          Changes to this Privacy Policy
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
        >
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last Updated" date at the top of this Privacy Policy.
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter Tight",
            fontSize: { xs: "21px", lg: "24px" },
            lineHeight: { xs: "30px", lg: "38px" },
          }}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            fontSize: { xs: "14px", lg: "16px" },
            lineHeight: { xs: "20px", lg: "24px" },
            fontWeight: 400,
            fontFamily: "Inter Tight",
          }}
        >
          If you have any questions about this Privacy Policy, please contact us
          at:
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "Inter Tight" }}
        >
          <strong>Email: </strong>
          <a href="mailto:support@wolfberryllc.com" className="anchers green">
            support@wolfberryllc.com
          </a>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "20px", lg: "24px" },
              fontWeight: "400",
              fontFamily: "Inter Tight",
            }}
          >
            <a href="/#FAQ" className="anchers">
              FAQ
            </a>{" "}
            |{" "}
            <a href="/Privacy-policy" className="anchers">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/Terms-and-conditions" className="anchers">
              Terms and Conditions
            </a>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "20px", lg: "24px" },
              fontWeight: "400",
              fontFamily: "Inter Tight",
            }}
          >
            © 2024 Wolfberry LLC
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default PrivacyPolicy;
