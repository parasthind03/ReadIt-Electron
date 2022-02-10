/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AppContext } from 'renderer/context/Main.context';

export default function Header() {
  const context = useContext(AppContext);

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
        <input type="text" id="search" placeholder="Search" />
      </header>
    </>
  );
}
