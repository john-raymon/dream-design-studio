import '../styles/globals.css'
import 'lite-react-ui/css';
import Logo from './../public/colorful-logo-rocasole.svg';
import FooterLogo from './../public/black-white-rocasole-logo.svg';
import { Button } from 'lite-react-ui';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-base flex flex-col relative min-h-screen w-full bg-rocasole-gray">
      <header className="flex container max-w-6xl mx-auto mt-14 px-6">
        <div className="w-full mx-auto">
          <div className="w-32 h-32">
            <Logo />
          </div>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="w-full py-12 bg-black sticky bottom-0">
        <div className="flex justify-between w-full max-w-6xl mx-auto">
          <div className="justify-between flex flex-col text-white">
            <ul className="flex space-x-4">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12">
                <FooterLogo />
              </div>
              <p className="text-white text-sm">
                Copyright © 2021 | All rights reserved.
              </p>
            </div>
          </div>
          <div className="text-white flex flex-col justify-between space-y-5">
            <p className="text-lg text-right">
              Founder story: Why we&apos;re building Rocasole for parents.
            </p>
            <Button inverted buttonType="tertiary">
              Read the story
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp
