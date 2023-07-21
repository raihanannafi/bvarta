describe("Update  User", () => {
    const testData = require("../fixtures/user/put_user.json")

    testData.forEach((testData) => {
      it(`${testData.test_number}.${testData.test_type}- Update  User ${testData.desc}`, () => {
        cy.request({
          method: "PUT",
          url: `/api/users/${testData.id}`,
          body: {
            name: `${testData.name}`,
            job: `${testData.job}`
          },
          failOnStatusCode: false
        }).then((response) => {
        // validate response status code
        expect(response.status).to.eq(testData.expected_resp_code)
        // validate response body with payload
        if (response.status = 200) {
          expect(response.body.name).to.eq(testData.name)
          expect(response.body.job).to.eq(testData.job)
        }
      })
    })
  })
})