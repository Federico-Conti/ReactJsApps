import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>
                        <WhatsAppIcon />
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'default', fontStyle: 'default', letterSpacing: 0, fontSize: 20 }} display="block" color="#212121">
                           +39 3400580064
                        </Typography>
                    </Item>
                    <Item>
                        <InstagramIcon />
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'default', fontStyle: 'default', letterSpacing: 0, fontSize: 20 }} display="block" color="#212121">
                           federico__conti
                        </Typography>
                    </Item>
                    <Item>
                        <MailOutlineIcon />
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'default', fontStyle: 'default', letterSpacing: 0, fontSize: 20 }} display="block" color="#212121">
                           federicoconti1702@gmail.com
                        </Typography>
                    </Item>
                </Stack>
            </Box>
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
            <Button variant="contained" size="small" color="info" onClick={handleClickOpen}>
                Contact me
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
