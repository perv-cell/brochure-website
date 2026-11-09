import { Outlet } from 'react-router';
import Banner from '../elements/top-banner/Banner';
import Navbar from '../elements/navbar/Navbar';
import Footer from '../elements/footere/Footer';

export default function Layout() {
  return (
    <>
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
