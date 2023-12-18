import { UmsService } from './resources/ums.js'
import { testConfig } from './config.js'
import { BaseHelper } from './helpers/baseHelper.js'

let baseHelper = new BaseHelper()
let enviroment = testConfig.enviroment.local

let umsService = new UmsService(enviroment.url)

export const options = testConfig.testScenario.singleRun;

export function setup() {
    console.log(`starting at ${baseHelper.currentDate()}`)
}

export default () => {
    let loginResponse = umsService.doLogin()
}

export function teardown() {
    console.log(`ending at ${baseHelper.currentDate()}`)
}