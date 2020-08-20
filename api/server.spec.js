const supertest = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    
    it("should return 200", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return return working", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe('working');
        });
    });

  });
});
