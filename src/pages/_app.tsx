import clsx from "clsx";
import { AppProps } from "next/app";
import React from "react";

import "~/styles/tailwind.css";

type Props = AppProps & { className?: string };
const App: React.FC<Props> = ({ Component, pageProps, className }) => {
  return (
    <div className={clsx(className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
