import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useMediaQuery from "../../hooks/useMediaQuery";
import "react-datepicker/dist/react-datepicker.css";
import "./ContactUs.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contactus" className="contact-us">
      <motion.div
        className="contact-us-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}
      >
        <motion.div
          className="contact-us-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span>Contact Us</span>
        </motion.div>
        <div className="contact-us-form">
          <motion.div
            className="form-elements"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isAboveMediumScreen ? 1 : 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: isAboveMediumScreen ? -50 : -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="form-title">
              <span>Schedule an appointment</span>
            </div>
            <form
              className="form"
              target="_self"
              onSubmit={onSubmit}
              action="https://formsubmit.co/2d0d0471328a2ea725b03c9d55a23632"
              method="POST"
            >
              <input
                className="form-input"
                type="text"
                placeholder="Name"
                autoComplete="off"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="form-error">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length exceeded."}
                </p>
              )}
              <input
                className="form-input"
                type="text"
                placeholder="Email"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="form-error">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email adress."}
                </p>
              )}
              <DatePicker
                className="form-date"
                minDate={new Date()}
                selected={startDate}
                dateFormat="dd/MM/y"
                onChange={(date: Date) => setStartDate(date)}
              />
              <button className="form-button" type="submit">
                Submit
              </button>
            </form>
            <div className="cat-relative">
              <svg
                fill="#f9fbfd"
                height="180px"
                width="180px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455.902 455.902"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M437.249,144.343l-0.643-24.467c8.268-10.073,11.96-21.896,10.579-34.349c9.839-23.873,8.79-60.62,7.505-73.099 c-0.499-4.844-3.434-8.961-7.851-11.015c-4.421-2.054-9.467-1.644-13.494,1.101l-1.587,1.081 c-12.27,8.359-23.012,18.535-31.997,30.299c-12.322-3.249-25.379-3.249-37.701,0c-8.985-11.764-19.729-21.94-31.996-30.298 l-1.586-1.081c-4.028-2.745-9.074-3.157-13.496-1.101c-4.417,2.053-7.352,6.17-7.851,11.014c-1.284,12.48-2.33,49.23,7.506,73.099 c-1.631,14.705,3.821,28.527,15.522,39.629c-3.122,6.255-9.013,17.47-16.289,28.557c-7.608,0.347-22.35,2.207-39.902,10.461 c-28.14,13.232-51.55,36.919-69.579,70.404c-36.134,67.105-41.743,118.703-42.535,136.761c-13.113,1.724-44.02,6.115-74.693,12.865 C9.794,401.229,0.371,418.439,0.012,429.903c-0.214,6.807,2.372,12.689,7.479,17.014c7.699,6.52,20.918,8.866,35.962,8.866 c16.129,0,34.354-2.698,50.119-5.843c8.079-1.623,13.943-8.774,13.943-17.005c0-0.967-0.081-1.937-0.239-2.867 c-0.098-0.586-0.225-1.16-0.377-1.721l71.38-9.379l1.074,2.532c4.141,9.759,13.664,16.167,24.264,16.325l127.266,1.899 c0.038,0,0.075,0.001,0.112,0.001c2.467,0,4.778-1.213,6.179-3.249c1.422-2.067,1.717-4.708,0.785-7.037 c-4.423-11.055-12.717-19.63-22.914-24.488c6.061-9.823,13.015-22.734,17.595-36.375l26.509,60.924 c4.604,10.58,14.609,17.713,26.113,18.616l39.062,3.063c0.195,0.015,0.392,0.023,0.587,0.023c2.155,0,4.218-0.929,5.647-2.566 c1.56-1.786,2.184-4.204,1.682-6.521l-0.375-1.734c-0.842-3.882-2.293-7.511-4.215-10.82c0,0,15.756,1.815,16.044,1.815 c2.019,0,3.968-0.816,5.389-2.285c1.624-1.678,2.374-4.017,2.027-6.327l-0.527-3.521c-2.009-13.392-11.134-24.665-23.813-29.42 l-3.978-1.492l-3.838-86.345c5.295-7.619,21.447-33.624,33.075-81.925C463.771,171.284,445.876,150.994,437.249,144.343z M329.753,85.639c0.23-1.451,0.029-2.937-0.577-4.274c-7.586-16.728-8.831-47.313-7.327-65.215 c12.182,8.339,22.669,18.694,31.174,30.781c1.928,2.738,5.437,3.866,8.598,2.768c12.439-4.327,26.141-4.326,38.58,0 c3.161,1.102,6.672-0.029,8.598-2.768c8.505-12.086,18.993-22.442,31.174-30.782c1.505,17.899,0.26,48.485-7.327,65.216 c-0.605,1.337-0.807,2.823-0.576,4.273c1.921,12.097-2.887,22.771-14.289,31.725c-16.297,12.798-27.084,21.098-33.262,25.808 c-2.125,1.619-5.091,1.619-7.214,0c-6.147-4.686-16.909-12.967-33.262-25.808C332.64,108.41,327.833,97.736,329.753,85.639z M437.445,216.551c-12.931,53.714-31.805,78.269-31.98,78.494c-1.12,1.415-1.692,3.186-1.612,4.988l4.175,93.915 c0.133,3.002,2.045,5.634,4.858,6.689l8.616,3.231c5.492,2.06,9.869,6.162,12.323,11.31l-29.51-3.431l-33.26-92.933l12.256-76.166 c0.813-5.045,4.339-9.155,9.203-10.724c3.447-1.113,7.121-0.812,10.343,0.847c3.222,1.658,5.601,4.473,6.698,7.925 c1.256,3.947,5.475,6.13,9.421,4.874c3.947-1.256,6.129-5.474,4.874-9.42c-2.316-7.282-7.334-13.218-14.128-16.715 c-6.793-3.497-14.541-4.131-21.813-1.785c-10.258,3.309-17.694,11.975-19.406,22.617l-12.563,78.069 c-0.201,1.249-0.083,2.528,0.343,3.719l35.479,99.133c0.961,2.685,3.362,4.593,6.195,4.922c6.393,0.743,11.989,4.169,15.58,9.179 l-27.102-2.125c-5.962-0.468-11.146-4.164-13.532-9.646l-46.096-105.941c-4.271-9.814-4.929-20.866-1.854-31.119 c5.054-16.846,2.521-35.006-6.946-49.826l-10.954-17.145c-2.231-3.491-6.868-4.511-10.358-2.282 c-3.49,2.23-4.512,6.868-2.282,10.358l10.954,17.145c7.114,11.135,9.017,24.782,5.22,37.44c-1.344,4.479-2.141,9.074-2.42,13.687 c-14.962-7.971-31.957-10.477-49.938-7.236c-17.506,3.155-29.797,10.666-30.312,10.984c-3.522,2.178-4.613,6.8-2.435,10.323 c2.177,3.523,6.798,4.612,10.323,2.436c0.402-0.25,39.922-24.116,74.251,2.543c0.778,2.95,1.768,5.854,2.996,8.677l9.439,21.693 c-1.569,19.805-13.739,41.881-22.519,55.484c-2.611-0.267-5.272-0.322-7.963-0.135l-47.103,3.271 c-4.132,0.287-7.249,3.869-6.963,8.001c0.288,4.133,3.873,7.247,8.002,6.962l47.103-3.271c9.166-0.635,17.859,2.764,24.064,8.951 l-113.272-1.69c-4.665-0.07-8.857-2.891-10.68-7.186l-9.701-22.868c-1.618-3.814-6.025-5.592-9.833-3.975 c-3.813,1.618-5.594,6.02-3.976,9.833l2.548,6.005L87.93,415.71c-0.003,0-0.006,0.002-0.009,0.002 c-10.276,1.322-29.633,3.315-44.073,1.847c-4.121-0.419-7.801,2.582-8.221,6.703c-0.419,4.121,2.582,7.801,6.703,8.22 c15.154,1.542,34.216-0.181,47.543-1.897c1.254-0.154,2.398,0.7,2.611,1.975c0.021,0.121,0.03,0.243,0.03,0.375 c0,1.111-0.798,2.079-1.887,2.297c-36.806,7.342-64.948,7.432-73.444,0.237c-1.619-1.371-2.25-2.847-2.18-5.097 c0.048-1.538,2.569-15.484,75.284-31.499c39.481-8.695,79.435-13.415,79.834-13.462c3.881-0.454,6.764-3.812,6.624-7.717 c-0.021-0.564-1.524-57.314,40.849-136.006c27.555-51.177,63.032-66.576,83.674-71.151c-0.293,0.332-0.584,0.67-0.879,0.995 c-2.779,3.071-2.544,7.813,0.527,10.593c1.436,1.3,3.236,1.94,5.031,1.94c2.044,0,4.082-0.832,5.563-2.467 c13.217-14.601,24.683-35.255,30.555-46.728c12.394,9.692,20.927,16.252,26.145,20.23c3.739,2.85,8.218,4.274,12.699,4.274 c4.479,0,8.961-1.425,12.7-4.274c5.547-4.229,14.792-11.339,28.34-21.948l0.679,25.87c0.106,4.074,3.442,7.303,7.493,7.303 c0.066,0,0.134-0.001,0.201-0.002c1.84-0.048,3.505-0.758,4.78-1.891C440.054,173.088,444.094,188.933,437.445,216.551z"></path>{" "}
                </g>
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="map"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: isAboveMediumScreen ? 50 : 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2055.55624515801!2d20.991452496001017!3d52.216458235815914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccbfadf2121f%3A0x6700ef8201286d88!2sWawelska%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1703180788342!5m2!1spl!2spl"
              width="600"
              height="450"
              loading="lazy"
              style={{ border: 0, borderRadius: 15 }}
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
