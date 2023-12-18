import { check } from "k6"

export class BaseHelper {
    checkResponseStatusIs200(response) {
        if (response.status != 200) console.log("Response status is not 200")
        check(response, {
            "status was 200": (r) => r.status == 200
        });
    }

    checkResponseTimeIsLess500ms(response) {
        check(response, {
            "response time is less than 0.5s": (r) => r.timings.duration < 500,
        });
    }

    currentDate() {
        const currentDate = new Date();
        const dayOfMonth = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${dayOfMonth} ${hours}:${minutes}:${seconds}`;

        return formattedDate
    }

}