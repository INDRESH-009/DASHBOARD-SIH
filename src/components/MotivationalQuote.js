import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const quotes = [
  "Believe you can and you're halfway there.",
  "The expert in anything was once a beginner.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "It’s not about being the best, it’s about being better than you were yesterday."
];

const MotivationalQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Rotate quote every 5 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#e0f7fa", textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <FormatQuoteIcon sx={{ fontSize: 40, color: "#00838f" }} />
      </Box>
      <Typography variant="body1" sx={{ fontStyle: "italic", color: "#006064" }}>
        {quotes[quoteIndex]}
      </Typography>
    </Paper>
  );
};

export default MotivationalQuote;
