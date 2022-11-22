import type { FC } from "react";

type TweetProps = {
  address: string;
  content: string;
  timestamp: number;
};

const Tweet: FC<TweetProps> = ({ address, content, timestamp }) => (
  <div>
    <div>{content}</div>
  </div>
);
export default Tweet;
