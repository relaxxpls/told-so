import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import type { FC } from "react";

const Header: FC = () => (
  <header className="container navbar justify-between border-b border-white/10">
    <Link href="/" className="btn-ghost btn font-mono text-xl normal-case">
      Told So
    </Link>
    <ConnectButton />
  </header>
);

export default Header;
