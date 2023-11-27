import { ToastContainer } from "react-toastify";
import Footer from "./componets/Footer";
import Nav from "./componets/Nav";
import ScrollToTop from "./componets/ScrollToTop";
import { ReduxProvider } from "./utils/provider";

import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "./globals.css";

export const metadata = {
  title: "HD Book store",
  description: "Read and add your insight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          <Nav />
          {children}
          <Footer />
          <ScrollToTop />
          <ToastContainer />
        </body>
      </ReduxProvider>
    </html>
  );
}
