describe("Delete User", () => {
    const testData = require("../fixtures/user/delete_user.json")

    testData.forEach((testData) => {
      it(`${testData.test_number}.${testData.test_type}- Delete User ${testData.desc}`, () => {
        cy.request({
          method: "DELETE",
          url: `/api/users/${testData.id}`,
          body: {
            name: `${testData.name}`,
            job: `${testData.job}`
          },
          failOnStatusCode: false
        }).then((response) => {
        expect(response.status).to.eq(testData.expected_resp_code)
      })
    })
  })
})