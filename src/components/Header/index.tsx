import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Blog dos Enrosca Pneu</S.Title>

        <S.Links>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Quem somos nós?</a>
            </li>
          </ul>
        </S.Links>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
