import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { ChevroletScreen } from '../components/chevrolet/ChevroletScreen';
import { HondaScreen } from '../components/honda/HondaScreen';
import { NissanScreen } from '../components/nissan/NissanScreen';
import { VolkswagenScreen } from '../components/volkswagen/VolkswagenScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
			<Navbar />

			<div className="container mt-2">
				<Switch>
					<Route exact path="/marvel" component={ MarvelScreen } />
					<Route exact path="/hero/:heroeId" component={ HeroScreen } />
					<Route exact path="/dc" component={ DcScreen } />
					<Route exact path="/chevrolet" component={ ChevroletScreen } />
          <Route exact path="/honda" component={ HondaScreen } />
					<Route exact path="/nissan" component={ NissanScreen } />
					<Route exact path="/volkswagen" component={ VolkswagenScreen } />
					<Route exact path="/search" component={ SearchScreen } />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
    )
}
