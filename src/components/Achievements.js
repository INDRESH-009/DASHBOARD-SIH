import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const achievementsData = [
  { title: "Completed 10 Study Sessions", date: "August 30, 2024" },
  { title: "Perfect Study Streak for 7 Days", date: "September 2, 2024" },
  { title: "Read 100 Books", date: "September 5, 2024" },
  { title: "100% Quiz Accuracy", date: "September 6, 2024" },
];

const Achievements = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#3949ab" }}>
        Achievements & Milestones
      </Typography>
      <Grid container spacing={3}>
        {achievementsData.map((achievement, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={2} sx={{ backgroundColor: "#f3e5f5", borderRadius: "12px" }}>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <EmojiEventsIcon sx={{ color: "#ffb300", fontSize: 40 }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {achievement.date}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements;
