import { socialIcons, topBarInfo } from "../../../data/TopBarData";
import "./TopBar.css";

const TopBar = () => {
  return (
    <section className="top-downloader">
      <div className="top-downloader-content-wrapper">
        <div className="top-downloader-infobar">
          {topBarInfo.map((item) => (
            <a
              key={item.id}
              href={item.href || "#"}
              className="top-downloadbar-link"
            >
              <div className="top-dowloadbar-info">
                <img src={item.icon} alt={item.info} />
                <span className="top-dwonloader_info">{item.info}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="social-media-icons">
          {socialIcons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img src={item.icon} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
