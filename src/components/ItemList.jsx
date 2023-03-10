import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@mui/icons-material";
import { actionTypes } from "../reducer";
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

export default function ItemList({
  title,
  price,
  image,
  description,
  category,
  rating,
  id,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const [{cart}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      item: {
        id,
        title,
        category,
        image,
        price,
        description,
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            ${price}
          </Typography>
        }
        title={category}
        subheader="stock"
      />
      <CardMedia component="img" height="194" image={image} alt={category} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick= {addToBasket}>
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          {Array(4)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </IconButton>
      </CardActions>
    </Card>
  );
}
