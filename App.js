import React, {useState, useEffect} from 'react';
import AppRoutes from './routes';

export default function App() {
  const [isFontReady, setIsFontReady] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await isFontReady.loadAsync({
        'Helvetica': require('./assets/fonts/HelveticaNeue.ttf'),
        'Helvetica-Light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
        'Helvetica-Bold': require('./assets/fonts/Helvetica-Neu-Bold.tff')
      });
      setIsFontReady(true);
    };
    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRoutes /> : null;
}
