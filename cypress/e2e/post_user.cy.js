describe("Add New User", () => {
    const testData = require("../fixtures/user/post_user.json")

    testData.forEach((testData) => {
      it(`${testData.test_number}.${testData.test_type}- Add New User ${testData.desc}`, () => {
        cy.request({
          method: "POST",
          url: "/api/users",
          body: {
            name: `${testData.name}`,
            job: `${testData.job}`
          },
          failOnStatusCode: false
        }).then((response) => {
        // validate response status code
        expect(response.status).to.eq(testData.expected_resp_code)
        // validate response body with payload
        if (response.status === 201) {
          expect(response.body.name).to.eq(testData.name)
          expect(response.body.job).to.eq(testData.job)
        }
      })
    })
  })
})