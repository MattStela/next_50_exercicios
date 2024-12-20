import '../app/globals.css';
import Header from '../app/components/header';
import Footer from '../app/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

