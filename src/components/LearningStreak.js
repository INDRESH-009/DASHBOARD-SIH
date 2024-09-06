import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const LearningStreak = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#ffe0b2", textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
        <EmojiEventsIcon sx={{ fontSize: 50, color: "#ff6f00" }} />
      </Box>
      <Typography variant="h5" sx={{ color: "#ff6f00", fontWeight: "bold" }}>
        Learning Streak
      </Typography>
      <Typography variant="h6" sx={{ color: "#424242" }}>
        10 Days Consecutive
      </Typography>
    </Paper>
  );
};

export default LearningStreak;
