import { Helmet } from 'react-helmet';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const { pathname } = useRouter();

  const renderHelmet = () => {
    return (
      <Helmet
        title="Школа программирования | Для детей и школьников!"
        meta={[
          {
            property: 'keywords',
            content:
              'курсы по программированию школа юного программиста детская основы для детей и начинающих обучение ребенка компьютерное кружок секция информатики',
          },
          {
            property: 'og:title',
            content: 'Школа программирования для детей и школьников.',
          },
          {
            property: 'og:description',
            content:
              'Обучение школьников. Курсы по прораммированию и информатике. Школа программирования для детей. Бесплатный урок.',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: 'https://hitech-school.com/',
          },
          {
            property: 'og:locale',
            content: 'ru_RU',
          },
          {
            property: 'og:content',
            content:
              'курсы по программированию школа юного программиста детская основы для детей и начинающих обучение ребенка компьютерное кружок секция информатики',
          },
        ]}
      />
    );
  };

  return (
    <>
      {renderHelmet()}
      <div className="lamp-block-bg _40px-margin-mobile">
        <Link href={`${pathname}#`}>
          <a className="navlink-2 fix navlink-scroll-btn">Бесплатный урок</a>
        </Link>
        <div
          data-w-id="4e069065-738e-29f0-1048-1d4fd961c3d7"
          className="lamp-block"
        >
          <div className="navbar wf-section">
            <div className="container w-container">
              <div className="row1">
                <div className="nav-menu">
                  <div className="mob-menu-head"></div>
                  <a href="tel:+7(912)586-9824" className="phone-btn">
                    +7 (912) 586-9824
                  </a>
                  <a
                    href="mailto:sncfg@yandex.ru%20?subject=HiTechSchool"
                    className="head-email"
                  >
                    sncfg@yandex.ru
                  </a>
                  <div className="menu">
                    <Link href={`${pathname}#courses`}>
                      <a className="navlink">Курсы</a>
                    </Link>
                    <Link href={`${pathname}#reviews`}>
                      <a className="navlink">Отзывы</a>
                    </Link>

                    <Link href={`${pathname}#faq`}>
                      <a className="navlink">FAQ</a>
                    </Link>
                  </div>
                  <div className="mob_l">
                    <div className="mobile_lang"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="4e069065-738e-29f0-1048-1d4fd961c3f4"
            className="section _1s wf-section"
          >
            <div className="container w-container">
              <div className="block1">
                <h1 className="h1">
                  <strong>Превращаем фантазию в&nbsp;код!</strong>
                </h1>
                <p className="par_24 _1">
                  <strong className="bold-text-11">
                    Онлайн-школа программирования для&nbsp;детей 8-17 лет
                  </strong>
                </p>
                <Link href={`${pathname}#form`}>
                  <a className="button-2 w-button">Бесплатный урок</a>
                </Link>
              </div>
            </div>
            <div className="circle-container main _2">
              <div
                data-w-id="4e069065-738e-29f0-1048-1d4fd961c402"
                className="circle"
              >
                <div className="bg1-2"></div>
              </div>
            </div>
          </div>
          <div className="section _2s _1 wf-section">
            <div className="container-2 w-container">
              <div className="row2 mn">
                <div className="col2 img"></div>
                <div className="col2 text">
                  <h2 className="h2">
                    Hello <span className="blue-text">HiTech School!</span>
                  </h2>
                  <p className="par_24">
                    Мы учим практическим навыкам, которые будут полезны в
                    будущем:
                  </p>
                  <div className="list-tag-1">
                    <div className="tag-2">компьютерной грамотности</div>
                    <div className="tag-2">созданию сайтов и игр</div>
                    <div className="tag-2">программированию</div>
                  </div>
                  <p className="par_24">
                    Занятия проходят онлайн, а&nbsp;вместо скучных контрольных
                    ребята создают{' '}
                    <span className="blue-text">реальные проекты</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-container main _1"></div>
        </div>
        <div id="courses" className="section _2s _2 wf-section">
          <div className="container-2 w-container">
            <div className="row3">
              <div className="col3">
                <div className="stat-heading">15000 учеников</div>
                <div className="stat-text">
                  Учатся сейчас в HiTech School. За три года наши курсы прошли
                  15000 ребят.
                </div>
              </div>
              <div className="col3">
                <div className="stat-heading">40&nbsp;000 проектов</div>
                <div className="stat-text">
                  Сделали ребята своими руками. Часть из них выложена в открытом
                  доступе в нашей соцсети HUB.
                </div>
              </div>
              <div className="col3">
                <div className="stat-heading">8 полных курсов</div>
                <div className="stat-text">
                  Каждый ученик выбирает то, что ему интересно: Python, Unity,
                  JavaScript или любое другое направление.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section _4s wf-section">
        <div className="container w-container">
          <div className="row2">
            <div className="col2 img _2 m">
              <div className="window">
                <div className="window-head">
                  <div className="window-btns">
                    <div className="window-btn"></div>
                    <div className="window-btn"></div>
                    <div className="window-btn"></div>
                  </div>
                </div>
                <div className="window-body">
                  <img
                    src="./Школа программирования для детей 8-17 лет_files/5f871b1a1b56adc459dcc3cb_kl-1.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 91vw, (max-width: 767px) 95vw, (max-width: 991px) 91vw, 763px"
                    width="763"
                    srcset="
                    https://sun9-54.userapi.com/impg/76PGcrS2YNNI9JImOIPsVfyVNNvY0oKHNz2T4Q/dCTWQmWA43A.jpg?size=1080x721&quality=96&sign=736237d1175085b16fd53f5f2e0cfb02&type=album   800w,
                    https://sun9-54.userapi.com/impg/76PGcrS2YNNI9JImOIPsVfyVNNvY0oKHNz2T4Q/dCTWQmWA43A.jpg?size=1080x721&quality=96&sign=736237d1175085b16fd53f5f2e0cfb02&type=album 1080w,
                    https://sun9-54.userapi.com/impg/76PGcrS2YNNI9JImOIPsVfyVNNvY0oKHNz2T4Q/dCTWQmWA43A.jpg?size=1080x721&quality=96&sign=736237d1175085b16fd53f5f2e0cfb02&type=album         1526w
                "
                    alt="bg sec"
                    className="w_img-763"
                  />
                </div>
              </div>
            </div>
            <div className="col2 text pt60">
              <h2 className="h2">Как проходят уроки</h2>
              <div className="lesson-plan-list">
                <div className="lp_row">
                  <div className="lp_num">1</div>
                  <div className="lp_text">
                    Повторяем тему прошлого урока и разбираем домашнее задание.
                  </div>
                </div>
                <div className="lp_row">
                  <div className="lp_num">2</div>
                  <div className="lp_text">
                    Разбираем новую тему и группа под контролем преподавателя
                    решает первые задачи.
                  </div>
                </div>
                <div className="lp_row">
                  <div className="lp_num">3</div>
                  <div className="lp_text">
                    Ученики самостоятельно решают усложненные задачи и в конце
                    часто идут игровые задания.
                  </div>
                </div>
                <div className="lp_row">
                  <div className="lp_num">4</div>
                  <div className="lp_text">
                    В конце урока преподаватель с группой подводят итоги,
                    повторяют все что успели пройти и готовятся
                    к&nbsp;следующему уроку.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section _5s wf-section">
        <div className="container w-container">
          <div className="row4">
            <div className="col4">
              <div className="num1">32</div>
              <div className="num1-text">урока в&nbsp;курсе</div>
            </div>
            <div className="col4">
              <div className="num1">90</div>
              <div className="num1-text">минут урок идёт</div>
            </div>
            <div className="col4 _2">
              <img
                src="https://global-uploads.webflow.com/5f871b1a1b56ad12badcc37c/5f871b1a1b56ad09e9dcc396_weekend.svg"
                loading="lazy"
                alt="weekend"
                className="weekend-text"
              />
            </div>
            <div className="col4">
              <div className="num1">12</div>
              <div className="num1-text">человек в&nbsp;группе</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section _6s wf-section">
        <div className="container w-container">
          <div className="block2">
            <h2 className="h2 mb20">
              Первый урок <span className="blue-text">бесплатно</span>
            </h2>
            <p className="paragraph">
              За 40 минут пробного урока ребёнок и родители смогут понять:
              подойдут ли занятия программированием, а&nbsp;методист поможет
              подобрать направление подходящее для студента.
            </p>
          </div>
          <div className="row5">
            <div className="col5">
              <div className="num2-col">
                <div className="num2">10</div>
                <div className="num2-text">мин</div>
              </div>
              <div className="fl_text">
                Знакомимся <br />
                с&nbsp;учеником
              </div>
            </div>
            <div className="col5">
              <div className="num2-col">
                <div className="num2">10</div>
                <div className="num2-text">мин</div>
              </div>
              <div className="fl_text">
                Индивидуальный подбор траектории развития
              </div>
            </div>
            <div className="col5">
              <div className="num2-col">
                <div className="num2">20</div>
                <div className="num2-text">мин</div>
              </div>
              <div className="fl_text">
                Практическое <br />
                занятие
              </div>
            </div>
          </div>
          <a
            href="https://www.hitech-school.org/#form"
            id="ButtonSingUp"
            className="button w-button"
          >
            Записаться
          </a>
        </div>
        <div className="center-block down abs"></div>
      </div>
      <div
        data-w-id="5e421772-9243-28c5-62e2-ce8a2528ecbb"
        className="section _9s wf-section"
      >
        <div className="container w-container">
          <div className="benefits-row">
            <div className="bf_col img">
              <img
                src="https://global-uploads.webflow.com/5f871b1a1b56ad12badcc37c/5f871b1a1b56ad78e9dcc399_long_img.svg"
                loading="lazy"
                alt="paralax img"
                className="benefits-img"
              />
            </div>
            <div className="bf_col text">
              <h2 className="h2 s44 mb80">Преимущества школы</h2>
              <div className="b1">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      Показываем, как&nbsp;
                      <span className="blue-text">
                        с пользой проводить время за&nbsp;компьютером
                      </span>
                    </h3>
                  </div>
                  <div className="bf_text-container _1">
                    <p className="bf_text">
                      Если ребёнок проводит много времени за играми или в
                      интернете — мы покажем, как его увлечения сделаны изнутри.
                      Возможно детская забава перерастёт в нечто большее и
                      станет будущей профессией.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b2">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      Подбираем курсы&nbsp;
                      <span className="blue-text">
                        по уровню и&nbsp;интересам ребенка
                      </span>
                    </h3>
                  </div>
                  <div className="bf_text-container _2">
                    <p className="bf_text">
                      Курсы составлены так, чтобы ребятам было не слишком легко
                      и не слишком сложно. Процесс завлекает ребят за счет
                      практических задач и геймификации на платформе.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b3">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      Преподаватели&nbsp;
                      <span className="blue-text">
                        с опытом в&nbsp;индустрии
                      </span>
                    </h3>
                  </div>
                  <div className="bf_text-container _3">
                    <p className="bf_text">
                      Преподаватели имеют профильное образование и опыт работы в
                      индустрии. Кроме того, они регулярно проходят тренинги и
                      мастер-классы для повышения квалификации.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b4">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      Обучаем{' '}
                      <span className="blue-text">на&nbsp;Платформе</span>
                    </h3>
                  </div>
                  <div className="bf_text-container _4">
                    <p className="bf_text">
                      Если ребенок пропустит занятие — это не страшно. Материалы
                      по каждому уроку можно найти на Платформе, а преподаватели
                      готовы прийти на помощь в чате Telegram.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b5">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      <span className="blue-text">Экономим время</span>{' '}
                      в&nbsp;дороге
                    </h3>
                  </div>
                  <div className="bf_text-container _5">
                    <p className="bf_text">
                      Ребёнку не нужно никуда ездить, все занятия проходят
                      онлайн. Для занятий понадобится ноутбук или компьютер и
                      хороший интернет.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b6">
                <div className="bf_block">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      <span className="blue-text">
                        Социализируем и&nbsp;мотивируем
                      </span>
                    </h3>
                  </div>
                  <div className="bf_text-container _6">
                    <p className="bf_text">
                      Важная часть обучения — занятия проходят в небольших
                      группах. Дети имеют возможность знакомиться, общаться и
                      делать совместные проекты. Некоторые такие проекты уже
                      лежат в нашей социальной сети HUB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="b6">
                <div className="bf_block last">
                  <div className="bf_mob-toggle">
                    <h3 className="h3 bf">
                      Помогаем собрать
                      <span className="blue-text">&nbsp;крутое портфолио</span>
                    </h3>
                  </div>
                  <div className="bf_text-container _6">
                    <p className="bf_text">
                      Хорошее портфолио может послужить решающим фактором при
                      приёме на учебу в лучшие вузы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="reviews"
        data-scroll-time="0"
        className="section _10s wf-section"
      >
        <div className="container w-container">
          <h2 className="h2 mb80">Отзывы родителей и&nbsp;учеников</h2>
          <div className="window hot rw">
            <div className="window-head hot">
              <div className="window-btns hot">
                <div className="window-btn"></div>
                <div className="window-btn"></div>
                <div className="window-btn"></div>
              </div>
            </div>
            <div className="window-body rw">
              <div className="c_slider-container _2">
                <div className="reviews-slider slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div className="slick-track">
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        role="tabpanel"
                        id="slick-slide70"
                      >
                        <div>
                          <div>
                            <div className="tab-frame">
                              <div className="rw_row">
                                <div className="rw_col parent">
                                  <div className="rw_block p">
                                    <div className="rw-row">
                                      <img
                                        src="./Школа программирования для детей 8-17 лет_files/5f8dce9b99592429bb79d4ea_file-2574 1.png"
                                        loading="lazy"
                                        sizes="(max-width: 767px) 48px, (max-width: 991px) 60px, 80px"
                                        srcset="
                                        https://sun9-15.userapi.com/impg/2FDomxQBM3hl9ha3F-Mz4lGjgWGVdnczjpoNEw/4VYf_7v3x8w.jpg?size=1024x1024&quality=96&sign=e229d9b9a295627695f75c6d30ef6c34&type=album 500w,
                                        https://sun9-15.userapi.com/impg/2FDomxQBM3hl9ha3F-Mz4lGjgWGVdnczjpoNEw/4VYf_7v3x8w.jpg?size=1024x1024&quality=96&sign=e229d9b9a295627695f75c6d30ef6c34&type=album       771w
                                    "
                                        alt="mom photo"
                                        className="rw-photo"
                                      />
                                      <div className="st-col">
                                        <div className="rw_text1">Мама</div>
                                        <div className="rw-name">
                                          Людмила
                                          <br />
                                          Мишакина
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rw_text2">
                                      Привела сына Антона в HiTech School
                                    </div>
                                    <p className="rw_text3 preview-text-review">
                                      Идея записать Антона на курсы
                                      программирования родилась у нас давно, но
                                      к сожалению, из-за занятости в футболе ее
                                      постоянно откладывали в долгий ящик. Но в
                                      апреле случился карантин и мы решили
                                      использовать свободное время максимально
                                      продуктивно. О школе узнали по отзывам в
                                      интернете и записались на пробный урок.
                                      <br />
                                      <br />
                                      Свят ждал его с нетерпением, до этого в
                                      школе у него уже была информатика и
                                      приблизительно он понимал...
                                    </p>
                                    <p className="rw_text3 full-text-review">
                                      Идея записать Антона на курсы
                                      программирования родилась у нас давно, но
                                      к сожалению, из-за занятости в футболе ее
                                      постоянно откладывали в долгий ящик. Но в
                                      апреле случился карантин и мы решили
                                      использовать свободное время максимально
                                      продуктивно. О школе узнали по отзывам в
                                      интернете и записались на пробный урок.
                                      <br />
                                      <br />
                                      Свят ждал его с нетерпением, до этого в
                                      школе у него уже была информатика и
                                      приблизительно он понимал о чем пойдет
                                      речь, однако стеснялся и был зажат. Но на
                                      первом же занятии его "стеснения" сняло
                                      как рукой, преподаватель оказался очень
                                      доброжелательным, интересным и был, словно
                                      "на одной волне" с ребенком. Первый урок
                                      нам очень понравился, ребенок остался в
                                      восторге и даже речи не шло о том,
                                      продолжать дальше или нет.
                                      <span className="text-span-3">
                                        &nbsp;Антон всегда увлекался разными
                                        "программами" играми и тд, но его
                                        увлечения были бессвязными, знания не
                                        выстраивались в логическую цепочку, а
                                        благодаря HiTech School произошло именно
                                        так.&nbsp;
                                      </span>
                                      <br />‍<br />
                                      Постепенно и логически выстраиваются
                                      знания, как звенья одной цепи - от
                                      простого к сложному. Жизнь Антона
                                      изменилась, благодаря курсам, это стало не
                                      только от "эффективного"
                                      времяпрепровождения, это переросло в мечту
                                      и дальнейшие цели в жизни.&nbsp;
                                      <br />
                                      Антона так же улучшил свои знания в
                                      математике, решение логических задач,
                                      математические расчеты и таблицы – во всем
                                      ощутим прогресс. <br />
                                      Ему очень нравятся замечательные педагоги,
                                      с которыми успел поработать, к ним всегда
                                      можно обратиться в мессенджере и получить
                                      помощь по выполнению заданий, здорово
                                      когда есть обратная связь! Мы очень
                                      довольны выбором онлайн школы и благодарны
                                      за полученные знания! В дальнейшем
                                      планируем развиваться вместе со школой и
                                      проходить обучение уже на более сложных
                                      курсах
                                    </p>
                                  </div>
                                </div>
                                <div className="rw_col child opacity_1">
                                  <div className="rw_block c">
                                    <div className="rw-row">
                                      <img
                                        src="./Школа программирования для детей 8-17 лет_files/5f8dcec1f04401a6132c6811_file-2575 1.png"
                                        loading="lazy"
                                        sizes="(max-width: 767px) 48px, (max-width: 991px) 60px, 80px"
                                        srcset="
                                        https://sun9-44.userapi.com/impg/P-YhKWLDZRAXLTrZIi7zbtOtk17FjiUR89UsjQ/zKGKmZVp2Lg.jpg?size=1024x1024&quality=96&sign=980f8aefb0c102d8123bf03c926759a3&type=album 500w,
                                        https://sun9-44.userapi.com/impg/P-YhKWLDZRAXLTrZIi7zbtOtk17FjiUR89UsjQ/zKGKmZVp2Lg.jpg?size=1024x1024&quality=96&sign=980f8aefb0c102d8123bf03c926759a3&type=album       770w
                                    "
                                        alt="student photo"
                                        className="rw-photo"
                                      />
                                      <div className="st-col">
                                        <div className="rw_text1">
                                          Ученик, 9 лет
                                        </div>
                                        <div className="rw-name">
                                          Антон Мишакин
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rw_text2">
                                      Прошёл курс «Проектная Информатика»
                                    </div>
                                    <p className="rw_text3">
                                      Больше всего мне понравилось делать сайты
                                      и писать приложения. Моим самым большим
                                      проектом был сайт с игровой формой, а
                                      также "компьютерный клуб». Работать над
                                      проектом мне понравилось, я научился
                                      делать расчеты в таблицах, вставлять фото
                                      и видео в проект, освоил графики.
                                      <span className="text-span-4">
                                        &nbsp;У меня появились новые знакомые и
                                        друзья, с которыми у нас есть наши темы
                                        для общения и интересы, в школе таких
                                        ребят нет.{' '}
                                      </span>
                                      Хотел бы дальше научиться создавать игры и
                                      освоить языки программирования!
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="1"
                        aria-hidden="true"
                        tabindex="-1"
                        role="tabpanel"
                        id="slick-slide71"
                      >
                        <div>
                          <div></div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabindex="-1"
                        role="tabpanel"
                        id="slick-slide72"
                      >
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="form"
        data-scroll-time="0"
        className="section _11s sb wf-section"
      >
        <div className="container w-container">
          <div className="row7">
            <div className="col7">
              <div className="w476 b">
                <h2 className="h2 mb20">
                  Запишитесь{' '}
                  <span className="blue-text">на&nbsp;пробный урок</span>
                </h2>
                <p className="paragraph-3">
                  На бесплатном уроке учитель поможет подобрать курс под
                  интересы ребёнка и поможет ему написать свою первую игру.
                </p>
              </div>
            </div>
            <div className="form-block w-form">
              <form
                id="wf-form-Contact-Form"
                name="wf-form-Contact-Form"
                data-name="Contact Form"
                method="post"
              >
                <input
                  type="text"
                  className="text-field input-name w-input"
                  maxlength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Ваше имя*"
                  id="name"
                  required=""
                />
                <div className="iti iti--allow-dropdown iti--separate-dial-code">
                  <input
                    type="tel"
                    className="text-field input-phone w-input"
                    maxlength="256"
                    name="Phone_intlTelInput"
                    data-name="Phone"
                    id="Phone"
                    required=""
                    autocomplete="off"
                    data-intl-tel-input-id="0"
                    placeholder="Телефон*"
                  />
                  <input type="hidden" name="Phone" />
                </div>
                <input
                  type="email"
                  className="text-field input-email w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Ваш email"
                  id="Email"
                  required=""
                />
                <div className="html-embed-2 w-embed">
                  <input type="hidden" id="utm_source" name="utm_source" />
                  <br />
                  <input type="hidden" id="utm_medium" name="utm_medium" />
                  <br />
                  <input type="hidden" id="utm_campaign" name="utm_campaign" />
                  <br />
                  <input type="hidden" id="utm_term" name="utm_term" />
                  <br />
                  <input type="hidden" id="utm_content" name="utm_content" />
                  <br />
                  <input type="hidden" name="hidden1" value="ru" />
                </div>
                <input
                  type="submit"
                  value="Записаться"
                  data-wait=""
                  id="addToFormButton"
                  className="button mt20 disabled w-button"
                />
              </form>
              <div id="success-message" className="success-message w-form-done">
                <div className="success-message">
                  <div className="success-inner">
                    <div className="success-message-block">
                      <div className="success-message-title">
                        Спасибо{' '}
                        <span className="blue-text-2">за вашу заявку</span>
                      </div>
                      <div className="success-message-text">
                        Наши менеджеры обработают её и свяжутся с вами в
                        ближайшее время для уточнения деталей. Вы сможете задать
                        им все интересующие вопросы и назначить удобное для вас
                        время занятия.
                      </div>
                    </div>
                    <div className="success-message-block last">
                      <div className="success-message-text last">
                        Давайте узнаем друг друга получше!
                        <span className="blue-text-2">
                          Почитать о курсах и полезных советах из сферы IT
                        </span>
                        можно в наших социальных сетях
                      </div>
                    </div>
                    {/* <div className="success-message__social-block">
                      <div className="ft-menu m">
                        <a
                          href="https://www.facebook.com/ShkolaCode.school/"
                          target="_blank"
                          className="ft-navlink-2 soc success-form"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.instagram.com/ShkolaCode.school/"
                          target="_blank"
                          className="ft-navlink-2 soc inst success-form"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://vk.com/ShkolaCode"
                          target="_blank"
                          className="ft-navlink-2 soc vk success-form"
                        >
                          Vkontakte
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <a
                    href="https://www.hitech-school.org/#"
                    className="add-to-form-button w-button"
                  ></a>
                </div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="faq" data-scroll-time="0" className="section _12s wf-section">
        <div className="container w-container">
          <h2 className="h2 mb0">FAQ</h2>
          <div className="faq-dd">
            <div className="dd-toggle">
              <div className="faq-question-col">
                <div className="faq-question">
                  Где можно ознакомиться с расписанием занятий?
                </div>
              </div>
            </div>
            <div className="faq-answer">
              <div className="faq-text-block">
                <p className="paragraph-4">
                  Как правило наши ученики занимаются по выходным. Новые группы
                  стартуют каждую неделю. Чтобы узнать подходящее расписание,
                  пожалуйста, оставьте заявку на сайте и скажите возраст ребенка
                  оператору.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-dd">
            <div className="dd-toggle">
              <div className="faq-question-col">
                <div className="faq-question">Сколько стоит курс?</div>
              </div>
            </div>
            <div className="faq-answer">
              <div className="faq-text-block">
                <p className="paragraph-4">
                  Стоимость курса варьируется в зависимости от формата и
                  количества модулей, за&nbsp;которые вносится единовременная
                  оплата.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-dd">
            <div className="dd-toggle">
              <div className="faq-question-col">
                <div className="faq-question">
                  Как решить вопрос о пропуске занятий?
                </div>
              </div>
            </div>
            <div className="faq-answer">
              <div className="faq-text-block">
                <p className="paragraph-4">
                  Пропуск одного занятия не страшен: теория, материалы и задачи
                  по каждому уроку хранятся на Платформе, а преподаватели всегда
                  готовы прийти на помощь в чате в Telegram. Если ребенок
                  пропустил 2 или более занятий по уважительной причине, он
                  может запросить бесплатный дополнительный урок с
                  преподавателем.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-dd">
            <div className="dd-toggle">
              <div className="faq-question-col">
                <div className="faq-question">
                  Какие есть технические требования для прохождения занятий?
                </div>
              </div>
            </div>
            <div className="faq-answer">
              <div className="faq-text-block">
                <p className="paragraph-4">
                  Уроки проводятся только за компьютером или ноутбуком,
                  заниматься на планшете не получится.
                  <br />
                  Необходима операционная система: Windows (не младше 7) или
                  macOS (10.10 +) и установленный браузер Google Chrome.
                  <br />
                  Для курса Unity есть повышенные технические требования: на
                  компьютере должно быть 20GB свободного места и, как минимум,
                  2GB оперативной памяти.
                </p>
              </div>
            </div>
          </div>
          <div className="faq-dd last">
            <div className="dd-toggle">
              <div className="faq-question-col">
                <div className="faq-question">Как часто набираются группы?</div>
              </div>
            </div>
            <div className="faq-answer">
              <div className="faq-text-block">
                <p className="paragraph-4">
                  Набор в группы проходит круглый год, каждую неделю открывается
                  новая группа. Чтобы узнать, актуальное расписание, пожалуйста,
                  оставьте заявку на сайте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="d485d992-fc3b-f352-6818-937a0a3643a2"
        className="section _13s wf-section"
      >
        <div className="circle-container">
          <div className="circle">
            <div className="bg1 _2"></div>
          </div>
        </div>
      </div>
      <footer className="section footer wf-section">
        <div className="container w-container">
          <div className="ft-row">
            <div className="ft-col _1">
              <div className="v_col2">
                <a
                  href="https://www.hitech-school.org/#"
                  className="ft-logo-link w-inline-block"
                >
                  <img
                    src="./Школа программирования для детей 8-17 лет_files/5f871b1a1b56ad6ddadcc3a2_logo-white.svg"
                    loading="lazy"
                    alt=""
                    className="logo"
                  />
                </a>
                <div className="ft-text">© HiTech School, 2021</div>
              </div>
              {/* <div className="ft-text2">
                <a
                  href="https://hitech-school.org/politics"
                  className="green-link"
                >
                  Политика конфиденциальности
                </a>
              </div>
              <div className="ft-text2">
                <a
                  href="https://s.hiTech-school.org/soglasie"
                  target="_blank"
                  className="link"
                >
                  Согласие на обработку персональных данных
                </a>
              </div> */}
              {/* <div className="ft-text2">
                <a
                  href="https://hitech-school.org/oferta"
                  className="green-link"
                >
                  Договор оферты
                </a>
              </div> */}
            </div>
            <div className="ft-col _2">
              <div className="ft-menu-col">
                <h3 className="h3 mb32">О школе</h3>
                <div className="ft-menu">
                  <Link href={`${pathname}#courses`}>
                    <a className="ft-navlink">Курсы</a>
                  </Link>
                  <Link href={`${pathname}#reviews`}>
                    <a className="ft-navlink">Отзывы</a>
                  </Link>
                  <Link href={`${pathname}#faq`}>
                    <a className="ft-navlink">FAQ</a>
                  </Link>
                  <Link href={`${pathname}#`}>
                    <a className="ft-navlink">Школа</a>
                  </Link>
                  {/* <a
                    href="https://www.notion.so/ShkolaCode/ShkolaCode-70cf526fcf6a43e685e23c3bcde1c156"
                    target="_blank"
                    className="ft-navlink"
                  >
                    Вакансии
                  </a> */}
                </div>
              </div>
              {/* <div className="ft-menu-col">
                  <h3 className="h3 mb32">Соцсети</h3>
                  <div className="ft-menu">
                    <a
                      href="https://www.facebook.com/ShkolaCode.school/"
                      target="_blank"
                      className="ft-navlink soc"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/ShkolaCode.school/"
                      target="_blank"
                      className="ft-navlink soc inst"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://vk.com/ShkolaCode"
                      target="_blank"
                      className="ft-navlink soc vk"
                    >
                      Vkontakte
                    </a>
                  </div>
                </div> */}
            </div>
            <div className="ft-col _3">
              <div className="v_col2">
                <div>
                  <a href="tel:+7(912)586-9824" className="ft-phone-btn">
                    +7 (912) 586-9824
                  </a>
                </div>
                <div className="email-text">
                  <a
                    href="mailto:sncfg@yandex.ru%20?subject=FreeLesson"
                    className="green-link"
                  >
                    sncfg@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
