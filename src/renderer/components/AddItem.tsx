/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable prettier/prettier */
import { useContext, useState } from 'react';
import { AppContext } from 'renderer/context/Main.context';
import { ipcRenderer } from 'electron';

export default function AddItem() {
  const context = useContext(AppContext);
  const [url, setUrl] = useState<string>('');

  const handleAdd = () => {
    ipcRenderer.send('read-item', url);

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
        <input
          type="text"
          id="url"
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.target.value)}
          autoFocus
        />
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
