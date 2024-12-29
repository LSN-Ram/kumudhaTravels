import { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles.js";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Header = () => {
  const message = "Hello! I would like to inquire about your travel services.";

  const [visible, setVisibility] = useState(false);

  const handlePhoneClick = () => {
    window.open("tel:+917388886627", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/7388886627?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>About</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("destination")}>
          <Span>Destinations</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("reviews")}>
          <Span>Reviews</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>Contact</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Row justify="end" align="middle" gutter={[16, 8]}>
            <Col>
              <Button
                icon={<PhoneOutlined style={{ color: "white" }} />}
                onClick={handlePhoneClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#6262c2",
                  color: "white",
                }}
              >
                Phone
              </Button>
            </Col>
            <Col>
              <Button
                icon={<WhatsAppOutlined style={{ color: "white" }} />}
                onClick={handleWhatsAppClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Whatsapp
              </Button>
            </Col>
          </Row>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img
              src={`${process.env.PUBLIC_URL}/assets/KumudhaTravelsLogopreview.png`}
              style={{
                width: "150px",
                height: "120px",
                objectFit: "contain",
              }}
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
