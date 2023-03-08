import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CartWidget from "./CartWidget";
import { useStateValue } from "../StateProvider";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Checkout({ title, price, image, category }) {
  const [expanded, setExpanded] = React.useState(false);
  const [{ cart }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            ${price}
          </Typography>
        }
        title={title}
        subheader="stock"
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardActions disableSpacing>
          {Array(4)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
}
