import React from "react";
// import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import AahladhLogo from "../../Assets/Aahladhlogo.png";
import FooterBtn from "./FooterBtn";

const Footer = () => {
  const socialIconsData = [
    { icon: <FaEnvelope />, url: "mailto:aahladh@iiitt.ac.in" },
    {
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/aahladh__iiitt/",
    },
  ];
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <img
                  src={AahladhLogo}
                  alt="Aahladh-Logo"
                  className="Aahladh-logo"
                />
                <h3 className="aahladh-title">Aahladh'23</h3>
                <p className="aahladh-desc">Riseup to Rejoice</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Useful Links
                </h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/Committee">Committee</a>
                  </li>
                  <li>
                    <a href="/Schedule">Schedule</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="col-12">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Contact Us
                  </h3>
                  <SocialIcons socialIcons={socialIconsData} />
                </div>
              </div>
              <div className="col-12">
                <div className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s">
                    <p className="btn-heading">Brochure</p>
                      <FooterBtn />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
              >
                <h3 className="f-title f_600 t_color f_size_18">Reach Us</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15683.344607610845!2d78.58343482017517!3d10.669822971745132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d475370d8ff%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1692780588563!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  style={{ border: 0, borderRadius: 10 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIIT Tiruchirappalli Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© Aahladh 2023 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <FaHeart className="icon_heart" /> by{" "}
                <a href="/" target="_blank" className="f-bottom-a">
                  Aahladh
                </a>{" "}
                Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
// {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15683.344607610845!2d78.58343482017517!3d10.669822971745132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d475370d8ff%3A0x28b98720c32abaa8!2sIndian%20Institute%20of%20Information%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1692780395232!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

export default Footer;
