import * as React from 'react'
import {mount} from '@cypress/react'
import App from "./App";

it('App', () => {
    mount(<App/>)
    cy.get('button').contains('Test button').click()
})

