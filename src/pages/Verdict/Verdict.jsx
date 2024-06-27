import { useEffect, useRef, useState } from "react";
import {
  Column,
  Container,
  Content,
  Element,
  Header,
  Judge,
  Table,
  Overlay,
  Popup,
} from "./Verdict.styles";
import { FaGavel } from "react-icons/fa";

const columns = [
  {
    title: "Nightmare in Badalona",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum aliquam officiis, magni tempore totam rerum quo quisquam, adipisci sint dolorum cupiditate quas vitae mollitia distinctio asperiores dolores non illum.",
  },
  {
    title: "Nightmare in Badalona",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum aliquam officiis, magni tempore totam rerum quo quisquam, adipisci sint dolorum cupiditate quas vitae mollitia distinctio asperiores dolores non illum.",
  },
  {
    title: "Nightmare in Badalona",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum aliquam officiis, magni tempore totam rerum quo quisquam, adipisci sint dolorum cupiditate quas vitae mollitia distinctio asperiores dolores non illum.",
  },
  {
    title: "Nightmare in Badalona",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum aliquam officiis, magni tempore totam rerum quo quisquam, adipisci sint dolorum cupiditate quas vitae mollitia distinctio asperiores dolores non illum.",
  },
];

const Verdict = () => {
  const [popupText, setPopupText] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  // If you click the screen, closes the current popup
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopupOpen]);

  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup visibility on button click
  };


  return (
    <>
      <Container>
        {isPopupOpen && <Overlay />}
        <p>Judgement Day</p>
        <Table ispopupopen={isPopupOpen}>
          {/* <Column>
            <Header>
              <FaGavel />
            </Header>
          </Column> */}
          <Column>
            <Header>Pecado</Header>
            <Content>
              {columns.map((info, k) => {
                return (
                  <Element
                    key={k}
                    onClick={() => {
                      setPopupText(info.context);
                      handleClick();
                    }}
                  >
                    {info.title}
                  </Element>
                );
              })}
            </Content>
          </Column>
          {/* <Judge >
            <FaGavel />
          </Judge> */}
          <Column>
            <Header>Castigo</Header>
            <Content>
              {columns.map((info, k) => {
                return (
                  <Element
                    key={k}
                    onClick={() => {
                      setPopupText(info.context);
                      handleClick();
                    }}
                  >
                    {info.title}
                  </Element>
                );
              })}
            </Content>
          </Column>
        </Table>
        {isPopupOpen && <Popup ref={popupRef}>{popupText}</Popup>}
      </Container>
    </>
  );
};

export default Verdict;
