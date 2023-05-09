/// <reference types='cypress' />

// const { TimeoutError } = require("cypress/types/bluebird")
// const { timers } = require("cypress/types/jquery")

// const { timers } = require("cypress/types/jquery")

describe('sign in', () => {
  
  // it('valid information', () => {
  //   cy.visit('https://supportqa.safefamilyapp.com/login', {timeout : 8000}).contains('Support Login')

  //   cy.get('[data-cy="login-form-email"]', {timeout : 7000}).type('t.lochanadhikari+support@codavatar.tech').click()
  //   cy.get('[data-cy="login-form-password"]').type('Cod@v@t@r16').click()
  //   cy.get('[data-cy="login-form-submit"]').click()
  //   cy.get('.sc-ktvWjP', {timeout : 7000}).should("include.text", "Customer Support")     //Success Check


  //   cy.get('.menu--active > .sc-cVJgsR', {timeout : 7000}).click() //Number Purchase
  //   cy.get('.sc-fnebDD > :nth-child(1) > div', {timeout : 7000}).should("include.text", "Record of all the recent number purchase from Krispcall")
  //   cy.wait(7000)

  //   cy.contains('Number Porting').click() //Number Porting
  //   cy.get('.sc-fnebDD > :nth-child(1) > div', {timeout : 7000}).should("include.text", "Record of all the requested porting number from Krispcall")
  //   cy.wait(7000)

  //   cy.contains('Enterprise Plan').click() //Enterprise Plan
  //   cy.get('.sc-fnebDD > :nth-child(1) > div').should("include.text", "Record of enterprise plan upgrade request from Krispcall")
  //   cy.wait(7000)
    
  //   cy.contains('Feedbacks').click() //Feedbacks
  //   cy.get('.sc-fnebDD > :nth-child(1) > div').should("include.text", "Record of feedbacks from KrispCall")
  //   cy.wait(7000)

  //   cy.contains('Workspaces').click() //Workspaces
  //   cy.get('.sc-fnebDD > :nth-child(1) > div').should("include.text", "Record of workspaces from KrispCall")
  //   cy.wait(7000)

  //   cy.contains('Users').click() //Users
  //   cy.get('.sc-fnebDD > :nth-child(1) > div', {timeout : 7000}).should("include.text", "Record of users from KrispCall")
  //   cy.wait(8000)

  //   cy.contains('Account Review').click() //Account Review
  //   cy.get('.sc-fnebDD > :nth-child(1) > h6', {timeout : 8000}).should("include.text", "Account Review0")
  //   cy.wait(8000)

  //   cy.contains('Email Verification').click() //Email Verification
  //   cy.get('.sc-fnebDD > :nth-child(1) > h6', {timeout : 8000}).should("include.text", "Email Verification0")
  //   cy.wait(8000)
    
  //   cy.contains('Incomplete Signup').click() //Incomplete Signup
  //   cy.get('.sc-fnebDD > :nth-child(1) > h6', {timeout : 8000}).should("include.text", "Incomplete Signup0")
  //   cy.wait(8000)

  //   cy.contains('Workspace Usecases').click() //Workspace Usecases
  //   cy.get('.sc-fnebDD > :nth-child(1) > h6', {timeout : 8000}).should("include.text", "Workspace Usecases0")
  //   cy.wait(8000)
    
  //   cy.contains('Spam').click() //Spam
  //   cy.get('.sc-fnebDD > :nth-child(1) > h6', {timeout : 8000}).should("include.text", "Spam Workspaces0")

  // })
  it('invalid email', () => {
    cy.visit('https://supportqa.safefamilyapp.com/login')
    cy.get('[data-cy="login-form-email"]').type('xyz@codavatar.tech').click()
    cy.get('[data-cy="login-form-password"]').type('Cod@v@t@r16').click()
    cy.get('[data-cy="login-form-submit"]').click()
    cy.get('.ant-alert-message', {timeout : 7000}).should("include.text", "Your email or password is incorrect.Please try again.") //Fail check
  })

  // it('invalid password', () => {
  //   cy.visit('https://supportqa.safefamilyapp.com/login')
  //   cy.get('[data-cy="login-form-email"]').type('t.lochanadhikari+support@codavatar.tech').click()
  //   cy.get('[data-cy="login-form-password"]').type('123').click()
  //   cy.get('[data-cy="login-form-submit"]').click()
  //   cy.get('.ant-alert-message', {timeout : 7000}).should("include.text", "Your email or password is incorrect.Please try again.") //Fail check
  // })

  // it('invalid email and password', () => {
  //   cy.visit('https://supportqa.safefamilyapp.com/login')
  //   cy.get('[data-cy="login-form-email"]').type('xyz.tech').click()
  //   cy.get('[data-cy="login-form-password"]').type('123').click()
  //   cy.get('[data-cy="login-form-submit"]').click()
  // cy.get('.ant-alert-message', {timeout : 7000}).should("include.text", "Your email or password is incorrect.Please try again.") //Fail check   
  // })
})
