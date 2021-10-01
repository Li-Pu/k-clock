import { LoadableComponent } from "@loadable/component";
import React from "react";
import { DialBaseComponentProps } from "../../components/Dials/common/types";

export interface DialContainerProps {
    className?: string;
    DialElement?: LoadableComponent<DialBaseComponentProps>
    onClick?: React.MouseEventHandler<HTMLDivElement>
}
