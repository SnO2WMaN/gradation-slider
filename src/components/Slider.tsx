import clsx from "clsx";
import React, { useState, useMemo } from "react";
import { useMeasure } from "react-use";
import styled from "styled-components";

export const Pop: React.FC<{ className?: string; value: number }> = ({
  className,
  value,
}) => {
  return (
    <div className={clsx(className, "py-1", "px-2", "flex", "select-none")}>
      <span className={clsx("text-xs", "leading-tight")}>{value}</span>
    </div>
  );
};

export const Knob: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [ref, { height }] = useMeasure();
  return (
    <div
      {...props}
      ref={ref}
      style={{ ...props.style, width: Math.max(height) }}
    />
  );
};

export type Props = ContainerProps &
  Required<Pick<ContainerProps, "min" | "max" | "showMeasure" | "showPop">> & {
    handleChange: (e) => void;
    value: number;
    percentage: number;

    center: number;
  };

export const Component: React.FC<Props> = ({
  className,
  handleChange,
  value,
  percentage,
  showMeasure,
  showPop,
  ...props
}) => (
  <>
    <div className={clsx(className, "relative", "flex", "z-10")}>
      <input
        className={clsx(
          "relative",
          "z-20",
          "w-full",
          "h-full",
          "opacity-0",
          "cursor-pointer",
        )}
        type="range"
        onChange={handleChange}
        {...props}
      />
      <div className={clsx("absolute", "top-full", "inset-x-0", "select-none")}>
        {(showMeasure === true || showMeasure === "min") && (
          <div className={clsx("absolute", "right-full")}>
            <div className={clsx("flex")}>
              <span className={clsx("text-xs", "leading-tight", "ml-1/2")}>
                {props.min}
              </span>
            </div>
          </div>
        )}
        {(showMeasure === true || showMeasure === "max") && (
          <div className={clsx("absolute", "left-full")}>
            <div className={clsx("flex")}>
              <span className={clsx("text-xs", "leading-tight", "-ml-1/2")}>
                {props.max}
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        className={clsx("absolute", "inset-0", "z-10", "flex", "items-center")}
        style={{ transform: `translateX(${100 * percentage}%)` }}
      >
        <div className={clsx("absolute", "inset-y-0", "flex")}>
          <Knob
            className={clsx("thumb", "-ml-1/2", "rounded-full", "h-full")}
          />
        </div>
        {showPop && (
          <div className={clsx("absolute", "bottom-full", "flex")}>
            <Pop className={clsx("-ml-1/2")} value={value} />
          </div>
        )}
      </div>
      <div
        className={clsx(
          "bar-wrap",
          "absolute",
          "inset-0",
          "my-auto",
          "overflow-hidden",
          "h-1/4",
          "rounded",
        )}
      >
        <div
          className={clsx(
            "bar-invert",
            "absolute",
            "inset-0",
            "origin-right",
            "bg-white",
            "opacity-75",
          )}
          style={{ transform: `scaleX(${1 - percentage})` }}
        />
      </div>
    </div>
  </>
);
export const StyledComponent: typeof Component = styled(Component)`
  .bar-wrap {
    background: linear-gradient(
      1rad,
      hsl(328deg, 70%, 85%),
      hsl(258deg, 70%, 85%),
      hsl(188deg, 70%, 85%)
    );
  }
  .thumb {
    background: linear-gradient(
      1rad,
      hsl(328deg, 70%, 85%),
      hsl(258deg, 70%, 85%),
      hsl(188deg, 70%, 85%)
    );
  }
`;

export type ContainerProps = {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;

  showMeasure?: "min" | "max" | boolean;
  showPop?: boolean;
};
export const Slider: React.FC<ContainerProps> = ({
  min = 0,
  max = 100,
  step = 1,

  showMeasure = true,
  showPop = true,

  ...props
}) => {
  const center = (min + max) / 2 - (((min + max) / 2) % step);
  const [value, setValue] = useState(center);

  const percentage = useMemo(
    () => Math.min(1, Math.max(0, (value - min) / (max - min))),
    [value, min, max],
  );

  return (
    <StyledComponent
      {...props}
      min={min}
      max={max}
      center={center}
      step={step}
      value={value}
      showMeasure={showMeasure}
      showPop={showPop}
      handleChange={(e) => {
        setValue(e.target.value);
      }}
      percentage={percentage}
    />
  );
};
