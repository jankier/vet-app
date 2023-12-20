import "./Service.css";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: Props) => {
  return (
    <motion.div className="benefit-box" variants={childVariant}>
      <div className="icon-element">
        <div className="icon-box">{icon}</div>
      </div>
      <h4 className="title-element">{title}</h4>
      <span className="description-element">{description}</span>
    </motion.div>
  );
};

export default Service;
