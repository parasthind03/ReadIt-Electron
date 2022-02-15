/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useEffect } from 'react';
import { AppContext } from 'renderer/context/Main.context';

type PropType = {
  children: JSX.Element[];
};

function Container({ children }: PropType) {
  const context = useContext(AppContext);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      // console.log(context?.selectedIndex);
      // console.log(e.key);
      if (e.key === 'ArrowDown') {
        const index = context && context?.selectedIndex + 1;
        console.log(index);
        context?.setSelectedIndex(index!);
      } else if (
        e.key === 'ArrowUp' &&
        context !== null &&
        context.selectedIndex > 0
      ) {
        context?.setSelectedIndex(context?.selectedIndex - 1);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
}

export default Container;
