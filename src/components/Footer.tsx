import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-brandBeige text-gray-700 text-sm py-6 px-4 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <p className="text-center md:text-left">
          © 2025 Daly Radiance Aesthetics. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-brandPink text-xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-[#d15d2e] transition duration-300" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <SiTiktok className="hover:text-[#d15d2e] transition duration-300" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-[#d15d2e] transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}