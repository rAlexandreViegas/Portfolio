import LoadingBar from "../components/LoadingBar";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Form from "../components/contact/Form";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <LoadingBar />
      <Nav />
      <Main>
        <Form />
      </Main>
      <Footer />
    </>
  );
}
