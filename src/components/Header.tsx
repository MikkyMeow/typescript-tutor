import React, { FC, useState } from 'react';

interface IProps {
  title?: string;
  children?: never;
}

export const Header: FC<IProps> = ({ title = '' }) => {
  const [counter, setCounter] = useState<number>(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h2>{title.toUpperCase()}</h2>
      <h3>{counter.toFixed()}</h3>
      <button onClick={decrease}>descrease</button>
      <button onClick={increase}>inscrease</button>
    </div>
  );
};

Header.defaultProps = {
  title: 'hello',
};
