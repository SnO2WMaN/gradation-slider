import centered from "@storybook/addon-centered/react";
import { boolean, number, radios, withKnobs } from "@storybook/addon-knobs";
import clsx from "clsx";
import React from "react";

import { Slider } from "~/components/Slider";
import "~/styles/tailwind.css";
import tailwind from "~/utils/tailwind";

export default {
  title: "Slider",
  component: Slider,
  decorators: [centered, withKnobs],
  parameters: {
    backgrounds: [
      {
        name: "default",
        value: "#FFF",
        default: true,
      },
      {
        name: "gray-100",
        value: tailwind.theme.colors.gray[100],
      },
    ],
  },
};

export const NoStyling = () => {
  const step = number("Step", 1, { min: 0.01, max: 100, step: 1 });
  const min = number("Min", 0, { min: -100, max: 1000 });
  const max = number("Max", 100, { min: min + step, max: 1000 });
  const showMeasure = radios(
    "Show Measure",
    { all: "all", min: "min", max: "max", none: "none" },
    "all",
  );
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      showPop={boolean("Show Pop", false)}
      showMeasure={
        showMeasure === "all" || showMeasure === "none"
          ? showMeasure === "all"
          : showMeasure
      }
    />
  );
};
export const Larger = () => <Slider className={clsx("w-64", "h-6")} />;

export const EditMin = () => <Slider min={-50} />;
export const EditMax = () => <Slider max={255} />;
