import { ThemeProvider } from '@mui/material';
import theme from './styles/index'
import Header from './components/Header/Header';
import Banner from './components/Banner';
import About from './components/About';
import Plants from './components/Plants/Plants'
import FAQ from './components/FAQ';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing/Pricing';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer';
import Basket from './components/Basket'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Basket/>
        <Header />
        <Banner />
        <About />
        <Plants />
        <FAQ />
        <Bestsellers />
        <Statistics />
        <Pricing />
        <Contacts />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
