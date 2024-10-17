import { useEffect } from 'react';
import { validaWidth } from './assets/helpers';
import LandPage from './components/landPage';
import Projects from './components/projects';

function App() {
  useEffect(() => {
    console.log(validaWidth(), "useEffect")
  }, [])

  return (
    <div>
      <LandPage />
    </div>
  );
}

export default App;
