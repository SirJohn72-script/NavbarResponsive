import { useState } from "react";
import {
  Container,
  Wrapper,
  IconContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileMenuIcon,
} from "./Narbar.elements";
import { BiAtom } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const Narbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ color: "#eee", size: "1.8em" }}>
            <IconContainer showMobileMenu={showMobileMenu}>
              <BiAtom />
              Atom - p(x)
            </IconContainer>

            <MobileMenuIcon onClick={() => handleShowMobileMenu()}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </MobileMenuIcon>

            <Menu showMobileMenu={showMobileMenu}>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>HOME</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>ABOUT US</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>PORTFOLIO</MenuItemLink>
                <hr />
              </MenuItem>
              <MenuItem onClick={() => handleShowMobileMenu()}>
                <MenuItemLink>CONTACT US</MenuItemLink>
                <hr />
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
    </>
  );
};

export default Narbar;
