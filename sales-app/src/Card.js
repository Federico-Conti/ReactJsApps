import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './style/Card.css';
import Stack from '@mui/material/Stack';
import Dialog from './Dialog';

export default function MultiActionAreaCard() {
  return (
    <div className="card__container">
      <Card sx={{ maxWidth: 500 }} >
        <CardActionArea>
          <div className='card__media'>
            <CardMedia
              component="img"
              image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=872&qlt=100,1&resMode=sharp2&size=872,804&chrss=full"
              alt="dell ultrsharp"
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
              Monitor Dell UltraSharp 4K hub USB-C 27 {"\n"} U2723QE
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <div className="card__options">
            <Stack spacing={13} direction="row">

              <Typography variant="button" display="block" gutterBottom>
                13.000
              </Typography>
              <Dialog></Dialog>
              <Button variant="contained"  size="small" color="info" >Contact me </Button>
            </Stack>
          </div>
        </CardActions>
      </Card>
      
    </div>
  );
}
