import * as React from 'react'
import {mount} from '@cypress/react'
import App from "./App";

it('App', () => {
    mount(<App/>)
    cy.contains('Learn React').should("not.exist");
    // cy.contains('Learn React').should("exist");
})

