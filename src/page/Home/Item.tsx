import { FC } from "react";
import s from "./home.module.scss";
import { useHistory } from 'react-router-dom';

interface ItemProps {
  item: any;
}

export const Item: FC<ItemProps> = ({ item: v }) => {
  console.log("item: ", v);
  const history=useHistory()

  return (
    <div className={s.item} onClick={()=>history.push(`/company/${v.id}`)}>
      <img src={v?.logo?.urls?.original} alt="pho" />
      <h1>{v.id}</h1>
      <p>{v.name}</p>
      <p>{v.short_description}</p>
      <p>{v.created_at}</p>
    </div>
  );
};
