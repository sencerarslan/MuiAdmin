import { Grid, Paper, Skeleton, Stack } from "@mui/material";
import { HomePageStyled } from "./index.styles";

export interface HomePageProps {}

const HomePage = () => {
  return (
    <HomePageStyled>
      <>
        <Grid container spacing={3}>
          <Grid item sm>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  width={210}
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  width={210}
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </Paper>
          </Grid>
          <Grid item sm={8}>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  width={210}
                  sx={{ fontSize: "1rem" }}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </>
    </HomePageStyled>
  );
};
export default HomePage;
