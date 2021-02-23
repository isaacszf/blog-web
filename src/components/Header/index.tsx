import Link from 'next/link';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Blog dos Enrosca Pneu</S.Title>

        <S.Links>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Quem somos nós?</Link>
            </li>
          </ul>
        </S.Links>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
