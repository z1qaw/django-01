import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <div>
      <Helmet
        title="About | Hello next.js!"
        meta={[
          {
            property: 'og:title',
            content: 'Школа программирования для детей и школьников.',
          },
          {
            property: 'og:content',
            content:
              'Школа программирования для детей и школьников. Лучшие курсы от лучших квалифицированных преподавателей. Курсы программирования, разработка, игры.',
          },
        ]}
      />
      About the World
    </div>
  );
}
