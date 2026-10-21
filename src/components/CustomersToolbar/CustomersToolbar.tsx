import { ActionIcon, Button, Group, Menu, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { logPrototypeAction } from '../../utils/prototypeLog';
import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './CustomersToolbar.module.css';

const additionalActions = [
  { id: 'importar', label: 'Importar clientes' },
  { id: 'exportar', label: 'Exportar lista' },
  { id: 'configuracoes', label: 'Configurações da listagem' },
];

export function CustomersToolbar() {
  const handleNewCustomer = () => {
    notifications.show({
      title: 'Novo cliente',
      message: 'O cadastro de clientes ainda não está implementado neste protótipo.',
      color: 'mercadoBom',
    });
  };

  return (
    <div className={classes.toolbar}>
      <Group gap={8} wrap="nowrap">
        <Button className={classes.primaryButton} onClick={handleNewCustomer}>
          Novo cliente
        </Button>

        <Menu position="bottom-start" shadow="md" width={220}>
          <Menu.Target>
            <ActionIcon
              variant="subtle"
              color="mercadoBom"
              size={40}
              radius={8}
              aria-label="Ações adicionais"
              className={classes.iconButton}
            >
              <MaterialSymbol name="more_vert" size={24} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {additionalActions.map((action) => (
              <Menu.Item
                key={action.id}
                onClick={() => logPrototypeAction(action.label)}
              >
                {action.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        <ActionIcon
          variant="subtle"
          color="mercadoBom"
          size={40}
          radius={8}
          aria-label="Ações da listagem"
          className={classes.iconButton}
          onClick={() => logPrototypeAction('Botão adicional da listagem')}
        >
          <MaterialSymbol name="playlist_play" size={24} />
        </ActionIcon>
      </Group>

      <Group gap={8} wrap="nowrap">
        <Text className={classes.filterIndicator}>Todos os clientes</Text>

        <Tooltip label="Filtros" withArrow>
          <ActionIcon
            variant="subtle"
            color="mercadoBom"
            size={40}
            radius={8}
            aria-label="Filtros"
            className={classes.iconButton}
            onClick={() => logPrototypeAction('Filtros da listagem')}
          >
            <MaterialSymbol name="filter_list" size={24} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Informações" withArrow>
          <ActionIcon
            variant="subtle"
            color="mercadoBom"
            size={40}
            radius={8}
            aria-label="Informações"
            className={classes.iconButton}
            onClick={() => logPrototypeAction('Informações da listagem')}
          >
            <MaterialSymbol name="info" size={24} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </div>
  );
}
