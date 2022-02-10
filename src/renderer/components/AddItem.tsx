/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';

export default function AddItem() {
  const context = useContext(AppContext);
  return context?.modal ? (
    <>
      <div id="modal">
        <input type="text" id="url" placeholder="Enter URL" />
        <button type="button" id="add-item">
          Add Item
        </button>
        <button type="button" id="close-modal" onClick={() => context?.setModal(false)}>
          Cancel
        </button>
      </div>
    </>
  ) : null;
}
