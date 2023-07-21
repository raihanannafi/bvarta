describe("Patch User", () => {
    const testData = require("../fixtures/user/patch_user.json")

    testData.forEach((testData) => {
      it(`${testData.test_number}.${testData.test_type}- Patch User ${testData.desc}`, () => {
        cy.request({
          method: "PATCH",
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
        if (response.status = 201) {
          expect(response.body.name).to.eq(testData.name)
          expect(response.body.job).to.eq(testData.job)
        }
      })
    })
  })
})