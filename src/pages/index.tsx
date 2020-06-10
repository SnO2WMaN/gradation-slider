import clsx from "clsx";
import React from "react";

import { Slider } from "~/components/Slider";

export type Props = {
  className?: string;
  userAgent?: string;
};
export const Page: React.FC<Props> = ({ className }) => {
  return (
    <main className={clsx(className)}>
      <Slider />
    </main>
  );
};

export default Page;
