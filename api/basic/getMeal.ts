import axios from "axios";

export const getMeal = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        String(date.getMonth() + 1).length === 1
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
    const day =
        String(date.getDate()).length === 1
            ? `0${date.getDate()}`
            : date.getDate();
    const today = `${year}${month}${day}`;
    return axios
        .get(
            `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=b9c4db2f1f754de2b50b71548be398bd&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010536&MLSV_FROM_YMD=${today}`
        )
        .then((res) => res.data.mealServiceDietInfo[1].row);
};
