import { StyledMovie } from "./style";

interface IMovieProps { image: string; text: string, onClick: () => void }

const Movie = ({ image, onClick, text }: IMovieProps) => {
    return (
        <StyledMovie onClick={onClick}>
            <img src={image} alt="Imagen de la tarjeta" />
            <p>{text}</p>
        </StyledMovie>
    );
};

export default Movie;