import React from 'react';
import style from './style.css';

interface IProps {
  text: string;
}

const Helper: React.FC<IProps> = ({ text }) => {
  return <h1 className={style.c}>{text}</h1>;
};

export { Helper };
