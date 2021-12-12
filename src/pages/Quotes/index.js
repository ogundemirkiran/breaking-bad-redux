import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import ProductItem from "./ProductItem";
import "./style.css";

function Quotes() {
  const dispatch = useDispatch();

  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    status === "idle" && dispatch(fetchAllQuotes());
  }, [dispatch, status]);

  return (
    <div style={{ marginLeft: 50, marginRight: 100 }}>
      <h1>Quotes</h1>
      {status === "failed" && <Error error={error} />}

      {status === "loading" && <Loading />}

      {status === "succeeded" &&
        data.map((item) => <ProductItem key={item.quote_id} item={item} />)}

      {status === "succeeded" && (
        <div className="quotesInfo"> {data.length} Quotes </div>
      )}
    </div>
  );
}

export default Quotes;
