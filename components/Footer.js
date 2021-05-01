import React from "react";
import Link from "next/link";
import Contact from "./Contact";
const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <img src="/static/salespoodle_logo.jpeg" alt="Salespoodle" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus qui
            consequatur amet quae fugiat officia alias laudantium consectetur
            esse libero nulla quis, eum doloremque nam beatae laborum eveniet,
            porro modi!
          </p>
        </div>
        <div>
          <h1 className="l-container">
            <span className="text-primary">Contact Us</span>
          </h1>

          <Contact />
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <Link href="/">
                <a aria-label="Help">Help & Support</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a aria-label="Privacy">Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p>Copyright &copy; 2021, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
