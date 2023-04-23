import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./nav.scss";

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
  const [expand, setExpand] = useState<boolean>(true);
  const [showNav, setShowNav] = useState<boolean>(true);

  const handleClick = (): void => setExpand(!expand);

  useEffect(() => {
    const adjustNavOnScroll = (): void => {
      if (window.scrollY > 500) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    window.addEventListener("scroll", adjustNavOnScroll);
    return () => window.removeEventListener("scroll", adjustNavOnScroll);
    // used to prevent memory leak by removing component when not being used
  }, []);

  return (
    <nav
      className="navbar-container"
      style={{ background: expand && showNav ? "hsla(0, 0%, 0%, .5)" : "none" }}
    >
      <div
        className="navbar-menu"
        onClick={() => handleClick()}
        style={{ transform: showNav ? "none" : "translateY(-50vh)" }}
      >
        <div
          className={expand ? "burger burger-clicked" : "burger"}
          onClick={() => handleClick()}
        ></div>
      </div>
      <div
        className="navbar"
        style={{ transform: expand && showNav ? "none" : "translateY(-50vh)" }}
      >
        {links.map((link: LinkInterface) => {
          return (
            <Link
              key={link.id}
              to={link.path}
              smooth={true}
              duration={1000}
              offset={-50}
            >
              <a className="tags">
                <span>0{link.id}</span>
                {link.path}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
