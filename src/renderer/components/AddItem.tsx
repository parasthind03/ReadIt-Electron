/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable prettier/prettier */
import { useContext, useState } from 'react';
import { AppContext } from 'renderer/context/Main.context';
import { ipcRenderer } from 'electron';

export default function AddItem() {
  const context = useContext(AppContext);
  const [url, setUrl] = useState<string>('');
  const [adding, setAdding] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>('');

  const handleAdd = () => {
    const isPresent = context?.items.filter((item) => item.url === url);
    if (url && isPresent?.length === 0) {
      setAdding(true);
      ipcRenderer.send('read-item', url);

      ipcRenderer.on('read-item-success', (_, newItem) => {
        // console.log('done', newItem);
        const id = context ? context?.items.length + 1 : 1;
        context?.setItems((items) => {
          items.push({ ...newItem, id, url });
          return items;
        });
        setAdding(false);
        setUrl('');
        context?.setModal(false);
      });
    } else if (url.length > 0) {
      setAlert('Item already exists');
      setTimeout(() => {
        setAlert('');
        setUrl('');
      }, 2000);
    }
  };

  return context?.modal ? (
    <>
      <div
        id="modal"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
      >
        {alert.length && <h4>{alert}</h4>}
        <input
          type="text"
          id="url"
          value={url}
          placeholder="Enter URL"
          onChange={(e) => setUrl(e.target.value)}
          autoFocus
        />
        <button
          type="button"
          id="add-item"
          disabled={url.length === 0}
          onClick={() => handleAdd()}
        >
          {!adding ? 'Add Item' : 'Adding'}
        </button>
        {!adding && (
          <button
            type="button"
            id="close-modal"
            onClick={() => context?.setModal(false)}
          >
            Cancel
          </button>
        )}
      </div>
    </>
  ) : null;
}
