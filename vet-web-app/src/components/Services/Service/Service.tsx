import "./Service.css";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: Props) => {
  return (
    <motion.div className="service-box">
      <div className="service-icon-element">
        <div className="service-icon-box">{icon}</div>
      </div>
      <h4 className="service-title-element">{title}</h4>
      <span className="service-description-element">{description}</span>
    </motion.div>
  );
};

export default Service;
