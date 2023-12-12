import { useLocalStorage } from "usehooks-ts";
import { moviesEn, moviesEs } from "../../../data/movies";
import { ILang } from "../../../types/language";
import Movie from "../../molecules/movie";
import { StyledHomePage } from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [lang] = useLocalStorage<ILang>('lang', 'en');
  const navigate = useNavigate();

  const movies = lang === 'en' ? moviesEn : moviesEs;

  return (
    <StyledHomePage>
      {
        movies.map((movie) => (
          <Movie
          onClick={() => navigate(movie.url)}
            key={movie.id}
            image={movie.poster}
            text={movie.title}
          />
        ))
      }
    </StyledHomePage>
  );
};

export default Home;
