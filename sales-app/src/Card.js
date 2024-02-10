import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, colors } from '@mui/material';
import './style/Card.css';
import Stack from '@mui/material/Stack';
import GalleryDialog from './GalleryDialog';
import ContactDialog from './ContactDialog';

import Link from '@mui/material/Link';

export default function MultiActionAreaCard() {
  return (
    <div className="card__container">
      <Card sx={{ maxWidth: 500 }} >
          <Typography  variant="h2" component="div" textAlign={'center'} color="#dd2c00" sx={{ fontWeight: 'bold', fontFamily: 'default', fontStyle: 'italic', letterSpacing: 0, margin:2}}>
             Sell ! ! ! 
            </Typography>
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
              <Link href="https://www.dell.com/it-it/shop/monitor-dell-ultrasharp-4k-hub-usb-c-27-u2723qe/apd/210-bcxk/monitor-e-accessori" underline="always">
                {/* {'underline="none"'} */}
              Monitor Dell UltraSharp 4K hub USB-C 27 {"\n"} U2723QE
              </Link>
            </Typography>
            <Typography variant="body1" color="#212121" sx={{  fontSize: 20 }}>
              Ciao, sto mettendo in vendita un monitor a causa di un incidente che ha colpito il pannello. <br />
              Il pannello non presenta crepe visibili ma alcuni cristalli liquidi si sono riversati in piccole aree dello schermo.
              <br /><br />
              Hi, I am offering a monitor for sale due to an accident that affected the panel.<br />
              The panel has no visible cracks but some liquid crystals have spilled into small areas of the screen.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <div className="card__options">
            <Stack spacing={13} direction="row">
              <Button variant="contained" size="small" color="inherit" >
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Monospace', fontStyle: 'italic', letterSpacing: 0, fontSize: 20 }} display="block" color="#212121">
                  200 €
                </Typography>
              </Button>
              <GalleryDialog></GalleryDialog>
              <ContactDialog></ContactDialog>
              {/* <Button variant="contained" size="small" color="info" >Contact me </Button> */}
            </Stack>
          </div>
        </CardActions>
      </Card>

    </div>
  );
}
