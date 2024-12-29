import React from "react";
import { Card, Row, Col, Typography, List } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div
      style={{
        padding: "50px",
      }}
      id="about"
    >
      <Title level={2} style={{ textAlign: "center" }}>
        About Us
      </Title>

      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} md={18}>
          <Title level={4} style={{ fontWeight: "bold", color: "#333" }}>
            Your Trusted Travel Partner Across South India
          </Title>
          <Paragraph
            style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}
          >
            Kumudha Travels has been a reliable and trusted name in the travel
            industry for years. We pride ourselves on offering affordable travel
            services across South India, ensuring our customers enjoy every
            journey with us. Our services are built on the pillars of
            punctuality, reliability, and comfort, providing you with a seamless
            experience.
          </Paragraph>

          <Title
            level={5}
            style={{ fontWeight: "bold", color: "#333", marginTop: "30px" }}
          >
            Why Choose Kumudha Travels?
          </Title>
          <List
            size="large"
            dataSource={[
              "Affordable charges across South India",
              "On-time trip pickup and drop (Punctual)",
              "Reliable ride anywhere and anytime",
              "Comfortable and safe ride",
            ]}
            renderItem={(item) => (
              <List.Item
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    color: "#007bff",
                  }}
                >
                  ✔
                </span>
                {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
