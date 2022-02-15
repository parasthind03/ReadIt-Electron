/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
import { ipcRenderer, shell } from 'electron';
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
};

type Props = {
  children: ReactFragment;
};

export const AppContext = createContext<AppContextInterface | null>(null);

export const Provider = ({ children }: Props) => {
  const [modal, setModal] = useState(false);
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

  ipcRenderer.on('menu-open-item', () => {
    
  });

  ipcRenderer.on('open-in-browser', () => {
    
  });

  useEffect(() => {
    if (items.length)
      localStorage.setItem('readit-items', JSON.stringify(items));
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
