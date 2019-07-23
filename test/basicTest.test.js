const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:1337`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Response returns hello world', (done) => {
        request.post('/api')
            .send({ query: ' { hello }' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.data.hello).to.contain('Hello world!');
                done();
            });
    });
});