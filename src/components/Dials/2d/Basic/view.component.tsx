import React, { FC } from "react";
import { numberFormat } from "../../common/utils";
import { BasicElementProps } from "./type";

const BasicElement: FC<BasicElementProps> = (props: BasicElementProps) => {
    const { hour, minute, second } = props;
    return (
        <div>
            {[hour, minute, second]
                .map((value) => numberFormat(value, 2))
                .join(":")}
        </div>
    );
};

export default BasicElement;
