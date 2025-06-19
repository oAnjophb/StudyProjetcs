import { Developer, Manager } from './models'
import { Payroll } from './payroll'

const payday = new Payroll()

const joao = new Manager('Joao', 5000)
const alice = new Developer('Alice', 2100)
const alberto = new Developer('Alberto', 4000)

const iran = new Manager('Iran', 3000)
const aldair = new Developer('Aldair', 2100)

payday.register('joao', joao)
payday.register('Alice', alice)
payday.register('Alberto', alberto)
payday.register('Iran', iran)
payday.register('aldair', aldair)

iran.setBonus(100, 1)
joao.setBonus(100, 2)

payday.calculate()
payday.showPayroll()
