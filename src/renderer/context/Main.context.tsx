/* eslint-disable prettier/prettier */
import { createContext, Dispatch, ReactFragment, useState } from 'react';

interface AppContextInterface {
  modal: boolean;
  items: object[];
  setModal: Dispatch<boolean>;
  setItems: Dispatch<[]>;
}

interface Props {
  children: ReactFragment;
}

export const AppContext = createContext<AppContextInterface | null>(null);

export const Provider = ({ children }: Props) => {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <AppContext.Provider value={{ modal, setModal, items, setItems }}>
      {children}
    </AppContext.Provider>
  );
};
