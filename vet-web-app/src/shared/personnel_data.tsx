import { PersonnelType } from "./types";
import personel_img_1 from "../assets/personel1.png";
import personel_img_2 from "../assets/personel2.png";
import personel_img_3 from "../assets/personel3.png";
import personel_img_4 from "../assets/personel4.png";
import personel_img_5 from "../assets/personel5.png";
import personel_img_6 from "../assets/personel6.png";
import personel_img_7 from "../assets/personel7.png";
import personel_img_8 from "../assets/personel8.png";

export const personnel: Array<PersonnelType> = [
  {
    image: <img src={personel_img_1} alt="personel one image"></img>,
    name: "Maxwell Stonebridge",
    specialization: "Small Animal Medicine",
  },
  {
    image: <img src={personel_img_2} alt="personel two image"></img>,
    name: "Sophia Reynolds",
    specialization: "Dental Medicine",
  },
  {
    image: <img src={personel_img_3} alt="personel three image"></img>,
    name: "Olivia Mitchell",
    specialization: "Emergency and Critical Care",
  },
  {
    image: <img src={personel_img_4} alt="personel four image"></img>,
    name: "Ava Harper",
    specialization: "Radiology",
  },
  {
    image: <img src={personel_img_5} alt="personel five image"></img>,
    name: "Emma Sanchez",
    specialization: "Surgery",
  },
  {
    image: <img src={personel_img_6} alt="personel six image"></img>,
    name: "Derek Blackwood",
    specialization: "Behavioral Medicine",
  },
  {
    image: <img src={personel_img_7} alt="personel seven image"></img>,
    name: "Nathan Hawthorne",
    specialization: "Internal Medicine",
  },
  {
    image: <img src={personel_img_8} alt="personel eight image"></img>,
    name: "Isabella Morgan",
    specialization: "Dermatology",
  },
];
