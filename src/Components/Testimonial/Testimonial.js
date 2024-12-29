import React from "react";
import { Carousel, Card, Typography, Row, Col, Avatar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const testimonials = [
  {
    id: 1,
    name: "VenkateshPrabhu",
    position: "Traveler",
    content:
      "Our trip was budget-friendly, the punctuality was great, and the service was excellent. The places we visited were just amazing!",
    image: "",
  },
  {
    id: 2,
    name: "Ramki",
    position: "Tourist",
    content:
      "A wonderful experience! Low budget, well-mannered guides, and a perfect itinerary. I highly recommend it.",
    image: "",
  },
  {
    id: 3,
    name: "Yokheswaran",
    position: "Explorer",
    content:
      "A fantastic trip! Affordable, punctual, and the locations were breath-taking. Best service I’ve ever had!",
    image: "",
  },
];

const { Title, Text } = Typography;

const Testimonial = ({ direction, id }) => {
  return (
    <div style={{ padding: "50px" }} id={id}>
      <Title level={2} style={{ textAlign: "center" }}>
        What Our Clients Say About Their Trip
      </Title>

      <Carousel
        autoplay
        effect="scrollx"
        dots={true}
        arrows={true}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "30px",
              }}
            >
              <Row justify="center" gutter={16}>
                <Col>
                  <Avatar src={null} style={{ marginRight: 10 }} size={64}>
                    {!testimonial.image &&
                      testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                  </Avatar>
                </Col>
              </Row>

              <Row justify="center" style={{ marginTop: "20px" }}>
                <Col>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontStyle: "italic",
                      color: "#777",
                    }}
                  >
                    "{testimonial.content}"
                  </Text>
                  <div style={{ marginTop: "10px" }}>
                    <Title level={5}>{testimonial.name}</Title>
                    <Text>{testimonial.position}</Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
