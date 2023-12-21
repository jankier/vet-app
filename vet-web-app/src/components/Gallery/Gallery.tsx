import { motion } from "framer-motion";
import { SelectedPage, CarouselGalleryType } from "../../shared/types";
import { Carousel } from "react-responsive-carousel";
import { carousel_gallery } from "../../shared/galery_data";
import useMediaQuery from "../../hooks/useMediaQuery";
import CarouselGallery from "./CarouselGallery/CarouselGallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Gallery.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <div id="gallery" className="gallery">
      <motion.div
        className="gallery-section"
        onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}
      >
        <motion.div
          className="gallery-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span>Gallery</span>
        </motion.div>
        <div className="gallery-text">
          <motion.div
            className="icon1-relative-text-gallery"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <svg
              fill="#3375d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 471.01 471.01"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M468.919,115.126l-26.042-35.021l1.322-5.946c0.724-3.253-0.787-6.593-3.707-8.199l-40.659-22.362 c-15.605-8.583-34.848-5.351-46.791,7.864l-70.847,78.384c-5.655,6.257-12.853,11.038-20.813,13.824 c-23.476,8.217-47.777,13.091-72.229,14.486c-22.12,1.262-44.403,0.977-66.226-0.847c-1.675-0.14-3.346-0.162-5.006-0.093 c-4.025-14.279,2.593-30.915,9.31-42.921c8.69-15.533,19.622-27.204,19.728-27.315c2.404-2.543,2.729-6.41,0.785-9.32 c-1.943-2.908-5.642-4.085-8.91-2.839c-18.06,6.896-33.086,19.164-43.456,35.478c-10.369,16.314-15.099,35.127-13.676,54.406 l0.954,12.919c-9.672,10.149-19.226,21.14-26.223,29.424c-7.418,8.782-10.729,20.344-9.083,31.722l4.749,32.809 c2.411,16.66-4.314,33.47-17.553,43.871l-23.284,18.295c-7.989,6.277-12.229,16.438-11.075,26.531l5.676,56.815 c0.847,8.473,7.906,14.862,16.421,14.862h13.8c7.769,0,14.562-5.518,16.153-13.121l8.035-38.377l21.571-9.418 c32.653-14.257,57.302-41.994,67.623-76.098l3.105-10.263c2.897-9.578,11.818-15.814,21.683-15.163c9.95,0.655,20.1,3.38,30.168,8.1 c8.019,3.758,14.968,7.543,21.1,10.883c15.85,8.633,28.947,15.753,46.388,14.101c-7.135,46.546,5.687,92.344,12.768,112.829 c3.223,9.323,11.646,15.825,21.457,16.563c1.681,0.126,3.334,0.19,4.952,0.19c1.9,0,3.75-0.087,5.535-0.262 c12.576-1.229,22.06-11.826,22.06-24.649c0-120.549,38.647-245.031,48.997-276.198c0.005,0.001,0.011,0.003,0.016,0.005l6.083,1.685 c5.388,1.492,9.679,5.7,11.199,10.983c3.021,10.5,9.603,18.321,19.032,22.62c8.707,3.969,17.4,3.889,21.811,3.49 c2.182-0.198,4.168-1.34,5.437-3.127c1.269-1.786,1.692-4.037,1.16-6.163c-0.09-0.36-0.484-2.457,0.593-8.393 c1.594-8.77,6.473-16.634,13.741-22.15c0.026-0.02,0.052-0.039,0.077-0.058C471.445,126.442,472.384,119.787,468.919,115.126z M392.605,56.742l3.301,1.815l-4.881,14.951l-13.568-19.324C382.501,53.314,387.832,54.117,392.605,56.742z M108.038,118.345 c0.469-0.736,0.948-1.463,1.438-2.179c-6.299,13.835-10.168,29.625-6.187,44.481c-2.292,1.02-4.495,2.249-6.573,3.691l-0.054-0.738 C95.479,147.564,99.413,131.915,108.038,118.345z M438.25,149.49c-0.345,1.903-0.599,3.653-0.762,5.268 c-6.502-0.878-14.946-4.216-18.098-15.164c-2.952-10.258-11.232-18.416-21.609-21.29l-6.083-1.685 c-6.386-1.768-11.69-6.487-14.19-12.623c-1.562-3.836-5.94-5.68-9.774-4.116c-3.837,1.563-5.68,5.939-4.116,9.775 c2.294,5.631,5.988,10.549,10.604,14.362c-9.341,27.78-50.54,157.468-50.54,283.251c0,5.067-3.662,9.246-8.52,9.721 c-2.448,0.239-5.107,0.253-7.9,0.043c-3.841-0.289-7.141-2.843-8.406-6.506c-25.188-72.868-10.334-121.335-2.778-138.791 c1.646-3.801-0.103-8.216-3.903-9.862c-3.803-1.647-8.218,0.103-9.862,3.904c-3.013,6.961-5.386,14.059-7.222,21.204 c-15.251,3.115-25.295-2.346-42.393-11.658c-6.318-3.441-13.479-7.342-21.907-11.292c-11.768-5.516-23.728-8.707-35.549-9.486 c-16.864-1.106-32.095,9.492-37.026,25.787l-3.105,10.263c-9.046,29.89-30.648,54.2-59.268,66.695l-25.118,10.967 c-2.226,0.972-3.843,2.96-4.34,5.336l-8.828,42.166c-0.145,0.692-0.764,1.194-1.472,1.194h-13.8c-0.775,0-1.418-0.582-1.495-1.354 l-5.682-56.874c-0.004-0.041-0.009-0.082-0.014-0.123c-0.579-4.968,1.504-9.974,5.437-13.064l23.284-18.295 c17.444-13.707,26.308-35.86,23.131-57.814l-4.749-32.809c-1.032-7.136,1.044-14.387,5.696-19.895 c8.933-10.575,22.101-25.643,34.109-37.375c5.236-5.116,12.406-7.703,19.677-7.094c22.521,1.882,45.509,2.176,68.329,0.875 c25.851-1.475,51.532-6.624,76.33-15.304c10.322-3.613,19.654-9.811,26.987-17.924l70.847-78.383 c0.021-0.023,0.043-0.042,0.064-0.065l23.13,32.943c1.416,2.018,3.717,3.19,6.137,3.19c0.367,0,0.738-0.027,1.109-0.083 c2.809-0.419,5.14-2.39,6.021-5.09l8.651-26.501l17.021,9.362l-4.712,0.554c-4.114,0.484-7.057,4.211-6.572,8.325 c0.448,3.816,3.688,6.624,7.438,6.624c0.293,0,0.589-0.017,0.886-0.052l8.037-0.946l23.036,30.979 C445.954,128.332,440.267,138.388,438.25,149.49z"></path>{" "}
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="gallery-text1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isAboveMediumScreen ? 1 : 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: isAboveMediumScreen ? 50 : 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              Ever wondered what happens behind those clinic doors? Peek behind
              the scenes and explore the bustling energy of our clinic, where
              passion meets profession, and every day is an opportunity to make
              a difference.
            </span>
          </motion.div>
          <motion.div
            className="icon2-relative-text-gallery"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <svg
              fill="#3375d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 464.854 464.854"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M459.959,183.13l-2.494-0.924c-7.507-2.78-12.771-9.733-13.409-17.713c-0.205-2.568-1.714-4.851-3.996-6.046 c-0.603-0.316-13.12-6.778-28.026-7.424c-1.425-9.345-2.35-20.773-2.361-20.915c-0.231-2.892-2.11-5.391-4.823-6.417 c-2.714-1.026-5.776-0.395-7.862,1.62c-2.215,2.139-20.586,20.38-22.838,38.985c-8.341,6.99-31.564,25.869-38.899,31.827 c-6.53-0.286-22.613-0.578-39.796,2.241c-13.078,2.146-26.797,1.274-39.674-2.52c-20.531-6.05-50.9-7.375-87.822-3.836 c-21.839,2.094-39.769,5.499-54.176,8.235c-11.797,2.241-26.351,5.005-30.211,3.587l-16.205-30.91 c-11.779-22.467-8.955-49.625,7.196-69.187c11.98-14.511,29.643-22.833,48.46-22.833h16.284c9.665,0,17.528-7.863,17.528-17.529 s-7.863-17.529-17.528-17.529h-16.553c-29.976,0-58.068,13.295-77.072,36.477c-24.655,30.074-29.539,72.075-12.441,107.003 l23.491,47.989l0.279,3.436c-9.835,19.027-12.145,41.238-6.428,61.852L4.65,321.478c-3.185,1.309-5.069,4.618-4.57,8.025 l12.178,83.094c0.54,3.683,3.699,6.412,7.421,6.412h33.667c4.142,0,7.5-3.358,7.5-7.5v-5.014c0-10.291-6.717-19.042-15.998-22.099 l-0.909-23.625l59.21-1.659l-0.124,1.662c-0.997,13.36,5.368,26.186,16.612,33.471c25.006,16.201,53.972,24.764,83.767,24.764h6.1 c4.142,0,7.5-3.358,7.5-7.5v-0.716c0-11.099-6.605-21.065-16.828-25.388c-1.691-0.716-22.308-9.388-34.341-14.449l10.326-14.695 c6.679,1.424,19.36,3.465,37.216,3.465c8.857,0,18.995-0.508,30.29-1.837l14.464,54.125c0.877,3.281,3.849,5.564,7.246,5.564h37.249 c4.142,0,7.5-3.358,7.5-7.5v-2.149c0-11.946-8.528-21.937-19.815-24.208l-2.82-5.642l3.141-19.632l23.974-12.072l59.726,68.626 c1.424,1.637,3.488,2.576,5.658,2.576h33.67c4.142,0,7.5-3.358,7.5-7.5c0-7.169-2.794-13.91-7.867-18.983 c-3.746-3.746-8.405-6.247-13.477-7.297l-24.252-68.4c11.018-7.208,18.279-19.132,19.405-32.51 c2.146-25.483,19.295-46.909,43.69-54.583c14.329-4.508,24.417-17.091,25.699-32.058l0.466-5.44 C465.114,187.442,463.122,184.302,459.959,183.13z M396.607,149.068c0.214,1.611,0.445,3.223,0.689,4.791l-4.677,1.788 C393.794,153.399,395.162,151.177,396.607,149.068z M46.711,182.73c-14.524-29.671-10.376-65.351,10.568-90.898 c16.145-19.692,40.008-30.987,65.473-30.987h16.553c1.394,0,2.528,1.134,2.528,2.529s-1.134,2.529-2.528,2.529h-16.284 c-23.309,0-45.188,10.309-60.027,28.283c-20.005,24.231-23.504,57.871-8.914,85.701l15.171,28.937l-5,9.737L46.711,182.73z M45.463,404.009H26.159l-8.288-56.554l10.912,9.548l1.309,34.021c0.155,4.027,3.465,7.212,7.495,7.212 C41.274,398.235,44.406,400.666,45.463,404.009z M38.881,345.907l-17.325-15.159l41.088-16.885c3.631-1.492,5.498-5.533,4.278-9.266 l-0.987-3.021c-2.736-8.379-3.81-17.144-3.304-25.807c7.336,23.407,22.213,44.195,42.369,58.551l-0.728,9.755L38.881,345.907z M194.333,399.219c2.376,1.005,4.324,2.678,5.662,4.748c-23.711-0.577-46.736-7.178-67.139-19.2l20.475-2.799 C161.344,385.339,192.246,398.336,194.333,399.219z M293.512,402.576h-22.375l-7.117-26.633l8.614,0.053l-0.335,2.093 c-0.248,1.549-0.004,3.136,0.697,4.539l5.73,11.461c1.271,2.541,3.868,4.146,6.708,4.146 C288.803,398.235,291.775,399.961,293.512,402.576z M362.146,322.435l11.845,33.409l-21.313,11.426l-24.246-27.859L362.146,322.435z M394.32,398.236c3.162,0,6.133,1.23,8.367,3.463c0.281,0.281,0.546,0.573,0.795,0.877h-20.076l-20.627-23.701l16.284-8.73 l8.19,23.098C388.313,396.236,391.145,398.236,394.32,398.236z M380.023,281.627c-0.865,10.275-7.26,19.251-16.688,23.425 c-0.114,0.05-0.226,0.103-0.337,0.159l-69.443,34.968l1.551-9.693l23.125-11.875c3.685-1.892,5.138-6.413,3.246-10.098 c-1.893-3.685-6.414-5.138-10.098-3.246l-26.504,13.61c-2.125,1.091-3.603,3.129-3.98,5.487l-5.863,36.646l-15.027-0.092 l-8.861-33.156l18.102-36.873c1.825-3.718,0.291-8.212-3.427-10.038c-3.718-1.825-8.212-0.291-10.038,3.427l-19.341,39.398 c-0.799,1.628-0.981,3.49-0.513,5.241l3.825,14.314c-29.136,3.176-49.633,0.455-58.942-1.355l1.8-32.388 c0.23-4.136-2.937-7.675-7.072-7.905c-4.117-0.225-7.674,2.937-7.904,7.073l-2.031,36.54l-15.511,22.074l-30.641,4.189 c-1.183-2.988-1.714-6.25-1.467-9.57l2.296-30.768c0.204-2.725-1.091-5.345-3.379-6.838c-25.168-16.43-41.646-44.124-44.076-74.082 l-1.086-13.384l9.328-18.165c7.897,1.574,19.194-0.57,35.514-3.67c14.104-2.678,31.658-6.012,52.809-8.04 c35.032-3.359,63.439-2.22,82.151,3.293c15.027,4.427,31.051,5.442,46.342,2.933c20.056-3.29,39.095-1.929,39.28-1.915 c1.91,0.145,3.802-0.448,5.29-1.655c1.481-1.201,34.727-28.179,42.867-35.101l22.087-8.445c6.543-0.412,13.001,1.021,17.808,2.558 l-1.704,2.553c-9.155,13.715-9.029,31.354,0.32,44.937l1.028,1.493C399.638,229.205,382.4,253.402,380.023,281.627z M439.051,211.757l-2.865-4.161c-5.307-7.711-5.845-17.505-1.621-25.664c3.572,5.618,8.683,10.226,14.84,13.141 C448.769,202.087,444.866,208.198,439.051,211.757z"></path>{" "}
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="gallery-text2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isAboveMediumScreen ? 1 : 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: isAboveMediumScreen ? -50 : -30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              Prepare to be charmed by the cuteness overload! Our gallery
              features a parade of lovable pets, each with its unique
              personality. From curious kittens to majestic dogs, every patient
              steals a piece of our hearts.
            </span>
          </motion.div>
          <motion.div
            className="icon3-relative-text-gallery"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <svg
              fill="#3375d8"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 470.345 470.345"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M470.026,91.943c-0.861-3.532-3.392-6.447-6.767-7.796L434.29,72.558l-9.398-11.16c-5.082-6.035-12.512-9.372-20.41-9.202 l-14.896,0.354c-14.432,0.344-27.631,7.2-36.213,18.809l-29.548,39.978c-6.13,8.292-14.979,14.372-24.917,17.118 c-38.603,10.667-78.419,14.464-118.343,11.283l-36.471-2.905c-12.706-1.01-25.501,2.391-36.026,9.583 c0,0-29.081,20.211-30.236,21.25c-6.067,5.238-17.931,16.59-28.719,33.405c-19.169,29.876-23.679,61.641-13.188,92.188 c-8.333,7.597-18.32,14.939-29.594,19.95c-2.571,1.143-4.287,3.628-4.442,6.438c-0.761,13.691-1.508,56.114-1.885,80.184 c-0.076,4.872,1.764,9.466,5.181,12.938c3.419,3.473,7.987,5.386,12.862,5.386h19.832c2.235,0,4.354-0.997,5.778-2.719 c1.425-1.722,2.007-3.989,1.589-6.185l-2.265-11.89c-1.226-6.437-5.021-12.004-10.352-15.523l1.352-13.322 c1.534-15.125,7.377-28.982,16.476-40.243c2.737,8.119,5.488,19.971,3.453,31.163c-0.504,2.77,0.586,5.588,2.821,7.298 c1.333,1.02,2.94,1.543,4.559,1.543c1.096,0,2.198-0.24,3.224-0.729c22.616-10.771,27.428-39.636,24.276-65.083 c26.641-12.088,46.307-36.73,51.953-65.622l3.307-16.924c6.521-1.016,19.197-1.824,29.204,4.651 c3.141,2.032,6.871,5.007,11.19,8.451c17.607,14.04,43.731,34.853,86.505,39.15c-0.081,1.466-0.16,2.933-0.212,4.406l-3.188,90.042 c-0.031,0.877,0.092,1.752,0.363,2.587l10.592,32.53c3.196,9.82,12.282,16.417,22.609,16.417h24.825 c2.488,0,4.815-1.234,6.211-3.295c1.395-2.061,1.677-4.68,0.753-6.99l-3.997-9.991c-3.27-8.175-10.585-13.769-19.134-14.878 l-4.733-24.455l12.418-88.697c0.735-5.253,3.779-9.808,8.351-12.498c5.956-3.504,10.548-8.709,13.28-15.054l54.579-126.735 l39.859,5.695c9.722,1.386,19.351-2.219,25.767-9.648l8.314-9.627C469.983,99.228,470.887,95.476,470.026,91.943z M372.789,73.128 c-0.951,9.189-3.301,18.066-7.04,26.47l-6.929-10.372l6.615-8.95C367.518,77.459,370.008,75.063,372.789,73.128z M59.292,213.157 l2.528,49.918c-2.098,3.175-6.9,10.064-13.904,17.979C42.192,258.432,46,235.659,59.292,213.157z M69.126,342.987 c-1.244-10.974-4.624-20.61-6.995-26.315c3.787-3.017,7.896-5.683,12.276-7.967C75.794,324.06,73.366,335.338,69.126,342.987z M447.94,101.803c-3.062,3.544-7.651,5.266-12.294,4.603l-45.539-6.506c-3.346-0.478-6.609,1.348-7.949,4.458l-56.849,132.004 c-1.462,3.396-3.92,6.183-7.108,8.058c-8.54,5.023-14.226,13.533-15.601,23.346l-12.591,89.935c-0.114,0.82-0.093,1.653,0.064,2.465 l6.107,31.555c0.683,3.527,3.771,6.075,7.363,6.075h3.086c3.591,0,6.784,2.092,8.224,5.357h-13.741c-3.813,0-7.166-2.435-8.346-6.06 l-10.182-31.27l3.141-88.716c0.489-13.837,2.366-27.328,5.576-40.097c1.01-4.017-1.428-8.092-5.444-9.102 c-4.018-1.011-8.093,1.428-9.103,5.445c-1.947,7.744-3.422,15.73-4.45,23.876c-38.379-3.95-62.347-23.047-78.511-35.936 c-4.631-3.692-8.63-6.881-12.394-9.316c-11.687-7.562-25.049-8.286-34.329-7.529l1.99-10.182c0.794-4.065-1.857-8.005-5.922-8.799 c-4.064-0.793-8.004,1.857-8.799,5.922l-8.32,42.578c-5.045,25.819-23.488,47.579-48.132,56.787 c-15.957,5.962-29.892,16.242-40.297,29.729c-10.406,13.486-16.815,29.573-18.535,46.521l-1.873,18.465 c-0.354,3.492,1.761,6.762,5.09,7.872c3.077,1.025,5.366,3.642,5.972,6.828l0.569,2.986H18.045c-1.111,0-1.838-0.569-2.172-0.909 c-0.333-0.339-0.89-1.072-0.873-2.18c0.276-17.575,0.954-57.631,1.658-75.148c35.882-17.925,58.221-54.337,59.189-55.937 c0.775-1.282,1.15-2.766,1.074-4.263l-2.697-53.27c-0.716-14.152,6.106-27.91,17.806-35.904l24.5-16.742 c7.705-5.264,17.064-7.762,26.373-7.015l36.472,2.905c41.675,3.316,83.235-0.644,123.528-11.778 c13.157-3.635,24.871-11.682,32.985-22.66l13.458-18.208l7.128,10.668c2.198,3.291,5.793,5.204,9.712,5.204 c0.217,0,0.437-0.006,0.655-0.018c4.171-0.226,7.814-2.572,9.746-6.275l0.064-0.124c6.347-12.165,10.141-25.267,11.275-38.943 l0.408-4.926c0.534-0.04,1.069-0.071,1.608-0.084l14.896-0.354c1.971-0.06,3.878,0.436,5.555,1.376 c-3.492,0.996-5.839,4.404-5.38,8.121c0.469,3.799,3.701,6.582,7.434,6.582c0.307,0,0.617-0.019,0.929-0.058l9.309-1.149l1.34,1.591 c0.794,0.942,1.808,1.675,2.952,2.132l25.86,10.345L447.94,101.803z"></path>{" "}
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="gallery-text3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isAboveMediumScreen ? 1 : 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: isAboveMediumScreen ? 50 : 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              Discover the gentle moments that define our clinic — a reassuring
              pat, a comforting cuddle, and the genuine connection between our
              staff and the animals. It's more than just medical care, it's
              about creating an atmosphere of trust and understanding.
            </span>
          </motion.div>
        </div>
        <Carousel
          className="carousel"
          autoPlay
          infiniteLoop
          stopOnHover
          showThumbs={false}
        >
          {carousel_gallery.map((element: CarouselGalleryType) => (
            <CarouselGallery key={element.id} image={element.image} />
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Gallery;
