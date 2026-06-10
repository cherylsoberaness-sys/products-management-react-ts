import React, { type ReactNode } from "react";
import { Header } from "../header/header";
import { type MenuOption } from "../../types/menu-option-types";
import { Menu } from "../menu/menu";


type Props = {
    readonly children: ReactNode;
    readonly appTitle?: string;
    readonly subTitle?: string ;
    readonly menuOptions: MenuOption[];
}

export const Layout: React.FC<Props> = ({children, appTitle, subTitle, menuOptions}) => {

  return (
    <>
        <Header title={appTitle} subTitle={subTitle}>
            <Menu options={menuOptions}></Menu>
        </Header>
        <main>{children}</main>
    </>
  );
}