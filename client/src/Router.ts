import Home from './components/Home.svelte'
import Deposit from './components/Deposit.svelte'

const routes = {
    '/': Home,
    '/deposit': Deposit,
    '*': Home,
}

export default routes;