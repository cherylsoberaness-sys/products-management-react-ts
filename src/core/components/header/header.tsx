import type { ReactNode } from "react";

type Props = { 
    readonly title?: string;
    readonly subTitle?: string;
    readonly children: ReactNode;
}

export const Header: React.FC<Props> = ({title, subTitle, children}) => {
    return (
        <header>
            {children}
            <h1>{title}</h1>
            <p className="subtitle">{subTitle}</p>
        </header>
    )
}