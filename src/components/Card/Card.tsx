import * as S from "./styles";

import type { CardProps } from "./types";

import {
  FiClock,
  FiEye,
  FiHeart,
} from "react-icons/fi";

export function Card({
  title,
  description,
  image,
  category,
  author,
  publishedAt,
  readingTime,
  views,
  likes,
  $noImage,
  onClick,
}: CardProps) {
  const showImage = image && !$noImage;
  return (
    <S.Container onClick={onClick}>
      {showImage && <S.Banner src={image} alt={title} />}

      <S.Content>
        <S.Header>
          <S.Badge>{category}</S.Badge>

          <S.Date>
            {new Date(publishedAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </S.Date>
        </S.Header>

        <S.Title>{title}</S.Title>

        <S.Description>
          {description.length > 100 ? description.slice(0, 100) + "..." : description}
        </S.Description>

        <S.Footer>
          <S.Author>{author}</S.Author>

          <S.Stats>

            <S.Stat>
              <FiClock />

              {readingTime}min
            </S.Stat>

            <S.Stat>
              <FiEye />

              {views}
            </S.Stat>

            <S.Stat>
              <FiHeart />

              {likes}
            </S.Stat>

          </S.Stats>

        </S.Footer>
      </S.Content>
    </S.Container>
  );
}