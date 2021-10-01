import classnames from "classnames";
import React, { FC, useState, useCallback, useMemo } from "react";
import DialContainer from "../DialContainer";
import dials, { BasicElement } from "../../components/Dials";
import { DialSelectProps } from "./type";

const DialSelect: FC<DialSelectProps> = (props: DialSelectProps) => {
    const { className } = props;
    const [dialIndex, setDialIndex] = useState(0);
    const [selecting, setSelecting] = useState(false);

    const toggleSelecting = useCallback(() => {
        setSelecting(!selecting);
    }, [selecting]);

    const set2PrevDial = useCallback(() => {
        setDialIndex((dialIndex + dials.length - 1) % dials.length);
    }, [dials, dialIndex]);

    const set2NextDial = useCallback(() => {
        setDialIndex((dialIndex + 1) % dials.length);
    }, [dials, dialIndex]);

    const currentDial = useMemo(() => {
        return dials[dialIndex];
    }, [dials, dialIndex]);

    return (
        <div className={classnames(className, "flex justify-stretch")}>
            <div>
                <i
                    className={classnames(
                        "iconfont fixed top-0 right-0 p-2 text-6xl text-white cursor-pointer opacity-10 hover:opacity-80",
                        `icon-${selecting ? "fangda" : "suoxiao"}`
                    )}
                    onClick={toggleSelecting}
                ></i>
            </div>
            <div className="flex flex-1 justify-stretch align-center">
                <div
                    className={classnames(
                        "flex",
                        selecting ? "w-1/12" : "hidden"
                    )}
                >
                    <i
                        className="iconfont icon-zuo text-6xl text-blue-400 active:text-gray-300 m-auto cursor-pointer"
                        onClick={set2PrevDial}
                    ></i>
                </div>
                <DialContainer
                    className={classnames(
                        selecting ? "h-10/12 w-10/12" : "flex-1"
                    )}
                    DialElement={currentDial}
                    onClick={() => (selecting ? toggleSelecting() : null)}
                />
                <div
                    className={classnames(
                        "flex",
                        selecting ? "w-1/12" : "hidden"
                    )}
                >
                    <i
                        className="iconfont icon-you text-6xl text-blue-400 active:text-gray-300 m-auto cursor-pointer"
                        onClick={set2NextDial}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default DialSelect;
