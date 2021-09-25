import classnames from "classnames";
import React, { FC } from "react";
import DialContainer from "../DialContainer";
import { DialSelectProps } from "./type";

const DialSelect: FC<DialSelectProps> = (props: DialSelectProps) => {
    const { className } = props;
    return (
        <div className={classnames(className, 'flex justify-stretch')}>
            <DialContainer className="flex-1"/>
        </div>
    );
};

export default DialSelect;
