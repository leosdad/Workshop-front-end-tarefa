import { Text, Title } from '@mantine/core';

import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './UnsupportedDevice.module.css';

export function UnsupportedDevice() {
  return (
    <div className={classes.screen}>
      <div className={classes.content}>
        <MaterialSymbol name="desktop_windows" size={48} />
        <Title order={1} className={classes.title}>
          Dispositivo não compatível
        </Title>
        <Text className={classes.message}>
          Este sistema foi desenvolvido para desktop e tablets. Acesse em um
          tablet ou computador.
        </Text>
      </div>
    </div>
  );
}
