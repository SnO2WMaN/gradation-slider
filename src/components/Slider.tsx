import clsx from "clsx";
import React from "react";

export type Props = ContainerProps;

export const Component: React.FC<Props> = ({ className }) => (
  <input className={clsx(className)} type="range" />
);

export type ContainerProps = { className?: string };
export const Slider: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />;
};
