import { useStoreActions } from "easy-peasy";
const Header = (props) => {
  const setShowContactModal = useStoreActions(
    (actions) => actions.modals.setShowContactModal
  );

  return (
    <nav id="main-nav">
      <div className="container">
        <img
          src="/static/salespoodle_logo.jpeg"
          alt="salespoodle"
          className="logo"
        />
        <div className="social">
          <a
            href="https://www.facebook.com/Nobleindustry/"
            aria-label="Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://instagram.com/noble_industry"
            aria-label="Instagram"
            target="_blank"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://pinterest.com" aria-label="Youtube" target="_blank">
            <i className="fab fa-pinterest-p fa-2x"></i>
          </a>
          <a href="https://linkedin.com" aria-label="Youtube" target="_blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <ul>
          <li>
            <a href="#" aria-label="Home">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Contact us"
              onClick={() => setShowContactModal()}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
