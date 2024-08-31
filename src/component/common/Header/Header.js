import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom"; // Import useLocation for path detection
import IOT_mobile_logo from "../../../assets/svgs/IOT_mobile_logo";
import LinkedInSvg from "../../../assets/svgs/linkedIn";
import TwitterSvg from "../../../assets/svgs/twitter";
import { Wolfberryllc } from "../../../assets/svgs/wolfberryllc";
import MenuSvg from "../../../assets/svgs/menuSvg";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Access the current location

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const isPolicyPage =
    location.pathname === "/Privacy-policy" ||
    location.pathname === "/Terms-and-conditions"; // Check if current path matches

  const menuItems = [
    { text: "How it works", linkTo: "/#HowItWorks" },
    { text: "Features", linkTo: "/#Feature" },
    { text: "Membership", linkTo: "/#Membership" },
    { text: "FAQ", linkTo: "/#FAQ" },
    { text: "Sign In", linkTo: "/sign-up" },
    { text: "Book a demo", linkTo: "/#GetInTouch" },
  ];

  const menuItemsMobile = [
    { text: "How it works", linkTo: "/#Process" },
    { text: "Features", linkTo: "/#Feature" },
    { text: "Membership", linkTo: "/#Membership" },
    { text: "FAQ", linkTo: "/#FAQ" },
    { text: "Sign In", linkTo: "/sign-up" },
  ];

  return (
    <Box className="Header">
      <div className="header-overlay"></div>
      <Box
        className="global-container n-auto"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100% !important",
          height: { xs: "100px", md: "100px" },
        }}
      >
        <a
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flex: 1,
          }}
          href="/"
        >
          <img src="/assets/logo.png" alt="" width="200px" />
        </a>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            flex: 2,
          }}
        >
          {menuItems.slice(0, -1).map((item, index) => (
            <HashLink
              key={index}
              style={{
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "Inter Tight",
                lineHeight: "21.70px",
                color: "#fff", // keep text color
                textDecoration: "none",
                color: "#fff",
              }}
              to={isPolicyPage ? `${item.linkTo}` : item.linkTo}
              // href={item.linkTo}
              // style={{ textDecoration: "none", color: "#fff" }}
              target={item.text === "Sign In" ? "_blank" : ""}
            >
              {item.text}
            </HashLink>
          ))}

          <Button
            variant="contained"
            className="button_primary book-demo-button"
            href={
              isPolicyPage
                ? `${menuItems[menuItems.length - 1].linkTo}`
                : menuItems[menuItems.length - 1].linkTo
            }
          >
            {menuItems[menuItems.length - 1].text}
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              color: "white",
              outline: "none",
              border: "none",
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                border: "none",
              },
            }}
          >
            <MenuSvg />
          </IconButton>
        </Box>

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              height: "100%",
              background: "#0C0919",
              boxSizing: "border-box",
              padding: "16px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              backgroundColor: "#0C0919",
              color: "white",
            }}
          >
            <IOT_mobile_logo style={{ height: "40px" }} />
            <IconButton
              sx={{
                color: "white",
                "& focus": {
                  borderRadius: "none",
                },
              }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
          <List
            sx={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginTop: "20px",
            }}
          >
            {/*  mobile version */}
            {menuItemsMobile.map((item, index) => (
              <HashLink
                key={index}
                to={isPolicyPage ? `${item.linkTo}` : item.linkTo}
                style={{
                  textDecoration: "none", // remove underline
                  color: "white", // keep text color
                  textAlign: "start",
                }}
                target={item.text === "Sign In" ? "_blank" : ""}
              >
                <ListItem
                  key={index}
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white", paddingLeft: "0px !important" }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{ paddingLeft: "0px !important" }}
                  />
                </ListItem>
              </HashLink>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 4,
            }}
            className="mobile-version"
          >
            <HashLink
              to={
                isPolicyPage
                  ? `${menuItems[menuItems.length - 1].linkTo}`
                  : menuItems[menuItems.length - 1].linkTo
              }
              variant="contained"
              className="button_primary book-demo-button"
              style={{ textDecoration: "none" }}
              onClick={toggleDrawer(false)}
            >
              Book a demo
            </HashLink>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Divider
              sx={{
                width: "100%",
                borderColor: "white",
                mt: 4,
                mb: 6,
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: "column",
              alignItems: "start",
              mb: 4,
              color: "white",
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
                  marginLeft: 1,
                  fontWeight: "400",
                  lineHeight: "19.2px",
                  textDecoration: "underline",
                }}
              >
                support@wolfberryllc.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
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
                }}
              >
                iotdefender
              </Typography>
            </Box>
            <Box
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
                }}
              >
                iotdefender
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
