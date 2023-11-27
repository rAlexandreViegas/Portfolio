import LoadingBar from "../components/LoadingBar";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Skills from "../components/competences/Skills";
import Footer from "../components/Footer";

export default function Compétences() {
  return (
    <>
      <LoadingBar />
      <Nav />
      <Main>
        <Skills />
      </Main>
      <Footer />
    </>
  );
}
