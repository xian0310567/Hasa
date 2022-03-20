import Home from './components/Home.svelte'
import Deposit from './components/Deposit.svelte'
import Alarm from './components/Alarm.svelte';

const routes = {
    '/': Home,
    '/deposit': Deposit,
    '/alarm': Alarm,
    '*': Home,
}

export default routes;