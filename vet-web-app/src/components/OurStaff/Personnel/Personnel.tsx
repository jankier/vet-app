import "./Personnel.css";
import { motion } from "framer-motion";

type Props = {
  image: JSX.Element;
  name: string;
  specialization: string;
};

const Service = ({ image, name, specialization }: Props) => {
  return (
    <motion.div className="personnel-box">
      <div className="personnel-icon-element">
        <div className="personnel-icon-box">{image}</div>
      </div>
      <h4 className="personnel-title-element">{name}</h4>
      <span className="personnel-description-element">{specialization}</span>
    </motion.div>
  );
};

export default Service;
