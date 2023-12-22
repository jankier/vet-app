import { motion } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import "./Service.css";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Service = ({ icon, title, description }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      className="service-box"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, scale: isAboveMediumScreen ? 0.5 : 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="service-icon-element">
        <div className="service-icon-box">{icon}</div>
      </div>
      <h4 className="service-title-element">{title}</h4>
      <span className="service-description-element">{description}</span>
    </motion.div>
  );
};

export default Service;
