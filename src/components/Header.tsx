import React, { FC } from "react";

interface IProps {
  title?: string;
}

export const Header: FC<IProps> = ({ title = "" }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};
