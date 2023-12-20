export enum SelectedPage {
  Home = "home",
  Services = "services",
  OurStaff = "ourstaff",
  AboutUs = "aboutus",
  ContactUs = "contactus",
}

export type ServiceType = {
  icon: JSX.Element;
  title: string;
  description: string;
};
