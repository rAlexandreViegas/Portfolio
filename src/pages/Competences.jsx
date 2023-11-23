import Nav from "../components/Nav";
import Main from "../components/Main";
import Skills from "../components/competences/Skills";
import Footer from "../components/Footer";

export default function Compétences() {
  return (
    <>
      <Nav />
      <div className="bar"></div>
      <Main title="white__background">
        <Skills />
      </Main>
      <div className="bar"></div>
      <Footer />
    </>
  );
}
