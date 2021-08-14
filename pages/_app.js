import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-base flex relative min-h-screen w-full bg-black items-center justify-center">
      <div className="z-30 md:z-20 w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
