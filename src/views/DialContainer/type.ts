import React from "react";
import { DialBaseComponentProps } from "../../components/Dials/common/types";

export interface DialContainerProps {
    className?: string;
    DialElement?: React.FC<DialBaseComponentProps>
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
