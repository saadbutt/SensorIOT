import React, { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { DotIcon } from "../../assets/svgs/dot_icon";
import { Wolfberryllc } from "../../assets/svgs/wolfberryllc";
import TwitterSvg from "../../assets/svgs/twitter";
import LinkedInSvg from "../../assets/svgs/linkedIn";
import "./GetInTouch.css";
import Discord from "../../assets/svgs/discord";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetInTouch = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const response = await axios.post("https://backend.iotdefender.io/send-email", formValues);

      toast.success(response?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    
    <Box sx={{ background: "#0c0919" }} id={"GetInTouch"}>
      <ToastContainer />

      <Box className="global-container" sx={{ paddingBlock: "80px" }}>
        <Grid container spacing={4} justifyContent="start" textAlign={"start"}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                mb: 4,
              }}
            >
              <DotIcon />
              <Typography
                className="main-heading"
                sx={{
                  fontSize: "40px",
                  marginLeft: 1,
                  fontWeight: "700",
                  fontFamily: "Scandla-Bold",
                  background:
                    "linear-gradient(to right, white 0%, #9595b2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Get in touch
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                mb: 4,
                fontWeight: "400",
                lineHeight: "20px",
                fontFamily: "Inter Tight",
              }}
            >
              Our team specializes in custom development services and private
              off-chain solutions, including AI integration and automation, both
              on and away from the cloud. We're ready to support your needs
              contact us to get started!
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                // alignItems: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  cursor: "pointer",
                  // textDecoration: "none",
                }}
              >
                <Wolfberryllc />
                <a
                  href="mailto:support@wolfberryllc.com"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    className="main-heading"
                    sx={{
                      fontSize: "16px",
                      marginLeft: 1,
                      fontWeight: "400",
                      lineHeight: "19.2px",
                      textDecoration: "underline",
                      color: "#fff !important",
                    }}
                  >
                    support@wolfberryllc.com
                  </Typography>
                </a>
              </Box>
              <Box
                component="a"
                href="https://x.com/wolfberryllc"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  textDecoration: "none",
                }}
              >
                <TwitterSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
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
                  mb: 4,
                }}
              >
                <LinkedInSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
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
                  mb: 4,
                }}
              >
                <Discord />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 1,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                    color: "white",
                  }}
                >
                  wolfberryllc
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="global-block-wrapper_top">
              <Box
                sx={{
                  background: "#0A162F !important",
                  p: 3,
                  color: "white",
                  borderRadius: "20px",
                  maxWidth: "882px",
                  maxHeight: "493px",
                }}
                className="global-block_top form"
              >
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginBlock: 3,
                    }}
                  >
                    <TextField
                      InputLabelProps={{ style: { color: "#82868F" } }}
                      InputProps={{
                        disableUnderline: true,
                        color: "white",
                        style: {
                          color: "white",
                          background: "#040D1F",
                          borderRadius: "10px",
                        },
                      }}
                      variant="filled"
                      name="name"
                      label="Name"
                      fullWidth
                      value={formValues.name}
                      onChange={handleChange}
                      sx={{ mr: 2, fontFamily: "Inter Tight" }}
                    />
                    <TextField
                      InputLabelProps={{ style: { color: "#82868F" } }}
                      InputProps={{
                        disableUnderline: true,
                        color: "white",
                        style: {
                          color: "white",
                          background: "#040D1F",
                          borderRadius: "10px",
                        },
                      }}
                      variant="filled"
                      name="email"
                      label="Email"
                      fullWidth
                      value={formValues.email}
                      onChange={handleChange}
                      sx={{ fontFamily: "Inter Tight" }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <TextField
                      borderRadius={"50px"}
                      InputLabelProps={{ style: { color: "#82868F" } }}
                      InputProps={{
                        disableUnderline: true,
                        color: "white",
                        style: {
                          color: "white",
                          background: "#040D1F",
                          borderRadius: "10px",
                          width: "775px !important",
                        },
                      }}
                      name="phone"
                      label="phone"
                      variant="filled"
                      fullWidth
                      value={formValues.phone}
                      onChange={handleChange}
                      sx={{
                        mr: 2,
                        width: "775px !important",
                        marginRight: "0px !important",
                        fontFamily: "Inter Tight",
                      }}
                    />
                  </Box>
                  <Box sx={{ marginBlock: 3, borderRadius: "10px" }}>
                    <TextField
                      InputLabelProps={{ style: { color: "#82868F" } }}
                      InputProps={{
                        disableUnderline: true,
                        color: "white",
                        style: {
                          color: "white",
                          background: "#040D1F",
                          borderRadius: "10px",
                        },
                      }}
                      name="description"
                      label="Tell us a little about what you’re looking for..."
                      variant="filled"
                      fullWidth
                      multiline
                      rows={5}
                      value={formValues.description}
                      onChange={handleChange}
                      sx={{ fontFamily: "Inter Tight" }}
                    />
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
                    <Button
                      type="submit"
                      sx={{
                        fontSize: { xs: "15px", md: "15px" },
                        fontWeight: "700",
                        lineHeight: "21.78px",
                        fontFamily: "Inter Tight",
                        color: "black",
                        background: "#C9E265",
                        borderRadius: "100px",
                        "&:hover": {
                          backgroundColor: "#C9E265",
                          color: "black",
                        },
                        "&:focus": {
                          outline: "none",
                        },
                        padding: "8px 24px",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Send message
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Wolfberryllc />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                  }}
                >
                  support@wolfberryllc.com
                </Typography>
              </Box>
              <Box
                component="a"
                href="https://x.com/wolfberryllc"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  textDecoration: "underline",
                }}
              >
                <TwitterSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
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
                  mb: 4,
                }}
              >
                <LinkedInSvg />
                <Typography
                  className="main-heading"
                  sx={{
                    fontSize: "16px",
                    marginLeft: 2,
                    fontWeight: "400",
                    lineHeight: "19.2px",
                    textDecoration: "underline",
                    color: "white",
                  }}
                >
                  wolfberryllc
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
