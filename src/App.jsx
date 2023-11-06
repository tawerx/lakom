import React from 'react';
import { Button } from 'react-scroll';
import './App.scss';

const items = ['Торты', 'Пирожные', 'Пироги', 'Свадебные караваи', 'Булочные изделия'];
const products = ['', '', '', '', '', '', '', ''];

const App = () => {
  const [itemSelect, SetItemSelect] = React.useState(0);
  const [pageSelect, SetPageSelect] = React.useState(0);

  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const catalogRef = React.useRef(null);
  const contactsRef = React.useRef(null);

  return (
    <div className="wrapper">
      <div className="home" ref={homeRef}>
        <div className="info_home">
          <div className="text1">
            <h1>Кондтерский цех</h1>
            <p>Мы занимаемся производством кондитерских изделий</p>
          </div>
          <div className="btnControl">
            <Button to="catalog" spy={true} smooth={true} duration={1000}>
              Каталог
            </Button>
            <Button to="about" spy={true} smooth={true} duration={1000}>
              О нас
            </Button>
            <Button to="contacts" spy={true} smooth={true} duration={1000}>
              Контакты
            </Button>
          </div>
        </div>
      </div>
      <div className="about" ref={aboutRef}>
        <div className="info_about">
          <div className="text2">
            <h1>О нас</h1>
            <p>
              Мы уже как 20 лет на рынке и готовы предложить Вам около 300 наименований тортов 🎂 и
              пирожных 🍰. Огромный выбор наших тортов сделают неповторимым как простое чаепитие,
              так и любое Ваше торжество: свадьбу, день рождения, юбилей, новоселье, детский
              праздник. У нас Вы найдёте торты на каждый день, изготовленные на заказ: свадебные ,
              детские , корпоративные. Кондитеры высшего класса осуществят Вашу самую сладкую
              фантазию. Вы можете выбрать не только дизайн торта, но и внутреннее его содержание.
              Главное в нашей работе – использовать только самые свежие, натуральные и качественные
              продукты. Наши кондитеры постоянно повышают свое мастерство, участвуя в выставках,
              семинарах и мастер-классах, изучая и используя на практике новое сырье и новые
              технологии в изготовлении. Мы реализуем свою продукцию не только по городу Рязани и
              области, но и по соседним областям. Мы 3 года подряд принимаем участие в конкурсе
              «Доверие потребителей», чем удостоены дипломами. У нас отработана своя система скидок,
              в которой Вам найдется выгодный вариант, индивидуальный подход, конкурентоспособные
              цены. Мы ценим и уважаем каждого потребителя.❤️ Наши специалисты с радостью готовы вам
              помочь с выбором кондитерского изделия!
            </p>
          </div>
          <div className="btnControl">
            <Button to="catalog" spy={true} smooth={true} duration={1000}>
              Каталог
            </Button>
          </div>
        </div>
      </div>
      <div className="catalog" ref={catalogRef}>
        <div className="info_catalog">
          <h1>Каталог</h1>
          <div className="item_lists">
            <ul>
              {items.map((item, i) => (
                <li
                  key={item}
                  className={itemSelect == i ? 'selected' : ''}
                  onClick={() => SetItemSelect(i)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="products">
          {products.map(() => {
            return (
              <div className="product">
                <image />
                <p>Название</p>
              </div>
            );
          })}
        </div>
        <div className="page_count">
          <ul>
            {products.map((_, i) =>
              i <= 5 ? (
                <li
                  key={i}
                  className={i == pageSelect ? 'selected' : ''}
                  onClick={() => SetPageSelect(i)}>
                  {i + 1}
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>
      <div className="contacts" ref={contactsRef}>
        <h1>Контакты</h1>
        <p>Адрес: ул. 9-я линия д.х</p>
        <p>Телефон: ххх-ххх</p>
        <p>E-mail: 1-lakomka@mail.ru</p>
        <p>2010-2023. Кондитерский цех</p>
      </div>
    </div>
  );
};

export default App;
