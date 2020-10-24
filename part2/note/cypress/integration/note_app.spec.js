describe('Note app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'zhong fengcheng',
      username: 'zfc',
      password: '123'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be open', function () {
    cy.contains('Notes')
    cy.contains('Note app,Department of Computer Science')
  })

  it('login faiils with wrong password', function () {
    cy.contains('login').click()
    cy.get('#username').type('zfc')
    cy.get('#password').type('aaa')
    cy.get('#login-button').click()

    cy.get('.error').should('contain', 'Wrong credentials')
    cy.get('html').should('not.contain', 'zhong fengcheng logged in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'zfc', password: '123' })
    })

    it('a new note can be created', function () {
      cy.contains('create new note').click()
      cy.get('#input-content').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('add a note exists', function () {
      beforeEach(function () {
        cy.createNote({
          content: 'another note cypress',
          important: false
        })
      })

      it('it can be made important', function () {
        cy.contains('another note cypress').contains('make important').click()

        cy.contains('another note cypress').contains('make not important')
      })
    })

    describe('and several notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be mad important', function () {
        cy.contains('second note').contains('make important').click()

        cy.contains('second note').contains('make not important')
      })
    })
  })
})
