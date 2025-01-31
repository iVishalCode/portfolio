import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href={"/service"}>Services</Link>
      <Link href={"/work"}>Work</Link>
      <Link href={"/resume"}>Resume</Link>
      <Link href={"/skill"}>Skill</Link>
      <Link href={"/testimonils"}>Testimonils</Link>
      <Link href={"/contact"}>Contact</Link>
    </nav>
  );
};
