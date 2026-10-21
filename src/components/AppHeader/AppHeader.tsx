import {
  Avatar,
  Tabs,
  Text,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';

import {
  currentEstablishment,
  currentModule,
  currentSupermarketLogo,
  currentUser,
} from '../../mocks/session';
import { logPrototypeAction } from '../../utils/prototypeLog';
import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={classes.header}>
      <UnstyledButton
        className={classes.moduleButton}
        onClick={() => logPrototypeAction('Seleção de módulos')}
      >
        <MaterialSymbol name="apps" size={24} />
        <span className={classes.moduleName}>{currentModule}</span>
      </UnstyledButton>

      <div className={classes.divider} aria-hidden />

      <Tabs
        value="clientes"
        variant="unstyled"
        className={classes.tabs}
        keepMounted={false}
      >
        <Tabs.List className={classes.tabList}>
          <Tabs.Tab value="clientes" className={classes.tab}>
            Clientes
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <div className={classes.right}>
        <Tooltip label={currentUser.name} withArrow>
          <Avatar
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            radius="xl"
            size={32}
            className={classes.avatar}
          />
        </Tooltip>

        <div className={classes.divider} aria-hidden />

        <Text className={classes.establishment}>
          {currentEstablishment.name}
        </Text>

        <div className={classes.divider} aria-hidden />

        <img
          src={currentSupermarketLogo}
          alt="MercadoBom"
          className={classes.logo}
        />
      </div>
    </header>
  );
}
