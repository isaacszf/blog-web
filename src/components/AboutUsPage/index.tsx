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
            Um Blog pra arquivar umas paradas e fazer alguns testes de Pentest,
            interprete como quiser.
          </p>
        </S.Question>
        <S.Question>
          <h2>Quem são vocês?</h2>

          <S.Authors>
            <ul>
              <li>
                <strong>Isaac (IkeSZ)</strong> - Desenvolvedor e criador do Blog
              </li>
            </ul>
            <ul>
              <li>
                <strong>Dzl</strong> - Sei lá
              </li>
            </ul>
            <ul>
              <li>
                <strong>Jão Pedro</strong> - Random e deu a ideia
              </li>
            </ul>
            <ul>
              <li>
                <strong>Viszla</strong> - Ak no CS depois de 4 anos jogando &
                crente
              </li>
            </ul>
            <ul>
              <li>
                <strong>Didi</strong> - Random
              </li>
            </ul>
            <ul>
              <li>
                <strong>LucasDS</strong> - Random e faz uns bagulho com Lua
              </li>
            </ul>
            <ul>
              <li>
                <strong>Mikael</strong> - Random
              </li>
            </ul>
            <ul>
              <li>
                <strong>Felipe Reis</strong> - 🔥 LIT 🔥
              </li>
            </ul>
          </S.Authors>
        </S.Question>
        <S.Question>
          <h2>Por que você fez este Blog?</h2>

          <p>
            Deu vontade de fazer um projeto e colocar no ar, também foi para
            praticar meu front.
          </p>
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
