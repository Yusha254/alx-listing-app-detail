import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layout= ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;