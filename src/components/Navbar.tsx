import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import myImage from '../artwork/logo.jpg'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
            aria-label="Top navigation"
        >
          {/* Left: Logo, title, and socials */}
          <div className="flex items-center space-x-6">
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/dalyradianceaesthetics/?igsh=ODZ2NTUzM2g4bWly&utm_source=qr#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5 text-gray-600 hover:text-brandPink transition" />
              </a>
              <a href="https://www.tiktok.com/@dalyradianceaesthetics?_t=ZN-8x48qIQLV7n&_r=1" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="h-5 w-5 text-gray-600 hover:text-brandPink transition" />
              </a>
              <a href="https://www.facebook.com/people/Daly-Radiance-Aesthetics/61562558242378/?mibextid=wwXIfr&rdid=QfVczoFT9ZLrRcFM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Tjyw4eYsd%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-5 w-5 text-gray-600 hover:text-brandPink transition" />
              </a>
            </div>

            {/* Logo + Name */}
            <div className="flex items-center space-x-2">
              <img src={myImage} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-brandPink">
              Daly Radiance
            </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-brandPink font-medium transition"
                >
                  {item.name}
                </a>
            ))}
          </div>

          {/* Burger icon for mobile */}
          <div className="md:hidden">
            <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 hover:text-brandPink"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
            as="div"
            className="md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-white p-4">
            <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-brandPink">
              Daly Radiance
            </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                  <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg text-gray-700 hover:text-brandPink"
                  >
                    {item.name}
                  </a>
              ))}
            </div>

            {/* Socials in mobile menu */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.instagram.com/dalyradianceaesthetics/?igsh=ODZ2NTUzM2g4bWly&utm_source=qr#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5 text-gray-600 hover:text-brandPink" />
              </a>
              <a href="https://www.tiktok.com/@dalyradianceaesthetics?_t=ZN-8x48qIQLV7n&_r=1" target="_blank" rel="noopener noreferrer">
                <SiTiktok className="h-5 w-5 text-gray-600 hover:text-brandPink" />
              </a>
              <a href="https://www.facebook.com/people/Daly-Radiance-Aesthetics/61562558242378/?mibextid=wwXIfr&rdid=QfVczoFT9ZLrRcFM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Tjyw4eYsd%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-5 w-5 text-gray-600 hover:text-brandPink" />
              </a>
            </div>
          </div>
        </Dialog>
      </header>
  )
}
