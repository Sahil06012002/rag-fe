import React from "react";

interface ButtonProp {
    children : React.ReactNode,
    onClick : () => void
}
export default function Button({children,onClick} : ButtonProp ) {
    return <button className="button" onClick={onClick}>
        {children}
    </button>
} 