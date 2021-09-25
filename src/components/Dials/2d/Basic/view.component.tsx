import classnames from "classnames";
import React, { FC } from "react";
import { numberFormat } from "../../common/utils";
import { BasicElementProps } from "./type";

const BasicElement: FC<BasicElementProps> = (props: BasicElementProps) => {
    const { className, hour, minute, second } = props;
    return (
        <div
            className={classnames(
                className,
                "flex justify-center items-center"
            )}
        >
            <div className="font-mono antialiased leading-none text-9xl font-semibold p-8 bg-indigo-800 rounded-lg ring ring-indigo-300 ring-offset-4 text-yellow-500 text-opacity-90">
                {[hour, minute, second]
                    .map((value) => numberFormat(value, 2))
                    .join(":")}
            </div>
        </div>
    );
};

export default BasicElement;
