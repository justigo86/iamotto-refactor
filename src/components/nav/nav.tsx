import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.scss";
import { Outlet } from "react-router-dom";

interface LinkInterface {
  id: number;
  path: string;
}

const links: LinkInterface[] = [
  {
    id: 1,
    path: "home",
  },
  {
    id: 2,
    path: "projects",
  },
  {
    id: 3,
    path: "about",
  },
  {
    id: 4,
    path: "connect",
  },
];

const Nav = (): ReactElement => {
  const [expandNav, setExpandNav] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(true);

  const handleClick = (): void => {
    setExpandNav(!expandNav);
  };
  console.log("expand", expandNav);
  console.log("burger", showBurger);

  useEffect(() => {
    const adjustNavOnScroll = (): void => {
      if (window.scrollY > 50) {
        setShowBurger(false);
        // setExpandNav(true);
      } else {
        setShowBurger(true);
        // setExpandNav(false);
      }
    };
    window.addEventListener("scroll", adjustNavOnScroll);
    // return () => window.removeEventListener("scroll", adjustNavOnScroll);
    // used to prevent memory leak by removing component when not being used
  }, []);

  return (
    <>
      <nav
        className="navbar-container"
        style={{
          background: expandNav || !showBurger ? "hsla(0, 0%, 0%, .5)" : "none",
        }}
      >
        <div
          className="navbar-menu"
          onClick={() => handleClick()}
          style={{ transform: showBurger ? "none" : "translateY(-50vh)" }}
        >
          <div
            className={expandNav ? "burger burger-clicked" : "burger"}
            onClick={() => handleClick()}
          ></div>
        </div>
        <div
          className="navbar"
          style={{
            transform: expandNav || !showBurger ? "none" : "translateY(-50vh)",
          }}
        >
          {links.map((link: LinkInterface) => {
            return (
              <Link
                key={link.id}
                to={link.path}
                smooth={true}
                duration={1000}
                offset={-50}
                className="tags"
              >
                <span>0{link.id}</span>
                {link.path}
              </Link>
            );
          })}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
