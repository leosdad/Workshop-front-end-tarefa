import { Box } from '@mantine/core';
import type { CSSProperties } from 'react';

import classes from './MaterialSymbol.module.css';

interface MaterialSymbolProps {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function MaterialSymbol({
  name,
  size = 24,
  className,
  style,
}: MaterialSymbolProps) {
  return (
    <Box
      component="span"
      aria-hidden
      className={[classes.symbol, className].filter(Boolean).join(' ')}
      style={{ fontSize: size, ...style }}
    >
      {name}
    </Box>
  );
}
