/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';

export default function AddItem() {
  const context = useContext(AppContext);

  const handleAdd = () => {
    context?.setItems((items) => {
      items.push({
        title: 'Hello',
        screenshot: '',
        id: context?.items.length + 1,
      });
      return items;
    });

    context?.setModal(false);
  };

  return context?.modal ? (
    <>
      <div id="modal">
        <input type="text" id="url" placeholder="Enter URL" autoFocus />
        <button type="button" id="add-item" onClick={() => handleAdd()}>
          Add Item
        </button>
        <button
          type="button"
          id="close-modal"
          onClick={() => context?.setModal(false)}
        >
          Cancel
        </button>
      </div>
    </>
  ) : null;
}
