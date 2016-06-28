var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('The api', function() {
    it('should return events with get /events', function(done){
        chai.request(server)
            .get('/api/events')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.events.should.be.a('array');
                done();
            });
    });
});

// pls build
