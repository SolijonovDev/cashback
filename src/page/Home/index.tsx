import React from "react";
import { useEffect } from "react";
import s from "./home.module.scss";
import { CustomizedTables } from "./Table";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { getCompanies } from "./../../store/actions/company-actions";

interface item {
  id: number;
  name: string;
  short_description: string;
  created_at: string;
}
export const Home = () => {
  const { items, loading, error, errorMessage } = useAppSelector(
    (state) => state.company
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!items.length){
      dispatch(getCompanies());
    }
  }, []);

  return (
    <div className={s.home}>
      <div className="container">
        {loading ? (
          <div>Yuklanmoqda... </div>
        ) : (
          <div className={s.items}>
           {
             items.length ?
              <CustomizedTables items={items} />
             :
             <div>Kompaniyalar topilmadi</div>
           }
          </div>
        )}
      </div>
    </div>
  );
};
