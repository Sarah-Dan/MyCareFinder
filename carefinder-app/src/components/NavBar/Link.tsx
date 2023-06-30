import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(" ", "-") as SelectedPage
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-cf-black" : ""} hover:text-cf-blue transition duration-500 ease-in-out`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link