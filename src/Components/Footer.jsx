import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div
        style={{
          marginTop: 100,
          marginBottom: 50,
          padding: 100,
          backgroundColor: "#f5f9fa",
          boxShadow:"2px 2px 20px 2px rgba(0, 0, 0, 0.2)"
        }}
      >
        Let's create something new
      </div>
      <div>
        <IconButton href="mailto:rohit.kunala.27@gmail.com" rel="noopener" target="blank">
          <EmailOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton href="https://wa.me/+916303728322" rel="noopener" target="blank">
          <WhatsAppIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </div>
  );
};
export default Footer;
