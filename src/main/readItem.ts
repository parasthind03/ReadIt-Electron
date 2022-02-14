/* eslint-disable promise/no-callback-in-promise */
/* eslint-disable promise/always-return */
import { BrowserWindow } from 'electron';

type NewItemType = {
  screenshot: string;
  title: string | undefined;
};

let offscreenWindow: BrowserWindow | null;

function readItem(url: string, cb: (item: NewItemType) => void) {
  offscreenWindow = new BrowserWindow({
    width: 500,
    height: 500,
    show: false,
    webPreferences: {
      offscreen: true,
      devTools: false,
    },
  });

  offscreenWindow.loadURL(url);

  offscreenWindow.webContents.on('did-finish-load', () => {
    const title = offscreenWindow?.getTitle();

    offscreenWindow?.webContents.capturePage().then((image) => {
      const screenshot = image.toDataURL();

      offscreenWindow?.close();
      offscreenWindow = null;
      // console.log(url);
      cb({ title, screenshot });
    });
  });
}

export default readItem;
