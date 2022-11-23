import Link from "next/link";

import type { FC } from "react";

export type PostProps = {
  address: string;
  id: number;
  title: string;
  body: string;
  media: string;
  timestamp: number;
};

const Post: FC<PostProps> = ({ title, body, address, id, timestamp }) => (
  <Link
    href={`/${address}/${id}`}
    className="card border border-white/10 max-sm:card-compact"
  >
    <div className="card-body">
      <div className="link-hover link-accent link card-title text-2xl">
        {title}
      </div>

      <span className="text-xs text-neutral-content">
        📝{" "}
        <Link href={address} className="link-hover link">
          {address}
        </Link>{" "}
        | 🕰️{" "}
        {new Date(timestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>

      <p className="font-serif tracking-wider">{body}</p>
    </div>
  </Link>
);

export default Post;
