import axios from "axios";

export const ProductApiServices = {
  getProductList: async () => {
    let res = await axios.get("http://192.168.1.86/wp/wp-json/wc/v3/products", {
      headers: {
        "Consumer-Key": "ck_dbde06a50737dd4e711d465d0f77fc786a0c0aec",
        "Secret-Key": "cs_c09f4671722747f4942c1000cb68a0a01b733cc3",
      },
    });
    console.log(res);
  },
};
