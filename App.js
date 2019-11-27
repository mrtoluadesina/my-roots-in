import React, {useState, useEffect} from 'react';
import * as Fonts from 'expo-font';
import AppRoutes from './routes';

export default function App() {
  const [isFontReady, setIsFontReady] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Fonts.loadAsync({
        'Helvetica': require('./assets/fonts/HelveticaNeue.ttf'),
        'Helvetica-Light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
        'Helvetica-Bold': require('./assets/fonts/Helvetica-Neu-Bold.ttf')
      });
      setIsFontReady(true);
    };
    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRoutes /> : null;
}
