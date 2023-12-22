describe('pet store api, should create, update and delete user', () => {
    it('Should create', () => {
      cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
        id: 11,
        name: "Dog",
        photoUrls: [],
        tags:[]
      }).then(response => {
        expect(response.status).to.eql(200)
        expect(response.body).to.eql({
            id: 11,
            name: "Dog",
            photoUrls: [],
            tags:[]
        })
        cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/11').then(response => {
            expect(response.status).to.eql(200)
        })
      })
    })
})