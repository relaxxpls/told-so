import Footer from "./Footer";
import Header from "./Header";

import type { FC, PropsWithChildren } from "react";

type LayoutProps = {
  className?: string;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  className = "",
  children = null,
}) => (
  <div className={`flex min-h-screen flex-col overflow-auto ${className}`}>
    <Header />
    <main className="container flex flex-1 flex-col items-center gap-4 py-6">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
