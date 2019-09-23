import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator, } from 'react-navigation-stack'
import { PesawatPage, PesawatSearchPage } from '../../Container/Pages'

const AppNavigator = createStackNavigator(
    {
        PesawatPage,
        PesawatSearchPage
    },
    {
        headerMode: 'none',
        initialRouteName: 'PesawatPage'
    }
)

export default createAppContainer(AppNavigator)