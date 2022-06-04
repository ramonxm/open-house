import { ComponentProps } from 'react';
import * as S from './styles';

type ButtonProps = {} & ComponentProps<typeof S.Button>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};
