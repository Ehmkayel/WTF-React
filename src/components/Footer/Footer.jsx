import FooterIcon from "../../assets/icons/footer-icon.svg?react";
import {
  galleryData,
  quickLinksData,
  servicesData,
  socialData,
} from "../../data/FooterData";
import { FiChevronRight } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <FooterIcon />
            <p>
              Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
              tortor aliquam nulla facilisi cras fermentum odio eu.
            </p>
            <div className="socials">
              {socialData.map((img, index) => (
                <img key={index} src={img} alt={`social-${index}`} />
              ))}
            </div>
          </div>

          <div className="footer-links">
            <p className="footer-title">Our Services</p>
            <ul>
              {servicesData.map((service, index) => (
                <li key={index}>
                  <FiChevronRight color="white" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <p className="footer-title">Quick Links</p>
            <ul>
              {quickLinksData.map((link, index) => (
                <li key={index}>
                  <FiChevronRight color="white" />
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-gallery">
            <p className="footer-title">Gallery</p>
            <div className="gallery-grid">
              {galleryData.map((img, index) => (
                <img key={index} src={img} alt={`gallery-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/morufat-lamidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-name"
            >
              Morufat Lamidi Alade
            </a>{" "}
            | All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
