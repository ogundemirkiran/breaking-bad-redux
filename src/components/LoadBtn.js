import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";

function LoadBtn({ nextPage }) {
  const dispatch = useDispatch();

  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  return (
    <div>
      {hasNextPage && (
        <button
          style={{
            padding: 10,
            color: "black",
            fontSize: 15,
            borderRadius: 5,
            marginBottom: 20,
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => dispatch(fetchCharacters(nextPage))}
        >
          Load More {nextPage}
        </button>
      )}
      {!hasNextPage && (
        <div
          style={{
            color: "black",
            fontSize: 20,
            marginBottom: 30,
            fontWeight: "bold",
          }}
        >
          There is nothing to be shown.
        </div>
      )}
    </div>
  );
}

export default LoadBtn;
