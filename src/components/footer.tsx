import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import footer from "../assets/footer.png";

export default function Footer() {
  return (
    <footer className="pt-8">
      <div className="mx-auto flex w-[550px] justify-between">
        <img src={github} alt="Github" className="w-20" />
        <img src={instagram} alt="Instagram" className="w-20" />
        <img src={email} alt="Email" className="w-20" />
        <img src={phone} alt="Phone" className="w-20" />
      </div>

      <div className="mt-10 h-[130px] w-full">
        <img
          src={footer}
          alt="Footer"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </footer>
  );
}
