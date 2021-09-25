export const numberFormat = (num: number, digit: number = 2) => {
    let res = String(num);

    while (res.length < digit) {
        res = "0" + res;
    }

    return res;
};