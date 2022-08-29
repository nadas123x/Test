import React from "react";
import "./Foot.css";
import PrivacyModal from "./ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
   faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faPhone } from "@fortawesome/free-solid-svg-icons";

const Foot = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} OCP
                    </span>
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Foot;