import { createModel } from "@rematch/core";
import { RootModel } from "./models";

type TimeState = {
    hour: number
    minute: number
    second: number,
    millisecond: number
}

function getTime(): TimeState {
    const time = new Date()
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        millisecond: time.getMilliseconds()
    }
}

let timer: number | undefined;

export const time = createModel<RootModel>()({
    state: getTime(),
    reducers: {
        updateTime(state: TimeState, { hour, minute, second, millisecond }: Partial<TimeState>) {
            if (hour) {
                state.hour = hour;
            }
            if (minute) {
                state.minute = minute;
            }
            if (second) {
                state.second = second;
            }
            if (millisecond) {
                state.millisecond = millisecond;
            }
            return state
        }
    },
    effects: dispatch => ({
        startUpdatingTime: (_payload, _state) => {
            const updateTime = () => {
                const { hour, minute, second, millisecond } = getTime()
                dispatch.time.updateTime({ hour, minute, second, millisecond });
                timer = setTimeout(() => updateTime(), 1000 - millisecond * 2)
            }
            updateTime();
        },
        endUpdateTime: (_payload, _state) => {
            clearTimeout(timer)
        }
    })

})
