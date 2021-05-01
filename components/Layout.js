import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import Modal from "./Modal";
import Contact from "./Contact";
import About from "./About";
import Trade from "./Trade";
import { useStoreState, useStoreActions } from "easy-peasy";

const Layout = (props) => {
  const showModal = useStoreState((state) => state.modals.showModal);
  const showContactModal = useStoreState(
    (state) => state.modals.showContactModal
  );
  const showAboutModal = useStoreState((state) => state.modals.showAboutModal);
  const setHideModal = useStoreActions(
    (actions) => actions.modals.setHideModal
  );
  const showTradeModal = useStoreState((state) => state.modals.showTradeModal);
  const setShowContactModal = useStoreActions(
    (actions) => actions.modals.setShowContactModal
  );
  const setShowAboutModal = useStoreActions(
    (actions) => actions.modals.setShowAboutModal
  );
  const setShowTradeModal = useStoreActions(
    (actions) => actions.modals.setShowTradeModal
  );
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Open+Sans&family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <Header />
      <main>{props.content}</main>
      {showModal && (
        <Modal close={() => setHideModal()}>
          {showContactModal && (
            <Contact
              showContact={() => {
                setShowContactModal();
              }}
            />
          )}
          {showAboutModal && (
            <About
              showAbout={() => {
                setShowAboutModal();
              }}
            />
          )}
          {showTradeModal && (
            <Trade
              showTrade={() => {
                setShowTradeModal();
              }}
            />
          )}
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
