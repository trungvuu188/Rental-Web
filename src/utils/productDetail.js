import { createSearchParams, useNavigate } from "react-router-dom";

export const useViewProductDetail = () => {
    const navigate = useNavigate();
  
    return ({ categoryId, productId }) => {
      navigate({
        pathname: "/product",
        search: createSearchParams({
          cate: categoryId,
          id: productId
        }).toString()
      });
    };
  };
