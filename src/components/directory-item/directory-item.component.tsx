import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

export type DirectoryType = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

type DirectoryItemProps = {
  directory: DirectoryType;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ directory }) => {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
