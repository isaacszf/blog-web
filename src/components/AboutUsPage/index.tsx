import * as S from './styles';

import Header from '../Header';

const AboutUsPage = () => {
  return (
    <>
      <Header isAboutPage={true} />

      <S.Container>
        <S.Question>
          <h2>Oque é este Blog?</h2>

          <p>
            Um Blog sobre filmes.
          </p>
        </S.Question>
        <S.Question>
          <h2>Quem são vocês?</h2>

          <S.Authors>
            <ul>
              <li>
                <strong>Isaac</strong> - Desenvolvedor e criador do Blog
              </li>
            </ul>
            <ul>
              <li>
                <strong>Daniel</strong> - Autor
              </li>
            </ul>
            <ul>
              <li>
                <strong>João Paulo</strong> - Autor
              </li>
            </ul>
            <ul>
              <li>
                <strong>Alex Mendes</strong> - Autor
              </li>
            </ul>
          </S.Authors>
        </S.Question>
        <S.Question>
          <h2>Quais foram as ferramentas utilizadas?</h2>

          <p>
            Para o Back-end eu utilizei o <a href="https://strapi.io">Strapi</a>{' '}
            com <a href="https://www.postgresql.org">Postgres</a>, e para o
            Front-end eu utilizei o <a href="https://nextjs.org">NextJS</a> com{' '}
            <a href="https://www.typescriptlang.org">TypeScript</a>. Na parte de
            hosting, eu utilizei o <a href="https://heroku.com">Heroku</a> e o{' '}
            <a href="https://www.netlify.com">Netlify</a>.{' '}
          </p>
        </S.Question>
      </S.Container>
    </>
  );
};

export default AboutUsPage;
