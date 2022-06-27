import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const WorkItem = ({ image, url, description }) => {
  return (
    <Card elevation={24}>
      <CardMedia component={"img"} image={image} height={200} />
      <CardContent sx={{width: '70%', marginLeft: '20px'}}>
        <Typography sx={{ fontSize: "17px" }} variant="subtitle2">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: '20px', padding: "16px"}}>
        <Link underline="none" href={url} variant="body2" target="_blank" >
          <b>{'VIEW >'}</b>
        </Link>
      </CardActions>
    </Card>
  );
};

export default WorkItem;
