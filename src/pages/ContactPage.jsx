import Header from "../components/Organisms/Header";
import Footer from "../components/Organisms/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="mx-5">
        <h1>Contact Us</h1>
        <p>
          <strong>Have a question or need assistance?</strong> Please feel free
          to contact us using the information below.
        </p>

        <p>
          <strong>Address:</strong>
          Your Company Address
        </p>
        <p>
          <strong>Phone Number:</strong>
          (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong>
          your_email@example.com
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
