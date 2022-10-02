import React from 'react';

type MenuGroup = {
  title: string;
  options: string[];
};

export type MenuProps = {
  menuOptions: MenuGroup;
  triggerChildren: React.ReactNode;
};
