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
  onClick,
}: CardProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Banner
        src={
          image ??
          "https://placehold.co/800x500"
        }
        alt={title}
      />

      <S.Content>
        <S.Header>
          <S.Badge>{category}</S.Badge>

          <S.Date>{publishedAt}</S.Date>
        </S.Header>

        <S.Title>{title}</S.Title>

        <S.Description>
          {description}
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