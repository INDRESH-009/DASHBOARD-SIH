import React from "react";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";

const GoalProgress = () => {
  const progress = 70; // Assume the child has completed 70% of the weekly goal

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#f3e5f5", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom sx={{ color: "#8e24aa", fontWeight: "bold" }}>
        Weekly Goal Progress
      </Typography>
      <Box sx={{ width: "100%", mb: 2 }}>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5, backgroundColor: "#f3e5f5", "& .MuiLinearProgress-bar": { backgroundColor: "#8e24aa" } }} />
      </Box>
      <Typography variant="body1" sx={{ color: "#8e24aa" }}>
        {progress}% Completed
      </Typography>
    </Paper>
  );
};

export default GoalProgress;
