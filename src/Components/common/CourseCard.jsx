import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CourseCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ maxWidth: 350, mx: "auto", my:1, mx:1 }}>
      <Card variant="outlined">
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="course">
                B
              </Avatar>
            }
            title="Badrinath SVN"
            subheader="September 14, 2016"
          />
          <CardContent>
            <div style={{ display: "flex",justifyContent:"flex-start" }}>
              <div>
                <Typography variant="h5" component="div">
                  C{bull}Programming
                </Typography>
                <Typography sx={{ mb: 4.5 }} color="text.secondary">
                  C01&nbsp;{bull}&nbsp;2 months
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: 14, mx: 2, mt: 0.5 }}
                  color="green"
                  gutterBottom
                >
                  Beginner
                </Typography>
              </div>
            </div>
            <Typography variant="body2" sx={{ mb: 1.5 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBlock: "solid 1px"
                }}
              >
                <div>
                  <h4>Prerequisites</h4>
                  <ul>
                    <li>C Basic</li>
                  </ul>
                </div>
                <div>
                  <h4>Qualification</h4>
                  <ul>
                    <li>B.Tech</li>
                  </ul>
                </div>
              </div>
            </Typography>
            <Typography>
              <h4>Expected Outcome</h4>
              <ul>
                <li>Comfortable with C syntax</li>
                <li>Threading</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button size="small">Learn More</Button>
            <span>
              <label htmlFor="show-more-icon">Topics</label>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                name="show-more-icon"
                id="show-more-icon"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </span>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </div>
      </Card>
    </Box>
  );
}
