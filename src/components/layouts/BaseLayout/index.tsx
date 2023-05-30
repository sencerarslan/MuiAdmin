import { ReactNode } from "react";
import { BaseLayoutStyled } from "./index.styles";
import Header from "../../Header";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import { AddToHomeScreen } from "@mui/icons-material";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <BaseLayoutStyled>
      <div className="page">
        <Grid container className="content">
          <Grid item xs="auto">
            <div className="side-bar">
              <List
                sx={{
                  p: 1,
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}>
                {[0, 1, 2].map((sectionId) => (
                  <li key={`section-${sectionId}`}>
                    <ul>
                      <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                      {[0, 1, 2].map((item) => (
                        <ListItem
                          disablePadding
                          key={`item-${sectionId}-${item}`}>
                          <ListItemButton>
                            <ListItemIcon style={{ minWidth: 36 }}>
                              <AddToHomeScreen color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              sx={{ ml: 0 }}
                              primary={`Item ${item}`}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))}
              </List>
            </div>
          </Grid>
          <Grid
            item
            xs
            sx={{
              overflow: "auto",
            }}>
            <div className="right-content">{children}</div>
          </Grid>
        </Grid>
      </div>
    </BaseLayoutStyled>
  );
};

export default BaseLayout;
