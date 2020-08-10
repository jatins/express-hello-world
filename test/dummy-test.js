let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe("Root", function(){
    describe ("Get /", function(){
        it("should return a 200 code", done=>{
            chai.request(server)
                .get("/")
                .send({})
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.deep.equals({message: "Hello World!"})
                    done()
                })
        })

    })
})