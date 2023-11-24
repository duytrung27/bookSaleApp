import "./globals.css";
import { ReduxProvider } from "./utils/provider";
import Nav from "./componets/Nav";

export const metadata = {
  title: "Book sale",
  description: "Read and add your insight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>
          <Nav />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
