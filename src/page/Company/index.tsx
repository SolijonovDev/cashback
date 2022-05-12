import { Button } from "@material-ui/core";
import { FC, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneCompany } from "../../store/actions/company-actions";
import { useAppSelector, useAppDispatch } from "./../../hooks/redux";
import s from "./com.module.scss";

export const Company: FC = () => {
  const params: { id: string | undefined } = useParams();
  const dispatch = useAppDispatch();

  const { isLoadingProducts, products } = useAppSelector(
    (state) => state.company
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneCompany(params.id));
  }, []);

  return (
    <div className={s.com}>
      <div className="container">
        {isLoadingProducts ? (
          <div className={s.loading}>
            <h1>Yuklanmoqda....</h1>
          </div>
        ) : (
          <div className={s.info}>
            <h1>Num items per page : {products.num_items_per_page}</h1>
            <h2>Page range: {products.page_range}</h2>
            <h2>Company Id: {products.params.company}</h2>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/home")}
        >
          Back
        </Button>
      </div>
    </div>
  );
};
