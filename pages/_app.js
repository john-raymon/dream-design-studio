import '../styles/globals.css'
import 'lite-react-ui/css';
import Logo from './../public/colorful-logo-rocasole.svg';
import FooterLogo from './../public/black-white-rocasole-logo.svg';
import { Button } from 'lite-react-ui';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-base flex flex-col relative min-h-screen w-full bg-rocasole-gray">
      <div className="z-30 md:z-20 bg-rocasole-gray">
        <header className="flex container max-w-6xl mx-auto mt-14 px-6">
          <div className="w-full mx-auto">
            <div className="w-32 h-32">
              <Logo />
            </div>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
      <footer className="z-20 w-full p-12 bg-black sticky bottom-0">
        <div className="flex flex-col md:flex-row justify-between w-full space-y-6 max-w-6xl mx-auto">
          <div className="mt-6 md:mt-0 order-2 md:order-1 justify-between flex flex-col text-white space-y-6">
            <ul className="flex w-full text-center flex-col md:flex-row md:space-x-4">
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
            <div className="flex self-center md:self-start items-center space-x-6">
              <div className="w-12 h-12">
                <FooterLogo />
              </div>
              <p className="text-white text-sm">
                Copyright © 2021 | All rights reserved.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 text-white flex flex-col justify-between space-y-5">
            <p className="text-lg text-center md:text-right">
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
