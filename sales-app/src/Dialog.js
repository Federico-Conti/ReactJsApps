import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from './img/1.JPG';
import img2 from './img/2.JPG';
import img3 from './img/3.JPG';
import img4 from './img/4.JPG';
import img5 from './img/5.PNG';
import img6 from './img/6.PNG';


const itemData = [
    {
      img: img1,
      title: '1',
    },
    {
      img: img2,
      title: '2',
    },
    {
      img: img3,
      title: '3',
    },
    {
      img: img4,
      title: '4',
    },
    {
      img: img5,
      title: '5',
    },
    {
      img: img6,
      title: '6',
    }

  ];


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <DialogTitle>Set backup </DialogTitle> */}
      <ImageList sx={{ width: 980, height: 500 }} cols={3} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src= {`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="contained" size="small" color='info' onClick={handleClickOpen}>
        View Gallery
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
