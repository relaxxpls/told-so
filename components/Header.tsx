import Link from "next/link";

import type { FC } from "react";

const Header: FC = () => (
  <header className="container navbar border-b border-white/10">
    <div className="flex-1">
      <Link
        href="/"
        className="btn-ghost btn text-xl normal-case text-cyan-200"
      >
        Told So
      </Link>
    </div>

    <div className="flex-none">
      <a href="#tweets" className="btn-ghost btn">
        My Tweets
      </a>
    </div>
  </header>
);

export default Header;
