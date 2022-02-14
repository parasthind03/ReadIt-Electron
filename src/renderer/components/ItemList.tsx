/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';
import Item from './Item';

export default function ItemList() {
  const context = useContext(AppContext);
  return (
    <main>
      {context?.items.length ? (
        <div id="items">
          {context.items.map((el) => {
            return (
              <Item
                key={el.id}
                screenshot={el.screenshot}
                title={el.title}
                url={el.url}
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
