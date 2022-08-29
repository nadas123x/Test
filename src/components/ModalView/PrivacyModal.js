import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p >
          Below you will find OCP's terms and conditions and information about our cookie and privacy policies.
           We know we are giving a great deal of information. OCP does this for a reason:
            we want you to have as much knowledge about what we do for you at OCP as is possible.
             We do not want you to wonder about any of our processes or procedures or guess as to what your interaction with OCP means. We want you to understand it, which is why we must explain it in detail.
         
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                <br></br>
                {policyText}
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;