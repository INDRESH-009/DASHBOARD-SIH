import React from "react";
import { Paper, Typography, Avatar, Box } from "@mui/material";

const ProfileSummary = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", textAlign: "center", backgroundColor: "#e3f2fd" }}>
      <Avatar
        alt="John Doe"
        src="https://i.pravatar.cc/300"
        sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
        John Doe
      </Typography>
      <Typography variant="body2" sx={{ color: "#555" }}>
        Grade: 5
      </Typography>
      <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
        Consistency: 80%
      </Typography>
      <Box sx={{ backgroundColor: "#1976d2", color: "#fff", borderRadius: "8px", p: 1 }}>
        <Typography variant="body2">Parent: Jane Doe</Typography>
      </Box>
    </Paper>
  );
};

export default ProfileSummary;
