import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import type { FC } from "react";

export const Title: FC = () => (
  <Link
    href="/"
    className="btn-ghost btn font-brand text-5xl normal-case tracking-wider text-primary"
  >
    Told<b className="text-accent">.So</b>
  </Link>
);

const Header: FC = () => (
  <header className="container navbar justify-between border-b border-white/10">
    <Title />
    <ConnectButton />
  </header>
);

export default Header;
