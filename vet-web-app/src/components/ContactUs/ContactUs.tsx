import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import "./ContactUs.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <div id="contactus" className="contact-us">
      <motion.div
        className="contact-us-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      ></motion.div>
    </div>
  );
};

export default ContactUs;
