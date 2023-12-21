import { motion } from "framer-motion";
import { SelectedPage, ServiceType } from "../../shared/types";
import "./Services.css";
import { services } from "../../shared/services_data";
import Service from "./Service/Service";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <div id="services" className="services">
      <motion.div
        className="services-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="services-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span>Avaliable Services</span>
        </motion.div>
        <div className="services-list">
          {services.map((service: ServiceType) => (
            <Service
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
