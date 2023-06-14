import {Container, Typography, Toolbar} from "@mui/material";

const Footer = () => {

  return (
  <Toolbar sx={{ borderTop: 1, borderColor: 'divider', textAlign: 'center' }} component="footer">
    <Container>
        <Typography variant="body1">Farm Sensors &copy; 2023</Typography>
    </Container>
  </Toolbar>
  );
};

export default Footer;
