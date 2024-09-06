import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import ConsistencyChart from "./ConsistencyChart";
import ActivityBreakdown from "./ActivityBreakdown";
import ProgressOverview from "./ProgressOverview";
import Achievements from "./Achievements";
import ProfileSummary from "./ProfileSummary";
import LearningStreak from "./LearningStreak";
import MotivationalQuote from "./MotivationalQuote";
import RecentActivities from "./RecentActivities";
import GoalProgress from "./GoalProgress";
import StudyCalendar from "./StudyCalendar";

const Dashboard = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: "#1e88e5", textAlign: "center" }}>
          Parent Dashboard
        </Typography>
        <Grid container spacing={4}>
          {/* Profile Summary */}
          <Grid item xs={12} sm={6} md={3}>
            <ProfileSummary />
          </Grid>

          {/* Learning Streak */}
          <Grid item xs={12} sm={6} md={3}>
            <LearningStreak />
          </Grid>

          {/* Motivational Quote */}
          <Grid item xs={12} sm={12} md={6}>
            <MotivationalQuote />
          </Grid>

          {/* Daily Consistency Tracker */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#fff8e1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#f9a825", fontWeight: "bold" }}>
                Study Consistency
              </Typography>
              <ConsistencyChart />
            </Paper>
          </Grid>

          {/* Weekly Activity Breakdown */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", backgroundColor: "#e0f2f1" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#00695c", fontWeight: "bold" }}>
                Activity Breakdown
              </Typography>
              <ActivityBreakdown />
            </Paper>
          </Grid>

          {/* Progress Overview */}
          <Grid item xs={12} md={6}>
            <GoalProgress />
          </Grid>

          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <RecentActivities />
          </Grid>

          {/* Study Calendar */}
          <Grid item xs={12}>
            <StudyCalendar />
          </Grid>

          {/* Achievements */}
          <Grid item xs={12}>
            <Achievements />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
