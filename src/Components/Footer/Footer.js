import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Footer = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/917388886627?text=Hello Kumudha Travels,I came across your website and I am planning a trip. I believe your travel services are well-suited to my budget and convenience. Could you please share the details of the expenses?. Thank you.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      style={{
        padding: "20px 0",
        marginTop: "40px",
        backgroundColor: "#fff",
      }}
    >
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Col xs={24} sm={12} md={10} style={{ textAlign: "center" }}>
          <div>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Contact via WhatsApp:
            </Text>
            <br />
            <Button
              icon={<WhatsAppOutlined />}
              onClick={handleWhatsAppClick}
              style={{
                fontSize: "16px",
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              +917388886627
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={12} md={10} style={{ textAlign: "center" }}>
          <div>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Location Details:
            </Text>
            <br />
            <Text>Church Rd, Ramappa Nagar,</Text>
            <br />
            <Text>Kandhanchavadi, Perungudi,</Text>
            <br />
            <Text>Chennai, Tamil Nadu 600096</Text>
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} style={{ textAlign: "center" }}>
          <Text type="secondary" style={{ fontWeight: "700" }}>
            © 2024 Kumudha Travels. All Rights Reserved.
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
