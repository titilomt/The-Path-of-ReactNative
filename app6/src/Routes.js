import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Principal from './components/Principal';
import About from './components/About';
import Others from './components/Others';
import Results from './components/Results';

const routes = _=> {
    return (
        <Router sceneStyle={{ paddingTop: 50 }}>
            <Stack key='root'>
                <Scene key='principal' component={Principal} initil title='Cara ou Coroa'/>
                <Scene key='sobrejogo' component={About} title='Sobre o jogo' />
                <Scene key='outrosjogos' component={Others} title='Outros Jogos' />
                <Scene key='resultado' component={Results} title='Resultado' />    
            </Stack>
        </Router>
    );
};

export default routes;
