describe("Get List User by Param", () => {
  const testData = require("../fixtures/user/get_list_user_by_param.json");
  const db_user = require("../fixtures/db_user.json");
  testData.forEach((testData) => {
    it(`${testData.test_number}.${testData.test_type}- Get List User ${testData.desc}`, () => {
      cy.request({
        method: "GET",
        url: `/api/users`,
        qs: {
          page: `${testData.page}`,
          per_page: `${testData.per_page}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        // validate response status code
        expect(response.status).to.eq(testData.expected_resp_code);
        // validate each array data with database user
        response.body.data.forEach((db_user) => {
          expect(response.body.data).to.deep.include(db_user);
        });
      });
    });
  });
});
