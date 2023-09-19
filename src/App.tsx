import { AppLayout } from 'src/containers';
import { AppContextProvider } from './contexts';
import { Home } from './pages';

function App() {
  return (
    <AppContextProvider>
      <AppLayout>
        <Home />
      </AppLayout>
    </AppContextProvider>
  );
}

export default App;
