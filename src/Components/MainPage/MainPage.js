import React from "react";
import { Carousel, Typography } from "antd";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const { Title } = Typography;

const MainPage = () => {
  const quotes = [
    "“Travel is the only thing you buy that makes you richer.” ",
    "“The world is a book and those who do not travel read only one page.” – Saint Augustine",
    "“Not all those who wander are lost.” – J.R.R. Tolkien",
    "“Life is short and the world is wide.” – Simon Raven",
    "“The journey, not the arrival, matters.” – T.S. Eliot",
  ];
  const taxiImage = `${process.env.PUBLIC_URL}/assets/taxiImage.jpg`;

  return (
    <div>
      <Carousel autoplay effect="fade" style={{ height: "70vh" }}>
        {quotes.map((quote, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                position: "relative",
                height: "70vh",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  padding: "0 10px",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    maxWidth: "100%",
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "rgb(247 245 245 / 70%)",
                    padding: "20px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Fade triggerOnce duration={500}>
                    <Title level={2} style={{ fontWeight: "bold" }}>
                      {quote}
                    </Title>
                  </Fade>
                </div>
              </div>

              <ImageSection
                style={{
                  backgroundImage: `url(${taxiImage})`,
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const ImageSection = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  height: 100%;
  opacity: 0.7;
`;

export default MainPage;
