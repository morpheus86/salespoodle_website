import Head from "next/head";
import Showcase from "../components/Showcase";
import Layout from "../components/Layout";
import InfoPage from "../components/InfoPage";
const Home = () => {
  return (
    <Layout
      content={
        <div className="container">
          <Head>
            <title>SalesPoodle Advertising</title>
            <meta name="Description" content="Sales Poodle Home"></meta>
          </Head>
          <Showcase />
          <br />
          <InfoPage />
        </div>
      }
    />
  );
};

export default Home;
