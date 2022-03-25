import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-3xl w-full mx-auto">
      <hr />
      <div className="py-8">
        <h4 className="text-center text-xl font-semibold pb-4">Contact me</h4>
        <div className="grid grid-cols-4 gap-x-4">
          <Link href="https://www.facebook.com/zileang.sek.7">
            <a className="text-center" target="_blank">
              Facebook
            </a>
          </Link>
          <Link href="https://www.instagram.com/___sokdara_dara___">
            <a className="text-center" target="_blank">
              Instagram
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/bunsy-chhay-518447139">
            <a className="text-center" target="_blank">
              LinkedIn
            </a>
          </Link>
          <Link href="https://github.com/HiromasyKh">
            <a className="text-center" target="_blank">
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
