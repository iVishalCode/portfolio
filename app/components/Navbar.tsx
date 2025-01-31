import Link from "next/link";
import { deflate } from "zlib";
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/">Logo</Link>
      <ul>
        <li>
          <Link href="/services">Service</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
