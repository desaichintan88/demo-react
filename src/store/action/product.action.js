import {
  getProductListFailure,
  getProductListRequest,
  getProductListSuccess,
} from "../features/productListSlice";
import { ProductApiServices } from "../services/productApiServices";

export const getProductList = () => async (dispatch) => {
  dispatch(getProductListRequest());
  try {
    const res = await ProductApiServices.getProductList();
    dispatch(getProductListSuccess(res.data));
    console.log(res.data);
    return res;
  } catch (error) {
    dispatch(getProductListFailure(error));
  }
};
