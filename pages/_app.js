import '../styles/globals.css'
import 'lite-react-ui/css';
import Logo from './../public/colorful-logo-rocasole.svg';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-base flex flex-col p-4 relative min-h-screen w-full bg-rocasole-gray">
      <header className="flex container max-w-3xl mx-auto mt-14">
        <div className="w-full mx-auto">
          <div className="w-32 h-32">
            <Logo />
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
