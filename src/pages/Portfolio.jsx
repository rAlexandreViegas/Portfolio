import LoadingBar from "../components/LoadingBar";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Projects from "../components/portfolio/Projects";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <LoadingBar />
      <Nav />
      <Main>
        <Projects />
      </Main>
      <Footer />
    </>
  );
}
