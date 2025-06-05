import { FC, ReactNode } from "react";
import { UpdatingContext } from "../context/UpdatingContext";

interface Props {
  children: ReactNode | ReactNode[];
  isUpdating?: boolean;
  title?: string;
}

export const List: FC<Props> = ({ children, isUpdating = false, title }) => {
  return (
    <section data-testid="list">
      {title && (
        <h4>
          {title}
          {isUpdating ? " Refreshing..." : ""}
        </h4>
      )}
      <UpdatingContext.Provider value={isUpdating}>
        <ul>{children}</ul>
      </UpdatingContext.Provider>
    </section>
  );
};
