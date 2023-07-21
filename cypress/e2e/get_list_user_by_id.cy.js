describe("Get List User by Id", () => {
    const testData = require("../fixtures/user/get_list_user_by_id.json")
    const db_user = require("../fixtures/db_user.json");
    testData.forEach((testData) => {
      it(`${testData.test_number}.${testData.test_type}- Get List User ${testData.desc}`, () => {
        cy.request({
          method: "GET",
          url: `/api/users/${testData.id}`,
          failOnStatusCode: false
        }).then((response) => {
        // validate response status code
        expect(response.status).to.eq(testData.expected_resp_code)
        // validate response body with database
        if (response.status === 200) {
          expect(db_user.data).to.deep.include(response.body.data);
        }
      })
    })
  })
})