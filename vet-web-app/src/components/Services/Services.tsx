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
        <div className="services-title">
          <p>Avaliable Services</p>
        </div>
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
