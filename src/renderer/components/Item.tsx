/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */

import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';

type Props = {
  screenshot: string;
  title: string;
  url: string;
  index: number;
};

export default function Item({ screenshot, title, url, index }: Props) {
  const context = useContext(AppContext);

  const handleDoubleClick = () => {
    window.open(url);
  };

  return (
    <div
      className={`read-item ${
        context?.selectedIndex === index ? 'selected' : ''
      }`}
      onDoubleClick={() => {
        handleDoubleClick();
      }}
      onClick={() => context?.setSelectedIndex(index)}
    >
      <img src={screenshot} alt="" />
      <h2>{title}</h2>
    </div>
  );
}
