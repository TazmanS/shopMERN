import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {HomePage, AdminPanelPage, ProductPage} from '../pages'

const Routes = () => {
	return (
		<Switch>
			<Route path={'/'} component={HomePage} exact/>
			<Route path={'/product/:id'} component={ProductPage} />
			<Route path={'/admin'} component={AdminPanelPage} />
		</Switch>
	)
}

export default Routes