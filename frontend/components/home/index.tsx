import About from "../../components/about";
import Carousel from "../../components/carousel";
import Info from "../../components/info";
import Layout from "../../layout/index";

/**
 *
 * @returns Main movies card
 */

const Main = () => {
  return (
    <Layout>
      <>
        <Carousel />
        <Info />
        <About />
      </>
    </Layout>
  );
};

export default Main;
