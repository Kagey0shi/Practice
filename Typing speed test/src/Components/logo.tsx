import logo from "../assets/images/logo-large.svg";
import logoMobile from "../assets/images/logo-small.svg";

export default function Logo() {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
      <img src={logoMobile} alt="Logo" className="small" />
    </>
  );
}
