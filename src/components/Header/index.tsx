import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import * as S from './styles';

type Props = {
  isAboutPage?: boolean;
};

const Header = ({ isAboutPage = false }: Props) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Movie Palace - Trabalho de Artes</S.Title>

        {isAboutPage ? (
          <span>
            <Link href="/">
              <FiArrowRight size={36} color="#eee" />
            </Link>
          </span>
        ) : (
          <S.Links>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/about">Quem somos nós?</Link>
              </li>
            </ul>
          </S.Links>
        )}
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
