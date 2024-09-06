import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const activities = [
  "Completed Math Lesson 5",
  "Finished Science Quiz",
  "Studied Reading Chapter 3",
  "Started Art Lesson"
];

const RecentActivities = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#f1f8e9" }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#43a047", fontWeight: "bold" }}>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivities;
