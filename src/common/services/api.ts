import axios from "axios";

export interface apiResponse {
    error: boolean;
    response: { message: string; data: string | object };
}
const Api = {
    sendRequest: async (
        endpoint: string,
        method: string,
        dataType?: string
    ) => {
        const response: apiResponse = {
            error: false,
            response: { message: "", data: "" },
        };

        try {
            const apiResponse = await axios({
                method: method,
                url: process.env.NEXT_PUBLIC_BACKEND_URL + endpoint,
            });

            response.error = false;
            response.response = apiResponse.data;
        } catch (e: any) {
            response.error = true;
            response.response = { message: "error", data: "" };
        }
        return response;
    },
};

export default Api;
