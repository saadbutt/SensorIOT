// src/components/SplashScreen/SplashScreen.js
import React from "react";
import "./SplashScreen.css"; // Add CSS for your splash screen styling
import SlashScreenSvg from "../../assets/svgs/SlashScreenSvg";
import { Box } from "@mui/material";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <Box className="logos">
        <SlashScreenSvg />
      </Box>
    </div>
  );
};

export default SplashScreen;
