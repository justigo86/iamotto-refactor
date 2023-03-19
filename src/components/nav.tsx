import { useState } from "react";
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    text: "home",
  },
  {
    id: 2,
    text: "projects",
  },
  {
    id: 3,
    text: "about",
  },
  {
    id: 4,
    text: "connect",
  },
];

const Nav = () => {
  const [expand, setExpand] = useState(true);
  const [showNav, setShowNav] = useState(true);

  const handleClick = () => setExpand(!expand);

  const adjustNavOnScroll = () => {
    if (window.scrollY > 500) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };
  window.addEventListener("scroll", adjustNavOnScroll);

  return (
    <nav
      className="navbarContainer"
      style={{ background: expand && showNav ? "none" : "hsla(0, 0%, 0%, .5)" }}
    >
      <div
        className="menu"
        onClick={() => handleClick()}
        style={{ transform: showNav ? "none" : "translateY(-50vh)" }}
      >
        <div className="burger"></div>
      </div>
      <div className="navbar">
        {links.map(link => {
          return (
            <Link to={link.text} smooth={true} duration={1000} offset={-50}>
              <a className="tags" key={link.id}>
                <span>0{link.id}</span>
                {link.text}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
