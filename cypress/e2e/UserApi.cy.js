describe('pet store api, should create, update and delete user', () => {
  it('Should create', () => {
    cy.loginApi('Sergey', 1234)
    cy.request('POST', '/', {
      id: 11,
      username: 'Segey',
      firstName: 'Trukhachev',
      lastName: 'Nikolaevich',
      email: 'trukhachev@gmail.com',
      password: '1234',
      phone: '79518644585',
      userStatus: 0
    }).then(response => {
      expect(response.status).to.eql(200)
      expect(response.body).to.eql({
        code: 200,
        type: 'unknown',
        message: '11'
      })
    })
  })
  it('Should update', () => {
    cy.loginApi('Sergey', 1234)
    cy.request('PUT', 'https://petstore.swagger.io/v2/user/Sergey', {
      id: 555,
      firstName: 'Ivanov',
      lastName: 'Ivanovich'
    }).then(response => {
      expect(response.status).to.eql(200)
      expect(response.body).to.eql({
        code: 200,
        type: 'unknown',
        message: '555'
      })
    })
  })
  it('Should delete', () => {
    cy.loginApi('Sergey', 1234)
    cy.request('POST', '/', {
      id: 12,
      username: 'Volody',
      firstName: 'Trukhachev',
      lastName: 'Nikolaevich',
      email: 'trukv@gmail.com',
      password: '1234',
      phone: '79518644500',
      userStatus: 0
    }).then(response => {
      expect(response.status).to.eql(200)
      expect(response.body).to.eql({
        code: 200,
        type: 'unknown',
        message: '12'
      })
      cy.request('DELETE', 'https://petstore.swagger.io/v2/user/Volody').then(
        response => {
          expect(response.status).to.eq(200)
        }
      )
    })
  })
})
