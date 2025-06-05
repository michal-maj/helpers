import { FC, ReactNode, useContext } from "react";
import { UpdatingContext } from "../context/UpdatingContext";

interface Props {
  children: ReactNode;
}
export const ListItem: FC<Props> = ({ children }) => {
  const updatingContext = useContext(UpdatingContext);
  return (
    <li>
      {children}
      {updatingContext ? " Updating..." : ""}
    </li>
  );
};
