import { Sidebar } from './Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ParaRealizar } from './pages/pararealizar/ParaRealizar'

export function Dashboard() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/dashboard/pedidos/pararealizar" exact component={ParaRealizar} />
            </Switch>
        </Router>
    )
}