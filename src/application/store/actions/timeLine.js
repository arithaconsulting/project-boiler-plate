import { HOME, FAIL, SUCCESS, GET_OTH_SUPT_APP_DATA } from "../action-types";
import { baseURLwithPORT } from "../../config";
export const getOtherSupportingAppData = (authToken) => (dispatch) =>
  dispatch({
    type: GET_OTH_SUPT_APP_DATA,
    payload: {
      request: {
        url: `${baseURLwithPORT}/api/v1/get/mobileAppDetails`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      },
      options: {
        onSuccess({ response }) {
          const { data, error } = response;
          if (data.status !== 200) {
            // Toast.show(data.message ? data.message : 'Something went wrong');
          }
          if (data.status === 200) {
            dispatch({
              type: `${GET_OTH_SUPT_APP_DATA}_${SUCCESS}`,
              payload: { ...data },
            });
            dispatch({
              type: HOME,
              payload: { ...data },
            });
            return Promise.resolve({ ...data });
          }
          dispatch({
            type: `${GET_OTH_SUPT_APP_DATA}_${FAIL}`,
            payload: { ...error },
          });
          return Promise.reject(error);
        },
        onError(exception) {
          if (exception.error.isAxiosError) {
            const {
              response: { data: dataError },
            } = exception.error;
            dispatch({
              type: `${GET_OTH_SUPT_APP_DATA}_${FAIL}`,
              payload: { dataError },
            });
            return Promise.reject(dataError);
          }
          dispatch({
            type: `${GET_OTH_SUPT_APP_DATA}_${FAIL}`,
            payload: {},
          });
          return Promise.reject();
        },
      },
    },
  });
