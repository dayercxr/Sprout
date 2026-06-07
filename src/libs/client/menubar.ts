import React, { SetStateAction } from "react";

export const MenubarHandlers = {
  openMenubar: (
    callback: React.Dispatch<SetStateAction<HTMLButtonElement | null>>,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    callback(event.currentTarget);
  },

  closeMenubar: (
    callback: React.Dispatch<SetStateAction<HTMLButtonElement | null>>
  ) => {
    callback(null);
  }
};
