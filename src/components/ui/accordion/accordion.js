import React, { useState } from "react";
import { Ul } from "/src/components/styled";
import { Li } from "/src/components/elements";
import AccordionItem from "./accordionItem";

function Accordion({ content, titleComponent, textComponent, isHtml }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  return (
    <Ul $isFlex $flexColumn $gap={8}>
      {content &&
        content.length &&
        content.map((item, index) => (
          <Li key={item.id}>
            <AccordionItem
              titleComponent={titleComponent}
              title={item.title}
              text={item.description}
              textComponent={textComponent}
              open={index === openItemIndex}
              onClick={() => {
                setOpenItemIndex(index !== openItemIndex ? index : null);
              }}
              isHtml={isHtml}
            />
          </Li>
        ))}
    </Ul>
  );
}

export default Accordion;
