import React, { FC } from "react";
import classnames from "classnames";
import { BasicElement } from "../../components/Dials";
import { useTime } from "../../hooks";
import { DialContainerProps } from "./type";

const DialContainer: FC<DialContainerProps> = (props: DialContainerProps) => {
    const { className, DialElement = BasicElement, onClick } = props;
    const time = useTime();
    return (
        <div className={classnames(className, "flex flex-stretch")} onClick={onClick}>
            <DialElement className="flex-1" {...time} />
        </div>
    );
};

export default DialContainer;
