/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import { useContext } from 'react';

import { AppContext } from 'renderer/context/Main.context';
import Item from './Item';

export default function ItemList() {
  const context = useContext(AppContext);

  return (
    <main>
      {context?.items.length ? (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div id="items">
          {context.items.map((el, index) => {
            return (
              <Item
                key={index}
                screenshot={el.screenshot}
                title={el.title}
                url={el.url}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <p id="no-items">No Items</p>
      )}
    </main>
  );
}
