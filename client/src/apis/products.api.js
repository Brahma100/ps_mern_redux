import axios from "axios";

function service() {
    const getAllProducts = () => {
        console.log("API call");
        return axios.get('api/items')
            .then((res) => res.data)
            .catch((e) => e);
    };
    return {
        getAllProducts,
    };
}

const productsService = service();

export default productsService;