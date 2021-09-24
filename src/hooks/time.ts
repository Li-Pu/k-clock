import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../models";

const useTime = () => {
    const dispatch = useDispatch<Dispatch>();

    useEffect(() => {
        dispatch.time.startUpdatingTime();
        return () => dispatch.time.endUpdateTime();
    }, []);

    const { hour, minute, second, millisecond } = useSelector(
        (rootState: RootState) => rootState.time
    );

    return { hour, minute, second, millisecond }
}

export default useTime;