import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from './Modal';
import { ListIcon } from "@fluentui/react-icons";

export default function OptBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <ListIcon style={{ color: "white", marginTop: "15px", fontSize: "28px" , cursor: "pointer"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Report a bug</MenuItem>
        <MenuItem onClick={handleClickOpen('paper')}>About this App</MenuItem>
        <Dialog
       handleClose={handleClose}
        scroll={scroll}
        open={open}
        descriptionElementRef={descriptionElementRef}
        />
        <MenuItem onClick={handleClickOpen('paper')}>Legal</MenuItem>
        <Dialog
       handleClose={handleClose}
        scroll={scroll}
        open={open}
        descriptionElementRef={descriptionElementRef}
        />
      </Menu>
    </div>
  );
}


