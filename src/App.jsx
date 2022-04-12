import React from 'react'
import { Provider } from 'react-redux'
import Players from './components/Players'
import TeamPlanned from './components/TeamPlanned'
import store from './store'
import "./styles/styles.scss"


 const App = () => (
   <Provider store={store}>
    <main>
      <h1>Team Planner</h1>
      <Players />
      <TeamPlanned></TeamPlanned>
    </main>
    </Provider>
 )

export default App
