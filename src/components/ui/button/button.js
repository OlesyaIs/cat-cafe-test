import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

export const Button = forwardRef(
  (
    { children, minWidth, link, className, marginTop, onClick, ...props },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        $marginTop={marginTop}
        className={className}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
