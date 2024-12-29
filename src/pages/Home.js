import React, { lazy } from "react";
const Container = lazy(() => import("../common/Container"));
const Testimonial = lazy(() => import("../Components/Testimonial/Testimonial"));
const Destination = lazy(() => import("../Components/Destination/Destination"));
const About = lazy(() => import("../Components/About/About"));
const TripContactForm = lazy(() =>
  import("../Components/TripContactForm/TripContactForm")
);
const MainPage = lazy(() => import("../Components/MainPage/MainPage"));

const Home = () => {
  return (
    <Container>
      <MainPage direction="right" />
      <About direction="right" />
      <Destination direction="right" />
      <Testimonial direction="right" id="reviews" />
      <TripContactForm direction="right" />
    </Container>
  );
};

export default Home;
