export enum SelectedPage {
  Home = "home",
  Services = "services",
  OurStaff = "ourstaff",
  Gallery = "gallery",
  ContactUs = "contactus",
}

export type ServiceType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type PersonnelType = {
  image: JSX.Element;
  name: string;
  specialization: string;
};

export type CarouselGalleryType = {
  image: JSX.Element;
  id: number;
};
