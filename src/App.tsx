import { useMediaQuery } from '@mantine/hooks';

import { AppHeader } from './components/AppHeader/AppHeader';
import { AppSidebar } from './components/AppSidebar/AppSidebar';
import { UnsupportedDevice } from './components/UnsupportedDevice/UnsupportedDevice';
import { CustomersPage } from './pages/CustomersPage/CustomersPage';
import classes from './App.module.css';

const MOBILE_QUERY = '(max-width: 47.99em)';

export default function App() {
  const isMobile = useMediaQuery(MOBILE_QUERY, false, {
    getInitialValueInEffect: false,
  });

  if (isMobile) {
    return <UnsupportedDevice />;
  }

  return (
    <div className={classes.shell}>
      <div className={classes.headerArea}>
        <AppHeader />
      </div>
      <div className={classes.sidebarArea}>
        <AppSidebar activeItemId="clientes" />
      </div>
      <main className={classes.main}>
        <CustomersPage />
      </main>
    </div>
  );
}
