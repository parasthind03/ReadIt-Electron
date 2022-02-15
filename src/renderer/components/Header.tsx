/* eslint-disable prettier/prettier */
import { ipcRenderer } from 'electron';
import { useContext, useRef } from 'react';
import { AppContext } from 'renderer/context/Main.context';

export default function Header() {
  const context = useContext(AppContext);
  const searchInput = useRef<HTMLInputElement>(null);

  ipcRenderer.on('search-item', () => {
    searchInput?.current?.focus();
  });

  return (
    <>
      <header>
        <button
          type="button"
          id="show-modal"
          onClick={() => context?.setModal(true)}
        >
          +
        </button>
        <input
          type="text"
          id="search"
          placeholder="Search"
          ref={searchInput}
          onChange={(e) => context?.setSearch(e.target.value)}
        />
      </header>
    </>
  );
}
