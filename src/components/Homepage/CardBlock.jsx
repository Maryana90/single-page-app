import * as React from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const CardBlock = (props) => {
  const { image, date, title, textArticle } = props;
  return (
    <Card sx={{ maxWidth: 400, minHeight: 540, mt: 5 }}>
      <CardMedia component="img" height="217" image={image} alt="img" />
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          verticalAlign="middle"
          sx={{ pb: 2 }}
        >
          <CalendarTodayIcon fontSize="small" sx={{ pr: 1 }} />
          {date}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          minHeight="58px"
          sx={{ pb: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textArticle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{ textTransform: "none" }}>
          <NavLink
            to="/article"
            style={{
              textDecoration: "none",
              color: "#363636",
              fontWeight: "bold",
            }}
          >
            Read more &rarr;
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBlock;