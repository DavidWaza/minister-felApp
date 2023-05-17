"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function UserCommentCard({ alt, src, name, comments }) {
  return (
   <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <div className="flex justify-center align-middle cardMarginAdj-avatar">
        <CardHeader
          avatar={<Avatar alt={alt} src={src} sx={{ width: 56, height: 56 }} />}
        />
      </div>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-center cardTypography primary_font px-[15px] cardMarginAdj"
        >
          {comments.trim().substring(0, 76) + "..."}
        </Typography>
        <hr className="w-1/2 my-[10px] mx-[auto]" />
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          className="flex justify-center text-mute font-extrabold primary_font cardTypho-name cardMarginAdj-name capitalize px-4"
        >
          {name}
        </Typography>
        <CardActions className="flex justify-center">
          <Button
            size="small"
            className="primary_font text-center seeMore_button_text cardMarginAdj"
            href="/tribute"
          >
            See More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
 
  );
}
