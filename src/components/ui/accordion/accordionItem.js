import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Arrow,
  ContentWrapper,
  TitleWrapper,
  Wrapper,
  AccordionItemWrapper,
} from "./styles";

function AccordionItem({
  titleComponent, // компонент который нужно использовать для отрисовки заголовка
  title, // содержимое заголовка
  text, // содержимое текста
  textComponent, // компонент который нужно использовать для отрисовки текста
  open, // открыт ли элемент
  onClick, // клик по кнопке раскрытия аккордеона
  isHtml, // является ли текст html разметкой
}) {
  const [height, setHeight] = useState(0);
  const TitleComponent = titleComponent;
  const TextComponent = textComponent || "div";
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    setHeight(contentWrapperRef.current.offsetHeight);
  }, [text]);
  return (
    <AccordionItemWrapper>
      <TitleWrapper>
        {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
        <Button
          type="button"
          title={`${open ? "Скрыть" : "Раскрыть"} описание`}
          onClick={onClick}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapperRef}>
          {isHtml ? (
            <TextComponent dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextComponent>{text}</TextComponent>
          )}
        </ContentWrapper>
      </Wrapper>
    </AccordionItemWrapper>
  );
}

export default AccordionItem;
