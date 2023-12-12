import React from "react";
import {
  Typography,
  Grid,
  Button,
  TextField,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
type Props = {};

const SectionProduct = () => {
  return (
    <Grid
      className="Product"
      sx={{
        position: "absolute",
        top: "8745px",
        paddingBottom: "20px",
        left: "30px",
      }}
    >
      <Grid container spacing={2}>
        {Array.from(Array(4).keys()).map((i) => (
          <Grid item key={i} xs={6} md={3}>
            <Card
              sx={{
                width: 350,
              }}
            >
              <CardMedia
                sx={{ height: 250 }}
                image={`/Product/${i + 1}.png`}
                title={`Product ${i + 1}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Product {i + 1}
                </Typography>
                <Typography variant="body2">
                  Description of Product {i + 1}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SectionProduct;
