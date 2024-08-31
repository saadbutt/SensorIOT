import React from "react";

import LinkedInSvg from "../../../assets/svgs/linkedIn";
import Discord from "../../../assets/svgs/discord";
import { Box, Divider, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #e8e8e8",
      }}
    >
      <Box
        className="global-container"
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: "start" }}>
              <img src="/assets/logo.png" alt="" width="200px" />
              <Typography
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "20px", lg: "24px" },
                  fontWeight: "400",
                  fontFamily: "Inter Tight",
                  mt: 6,
                }}
              >
                Empower your IoT solutions with decentralized blockchain
                security. Transparent, Immutable, and Scalable.
              </Typography>

              <a
                href="mailto:support@wolfberryllc.com"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", lg: "16px" },
                    lineHeight: { xs: "10px", lg: "24px" },
                    fontWeight: "400",
                    fontFamily: "Inter Tight",
                    mt: 8,
                    textDecoration: "underline",
                    color: "#fff !important",
                  }}
                >
                  support@wolfberryllc.com
                </Typography>
              </a>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              maxHeight: "531px",
              textAlign: "start",
              marginTop: { xs: "70px", md: "0px" },
              marginLeft: { md: "80px" },
            }}
          >
            <Box className="quick-links">
              <Typography
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "10px", lg: "24px" },
                  fontWeight: "500",
                  fontFamily: "Scandla-Bold",
                  marginBottom: 3,
                }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: 2,
                  maxHeight: "100%",
                  overflow: "hidden",
                }}
              >
                {[
                  { name: "Home", href: "/#data-security" },
                  { name: "Features", href: "/#Feature" },
                  { name: "How it works", href: "/#HowItWorks" },
                  { name: "Membership", href: "/#Membership" },
                  { name: "FAQ", href: "/#FAQ" },
                  { name: "Book a demo", href: "/#GetInTouch" },
                ].map((link, index) => (
                  <a href={link.href} style={{ textDecoration: "none" }}>
                    <Typography
                      key={index}
                      sx={{
                        fontSize: { xs: "14px", lg: "16px" },
                        lineHeight: { xs: "10px", lg: "24px" },
                        fontWeight: "400",
                        fontFamily: "Inter Tight",
                        mb: 3,
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      {link?.name}
                    </Typography>
                  </a>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              marginTop: { xs: "70px", md: "0px" },
            }}
          >
            <Box
              className="follow-us"
              sx={{ textAlign: "start", marginLeft: { md: "30px", xs: "0px" } }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: "10px", lg: "24px" },
                  fontWeight: "500",
                  fontFamily: "Scandla-Bold",
                  marginBottom: 3,
                }}
              >
                Follow Us
              </Typography>
              <Box
                component="a"
                href="https://x.com/wolfberryllc"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                  textDecoration: "none",
                  gap: "5px",
                }}
              >
                <img src="/assets/footer-logo.png" alt="" />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", lg: "16px" },
                    lineHeight: { xs: "10px", lg: "24px" },
                    fontWeight: "400",
                    fontFamily: "Inter Tight",
                    marginLeft: 1,
                    textDecoration: "underline",
                    color: "white",
                  }}
                >
                  wolfberryllc
                </Typography>
              </Box>
              <Box
                component="a"
                href="https://www.linkedin.com/company/wolfberryllc/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                  gap: "5px",
                }}
              >
                {/* <img src="/assets/footer-logo.png" alt="" /> */}

                <LinkedInSvg />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", lg: "16px" },
                    lineHeight: { xs: "10px", lg: "24px" },
                    fontWeight: "400",
                    fontFamily: "Inter Tight",
                    marginLeft: 1,
                    textDecoration: "underline",
                    color: "white",
                  }}
                >
                  wolfberryllc
                </Typography>
              </Box>
              <Box
                component="a"
                href="https://discord.gg/eFn4Jdvq5f"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                  gap: "5px",
                }}
              >
                {/* <img src="/assets/footer-logo.png" alt="" /> */}

                <Discord />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", lg: "16px" },
                    lineHeight: { xs: "10px", lg: "24px" },
                    fontWeight: "400",
                    fontFamily: "Inter Tight",
                    marginLeft: 1,
                    textDecoration: "underline",
                    color: "white",
                  }}
                >
                  wolfberryllc
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Divider sx={{ width: "100%", borderColor: "white", mt: 4, mb: 6 }} />
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              cursor: "pointer",
              fontSize: { xs: "14px", lg: "16px" },
              lineHeight: { xs: "10px", lg: "24px" },
              fontWeight: "400",
              fontFamily: "Inter Tight",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "15px" },
                lineHeight: { xs: "10px", lg: "24px" },
                fontWeight: "400",
                lineHeight: "19.2px",
                fontWeight: "400",
                fontFamily: "Inter Tight",
              }}
            >
              © 2024 IoT Defender
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "15px" },
                lineHeight: { xs: "10px", lg: "24px" },
                fontWeight: "400",
                fontFamily: "Inter Tight",
                mt: { md: 0, xs: 4 },
              }}
            >
              <a
                href="/Privacy-policy"
                style={{ color: "#fff" }}
              >
                Privacy Policy
              </a>{" "}
              -{" "}
              <a
                href="/Terms-and-conditions"
                style={{ color: "#fff" }}
              >
                Terms & Conditions
              </a>
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
