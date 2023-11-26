import { ReduxProvider } from "./utils/provider";
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";

import "animate.css";
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
        </body>
      </ReduxProvider>
    </html>
  );
}
