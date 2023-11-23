import Nav from "../components/Nav";
import Main from "../components/Main";
import Presentation from "../components/accueil/Presentation";
import Footer from "../components/Footer";

export default function Accueil() {
  return (
    <>
      <Nav />
      <Main>
        <Presentation />
      </Main>
      <Footer />
    </>
  );
}
