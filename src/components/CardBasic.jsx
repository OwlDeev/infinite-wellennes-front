import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBasic from './ButtonBasic';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardBasic(props) {
  return (
    <Card sx={{ maxWidth: props.withCard }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonBasic tipoBoton={props.tipoBoton} titulo={props.titulo}></ButtonBasic>
      </CardActions>
    </Card>
  );
}