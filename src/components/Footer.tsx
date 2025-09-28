import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 font-primary bg-gray-900">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a
          href="https://web.facebook.com/ctudanaoofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover hover:text-indigo-400"
        >
          CTU Danao Page
        </a>

        <a
          href="https://www.yourwebsite.com/jobs"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover hover:text-indigo-400"
        >
          Jobs
        </a>

        <a
          href="https://www.yourwebsite.com/presskit"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover hover:text-indigo-400"
        >
          Press kit
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4 text-gray-300">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </nav>

      <aside>
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by Alvin
          Hermosilla
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
