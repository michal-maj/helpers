/* eslint-disable react/display-name */
import React, { FunctionComponent, ReactNode } from "react";

const withRandomNr =
  <P extends object>(Component: FunctionComponent<P>) =>
  (max: number) =>
  (props: P) => {
    const nr: number = Math.floor(Math.random() * max);

    return <Component {...props}>{nr}</Component>;
  };

const Display = ({ children }: { children?: ReactNode | number }) => (
  <span>{children}</span>
);

const DisplayRandomNr = withRandomNr(Display)(5);

export default function HocPage() {
  return (
    <div className="App">
      <DisplayRandomNr />
    </div>
  );
}
