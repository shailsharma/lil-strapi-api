var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var request = require('request');
var should = chai.should();
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
    
    it('should fetch a quiz', function(done){
       chai.request('http://localhost:1337')
       .get('/quiz')
       .end(function(err,res){
           expect(res.status).to.equal(200);
           expect(res.body).to.be.a('array');
           res.body[0].should.have.property('question');
           res.body[0].should.have.property('subject');
           res.body[0].should.have.property('options');
           expect(res.body[0].options).to.be.a('array');
           done();
       });
    });
    
    // it('should add a quiz', function(done){
    //    var object = { 'question': 'This is test?', 'subject': 'This is subject!', 'options' : 'this is options' };
    //    chai.request('http://localhost:1337')
    //      .post('/quiz')
    //      .send(object)
    //      .end(function(err,res){
    //          console.log('hello');
    //          console.log(res);
    //          console.log(err);
    //          res.should.have.status(200);
    //          done();
    //      });
    // });

});
