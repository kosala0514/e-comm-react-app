import Header from '../components/Organisms/Header';
import Footer from '../components/Organisms/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="mx-5">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          <strong>Our Mission:</strong> To provide high-quality products and
          exceptional customer service.
        </p>
        <p>
          <strong>Our Vision:</strong> To be the leading e-commerce platform in
          the industry.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;