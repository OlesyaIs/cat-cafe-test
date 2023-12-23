import React, { useState } from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { Label, Ul } from "/src/components/styled";
import { Li } from "/src/components/elements";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import Accordion from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  StyledForm,
  FormItem,
  Cost,
  RadioLabelForTime,
  RadioLabelForType,
  AccordionText,
} from "./styles";

function Buy({ buyOptions }) {
  const { durationOptions = [], ticketOptions = [] } = buyOptions;
  const buyAvailability = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectedType, setSelectedType] = useState(ticketOptions[0].id);

  const type = ticketOptions.find((option) => option.id === selectedType);
  const cost = duration * type.price;

  const accordionContent =
    buyAvailability &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectedType}
          value={option.id}
          text={option.title}
          onChange={(evt) => {
            setSelectedType(Number(evt.target.value));
          }}
          flexGrow
        />
      ),
      description: option.description,
    }));

  const handlerBuy = () => {
    alert(`Спасибо за покупку.
    Вы приобрели билет класса: ${type.title}.
    Продолжительность посещения (количество часов): ${duration}.
    Цена билета: ${cost} руб.`);
  };

  return (
    <StyledSection>
      <Title size={TitleSize.BIG} level={TitleLevel.H2}>
        Купить билет
      </Title>
      {buyAvailability ? (
        <StyledForm $width={540}>
          <FormItem>
            <Label $margin={12}>Продолжительность (часов)</Label>
            <Ul $isFlex $gap={12} $alignItems="center">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(evt) => {
                      setDuration(Number(evt.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem>
            <Label $margin={12}>Тип билета</Label>
            <Accordion
              content={accordionContent}
              textComponent={AccordionText}
              isHtml
            ></Accordion>
          </FormItem>
          <FormItem>
            <Label $margin={8} $small>
              Цена
            </Label>
            <Cost>{cost} руб.</Cost>
          </FormItem>
          <Button minWidth={460} marginTop={16} onClick={handlerBuy}>
            Купить билет
          </Button>
        </StyledForm>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}

export default Buy;
