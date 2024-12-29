import React from "react";
import { Card, Row, Col, Typography } from "antd";

const destinations = [
  {
    id: 1,
    name: "Kerala",
    location: "Kerala",
    description:
      "Kerala offers a serene experience with traditional houseboats floating through lagoons, rivers, and lakes surrounded by lush greenery.",
    image: "%PUBLIC_URL%/assets/kerala.jpg",
  },
  {
    id: 2,
    name: "Mysore",
    location: "Karnataka",
    description:
      "Mysore is famous for its royal history, Mysore Palace, Dussehra celebrations, and yoga retreats.",
    image: "%PUBLIC_URL%/assets/mysore.jpg",
  },
  {
    id: 3,
    name: "Chennai",
    location: "Tamil Nadu",
    description:
      "Chennai, the capital of Tamil Nadu, is known for its historical temples, beautiful beaches, and vibrant culture.",
    image: "%PUBLIC_URL%/assets/chennai.jpg",
  },
  {
    id: 4,
    name: "Ooty",
    location: "Tamil Nadu",
    description:
      "Ooty, also known as Udhagamandalam, is a popular hill station with scenic landscapes, tea plantations, and cool weather.",
    image: "%PUBLIC_URL%/assets/ooty.jpg",
  },
  {
    id: 5,
    name: "Coorg",
    location: "Karnataka",
    description:
      "Coorg, known as the Scotland of India, is famous for its coffee plantations, misty hills, and picturesque landscapes.",
    image: "%PUBLIC_URL%/assets/coorg.jpg",
  },
  {
    id: 6,
    name: "Hampi",
    location: "Karnataka",
    description:
      "Hampi is an ancient village known for its stunning ruins, historical temples, and the UNESCO World Heritage site of Vijayanagar.",
    image: "%PUBLIC_URL%/assets/hampi.jpg",
  },
  {
    id: 7,
    name: "Rameswaram",
    location: "Tamil Nadu",
    description:
      "Rameswaram is a famous pilgrimage destination known for the Rameswaram Temple, its connection to the Ramayana, and beautiful beaches.",
    image: "%PUBLIC_URL%/assets/rameswaram.jpg",
  },
  {
    id: 8,
    name: "Pondicherry",
    location: "Puducherry",
    description:
      "Pondicherry offers a beautiful blend of French colonial architecture, serene beaches, and vibrant culture.",
    image: "%PUBLIC_URL%/assets/pondicherry.jpg",
  },
  {
    id: 9,
    name: "Kanyakumari",
    location: "Tamil Nadu",
    description:
      "Kanyakumari, located at the southernmost tip of India, is known for its sunset views, the Vivekananda Rock Memorial, and its religious significance.",
    image: "%PUBLIC_URL%/assets/kanyakumari.jpg",
  },
  {
    id: 10,
    name: "Alleppey",
    location: "Kerala",
    description:
      "Alleppey is famous for its backwaters, houseboats, and natural beauty. It offers a tranquil escape in the midst of lush green surroundings.",
    image: "%PUBLIC_URL%/assets/alleppey.jpg",
  },
];
const { Title, Text } = Typography;

const Destination = () => {
  return (
    <div style={{ padding: "50px" }} id="destination">
      <Title level={2} style={{ textAlign: "center" }}>
        Destination places
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {destinations.map((destination) => (
          <Col key={destination.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "250px",
                  }}
                >
                  <img
                    alt={destination.name}
                    src={destination.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
                      color: "#333", // Darker text color for readability
                      padding: "15px", // Added more padding for better spacing
                      transform: "translateY(100%)", // Start hidden
                      transition: "transform 0.3s ease-in-out",
                      overflow: "hidden", // Ensure no content goes out of bounds
                      wordWrap: "break-word", // Handle long words without breaking the layout
                    }}
                    className="card-details"
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "18px", // Adjusted font size for the title
                        fontWeight: "bold", // Make title bold for emphasis
                        lineHeight: "1.2", // Adjust line height for better spacing
                      }}
                    >
                      {destination.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px", // Adjusted font size for the location text
                        margin: "5px 0", // Added margin between text elements
                        fontStyle: "italic", // Slightly italicize the location text for distinction
                      }}
                    >
                      {destination.location}
                    </p>
                    <p
                      style={{
                        fontSize: "14px", // Standard font size for description
                        lineHeight: "1.5", // Line height for better readability
                        margin: 0, // Remove margin for description
                      }}
                    >
                      {destination.description}
                    </p>
                  </div>
                </div>
              }
              onMouseEnter={(e) => {
                const cardDetails =
                  e.currentTarget.querySelector(".card-details");
                cardDetails.style.transform = "translateY(0)";
                const image = e.currentTarget.querySelector("img");
                image.style.transform = "scale(1.1)"; // Apply zoom-in effect
              }}
              onMouseLeave={(e) => {
                const cardDetails =
                  e.currentTarget.querySelector(".card-details");
                cardDetails.style.transform = "translateY(100%)";
                const image = e.currentTarget.querySelector("img");
                image.style.transform = "scale(1)"; // Reset zoom effect
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Destination;
