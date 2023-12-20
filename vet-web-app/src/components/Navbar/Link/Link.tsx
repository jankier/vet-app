import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../../shared/types";
import "./Link.css";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  isMenuToggled: boolean;
  setIsMenuToggled: (isMenuToggled: boolean) => void;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
  page,
  selectedPage,
  isMenuToggled,
  setIsMenuToggled,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "selected-page" : "list-element"
      }`}
      offset="83px"
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(!isMenuToggled);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
