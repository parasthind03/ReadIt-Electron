/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';

type PropType = {
  children: JSX.Element[];
};

function Container({ children }: PropType) {
  const context = useContext(AppContext);

  const handleKey = (e: KeyboardEvent) => {
    const isLess: boolean | undefined =
      context?.items && context?.selectedIndex < context?.items.length - 1;
    if (e.key === 'ArrowDown' && isLess) {
      context?.setSelectedIndex(context?.selectedIndex + 1);
    } else if (
      e.key === 'ArrowUp' &&
      context?.selectedIndex !== undefined &&
      context?.selectedIndex > 0
    ) {
      context?.setSelectedIndex(context?.selectedIndex - 1);
    }
  };

  window.addEventListener('keydown', (e) => handleKey(e));

  return <div>{children}</div>;
}

export default Container;
