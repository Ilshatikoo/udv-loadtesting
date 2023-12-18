export const testConfig = {
    testScenario: {
        singleRun: {
            vus: 1
        },
        secondRun: {
            vus: 2,
            duration: '2m' 
        }
    },
    enviroment: {
        local: {
            url: 'http://127.0.0.1/'
        },
        production: {
            url: 'https://product.service.prod/'
        }
    }
}