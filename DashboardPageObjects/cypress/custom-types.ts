/// <reference types="cypress" />

type CypressElement = Cypress.Chainable<JQuery<HTMLElement>>

// interface pageElement {
//   get: (locator: string) => cy.get(locator)
// }

export function getElement<T>(locator: string): CypressElement {
  return cy.get(locator)
}

// export function getXPathElement<T>(locator: string): CypressElement {
//   return cy.xpath(locator)
// }

// export function getDAIDElement<T>(locator: string): CypressElement {
//   return cy.getByDataAutomationId(locator)
// }