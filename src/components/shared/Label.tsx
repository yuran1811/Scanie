import { themes } from '@/utils';
import { DivProps } from '@shared/types';
import { FC, PropsWithChildren } from 'react';

interface LabelProps extends DivProps {
  isActive?: boolean;
  theme?: string;
}

export const Label: FC<LabelProps & PropsWithChildren> = ({
  children,
  className,
  isActive = false,
  theme = 'default',
  onClick,
}) => (
  <div
    className={`${className || ''} rounded-[2rem] border-[2px] px-4 py-2 font-bold`}
    style={{
      color: isActive ? themes[theme].bg : themes[theme].color,
      background: isActive ? themes[theme].color : 'transparent',
      borderColor: isActive ? themes[theme].bg : themes[theme].color,
    }}
    onClick={onClick}
  >
    {children}
  </div>
);
