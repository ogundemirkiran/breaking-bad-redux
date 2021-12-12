import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import LoadBtn from "../../components/LoadBtn";
import "./style.css";

function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);

  useEffect(() => {
    status === "idle" && dispatch(fetchCharacters());
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <div>
      <h1> Characters </h1>

      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((res) => (
          <div key={res.char_id}>
            <Link to={`/char/${res.char_id}`}>
              <img alt={res.name} src={res.img} className="character" />
            </Link>
            <div className="charName"> {res.name}</div>
          </div>
        ))}
      </Masonry>

      {status === "loading" && <Loading />}
      {status === "succeeded" && <LoadBtn nextPage={nextPage} />}
    </div>
  );
}

export default Home;
