/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
import { ipcRenderer } from 'electron';
import {
  createContext,
  Dispatch,
  ReactFragment,
  useState,
  useEffect,
  SetStateAction,
} from 'react';

export type ItemType = {
  screenshot: string;
  title: string;
  url: string;
};

type AppContextInterface = {
  modal: boolean;
  items: ItemType[];
  setModal: Dispatch<boolean>;
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  selectedIndex: number;
  setSelectedIndex: Dispatch<number>;
  search: string;
  setSearch: Dispatch<string>;
};

type Props = {
  children: ReactFragment;
};

export const AppContext = createContext<AppContextInterface | null>(null);

export const Provider = ({ children }: Props) => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<ItemType[]>(
    JSON.parse(localStorage.getItem('readit-items')!) || []
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  ipcRenderer.on('add-item', () => {
    setModal(true);
  });

  ipcRenderer.on('delete-item', () => {
    setItems((els) => els.filter((_, index) => index !== selectedIndex));
  });

  ipcRenderer.on('delete-all-items', () => {
    setItems([]);
  });

  useEffect(() => {
    if (items.length)
      localStorage.setItem('readit-items', JSON.stringify(items));
    console.log(items)
  }, [items, items.length]);

  return (
    <AppContext.Provider
      value={{
        modal,
        setModal,
        items,
        setItems,
        selectedIndex,
        setSelectedIndex,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
