import { ScrollArea, Stack, TextInput, UnstyledButton } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import logoVendor from '../../assets/logo-vendor.svg';
import { navigationGroups } from '../../mocks/navigation';
import { logPrototypeAction } from '../../utils/prototypeLog';
import { MaterialSymbol } from '../MaterialSymbol/MaterialSymbol';
import classes from './AppSidebar.module.css';

interface AppSidebarProps {
  activeItemId: string;
}

export function AppSidebar({ activeItemId }: AppSidebarProps) {
  const handleNavigate = (id: string, label: string) => {
    if (id === activeItemId) {
      logPrototypeAction(`Tela "${label}" já está ativa`);
      return;
    }

    notifications.show({
      title: label,
      message: 'Esta tela ainda não está disponível neste protótipo.',
      color: 'mercadoBom',
    });
  };

  return (
    <nav className={classes.sidebar} aria-label="Navegação principal">
      <div className={classes.searchArea}>
        <TextInput
          variant="unstyled"
          placeholder="Buscar por tela"
          aria-label="Buscar por tela"
          rightSection={<MaterialSymbol name="search" size={24} />}
          rightSectionWidth={40}
          classNames={{
            input: classes.searchInput,
            section: classes.searchSection,
          }}
          onChange={(event) =>
            logPrototypeAction(
              `Busca de telas: "${event.currentTarget.value}"`,
            )
          }
        />
      </div>

      <ScrollArea
        className={classes.navScroll}
        type="auto"
        scrollbars="y"
        scrollbarSize={6}
        classNames={{ thumb: classes.scrollThumb }}
      >
        <Stack gap={0} className={classes.navList}>
          {navigationGroups.map((group, groupIndex) => (
            <div key={group.id}>
              {groupIndex > 0 && (
                <div className={classes.groupDivider} aria-hidden />
              )}

              {group.items.map((item) => (
                <UnstyledButton
                  key={item.id}
                  className={classes.navItem}
                  data-active={item.id === activeItemId || undefined}
                  onClick={() => handleNavigate(item.id, item.label)}
                >
                  {item.label}
                </UnstyledButton>
              ))}
            </div>
          ))}
        </Stack>
      </ScrollArea>

      <div className={classes.vendorFooter}>
        <img src={logoVendor} alt="Hypervisual" className={classes.vendorLogo} />
      </div>
    </nav>
  );
}
