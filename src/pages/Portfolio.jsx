import Nav from "../components/Nav";
import Main from "../components/Main";
import Projects from "../components/portfolio/Projects";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Nav />
      <Main>
        <Projects />
      </Main>
      <Footer />
    </>
  );
}
