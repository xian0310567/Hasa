import Home from './components/Home.svelte'
import Deposit from './components/Deposit.svelte'
import Alarm from './components/Alarm.svelte';
import BuildingInformation from './components/BuildingInformation.svelte';

const routes = {
    '/': Home,
    '/deposit': Deposit,
    '/alarm': Alarm,
    '/build': BuildingInformation,
    '*': Home,
}

export default routes;