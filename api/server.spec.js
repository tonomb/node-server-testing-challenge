const supertest = require("supertest");
const server = require("./server");
const db = require('../data/dbConfig')

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

  describe("GET /quotes", () => {
    
    it("should return 200", () => {
      return supertest(server)
        .get("/quotes")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return 4 books", async() => {
      const books = await supertest(server).get("/quotes")
        
      expect(books.body.books).toHaveLength(4)
    });

  });
});
