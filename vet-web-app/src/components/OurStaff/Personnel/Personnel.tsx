import { motion } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./Personnel.css";

type Props = {
  image: JSX.Element;
  name: string;
  specialization: string;
};

const Service = ({ image, name, specialization }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      className="personnel-box"
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, scale: isAboveMediumScreen ? 0.5 : 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="personnel-icon-element">
        <div className="personnel-icon-box">{image}</div>
      </div>
      <h4 className="personnel-title-element">{name}</h4>
      <span className="personnel-description-element">{specialization}</span>
    </motion.div>
  );
};

export default Service;
