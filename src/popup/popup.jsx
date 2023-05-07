import React, { useEffect } from "react";
import { Close, Wrapper, Header, StyledPopup } from "./styled";

export default function PopUp({ isShow, onClose, title, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === 'Escape') {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);
  return isShow ? (
    <Wrapper>
    <StyledPopup>
      <Header>
        {title}{" "}
        <Close size="small" onClick={onClose}>
          x
        </Close>
      </Header>
      {children}
      </StyledPopup>
    </Wrapper>
  ) : null;
}
