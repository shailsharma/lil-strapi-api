var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var request = require('request');
chai.use(chaiHttp);

describe('Quiz Model Test', function(){

    it('Should match values', function(){
        var name = 'Gitesh Purbia';
        expect(name).to.equal('Gitesh Purbia');
    });

    it('Should have a status code 200', function(done) {
        chai.request('http://localhost:1337')
            .get('/quiztest')
            .end(function(err, res){
                expect(res.status).to.equal(200);
                expect(res.body).to.be.a('array');
                done();
            });
    });

    it('should return 404', function (done) {
        chai.request('http://localhost:1337')
            .get('/wrongurl')
            .end(function(err, res){
                expect(res.statusCode).to.equal(404);
                done();
            });
    });

});
