
import Sinon from "sinon";
import { sqlQuest } from "../../../../config/database";
import App from "../../../../config/express";
import { StatusCodes } from "http-status-codes";
import { routeBase } from "../../../routes";
import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { catergoryFixture } from "./fixture";
import { Console } from "winston/lib/winston/transports";

const expect = chai.expect;
const prefix = `${routeBase.V1_PATH}/category`;

const categoryValue = {
    "id": 10,
    "name": "Test Category",
    "parentId": 9
}

const getCategoriesValue = {
    "data": {
        "id": 10,
        "name": "root category",
        "parent_id": null,
        "children": [
            {
                "id": 9,
                "name": "category 1",
                "parent_id": 8,
                "children": [
                    {
                        "id": 14,
                        "name": "sub category 2",
                        "parent_id": 9,
                        "children": []
                    },
                    {
                        "id": 15,
                        "name": "sub category 2",
                        "parent_id": 9,
                        "children": []
                    }
                ]
            },
            {
                "id": 10,
                "name": "category 2",
                "parent_id": 8,
                "children": []
            },
            {
                "id": 11,
                "name": "category 3",
                "parent_id": 8,
                "children": [
                    {
                        "id": 12,
                        "name": "sub category 1",
                        "parent_id": 11,
                        "children": []
                    }
                ]
            }
        ]
    },
}

chai.use(chaiHttp);

const getCategory = async () => categoryValue;
const getCategories = async () => getCategoriesValue;

describe("Category Routes", () => {
    afterEach(function () {
        Sinon.restore();
    });

    it("should create a category successfully", async () => {
        Sinon.replace(sqlQuest, "oneOrNone", Sinon.fake.returns(getCategory()));
        const result = await chai
            .request(App())
            .post(`${prefix}/create`)
            .send(catergoryFixture);

        expect(result.body).to.have.property("status", "success");
        expect(result.status).to.eql(StatusCodes.CREATED);

    });

    it("should remove a category successfully", async () => {
        Sinon.replace(sqlQuest, "oneOrNone", Sinon.fake.returns(getCategory()));
        const result = await chai
            .request(App())
            .delete(`${prefix}/remove/10`);

        expect(result.body).to.have.property("status", "success");
        expect(result.status).to.eql(StatusCodes.OK);
    });

    it("should move a category successfully", async () => {
        Sinon.replace(sqlQuest, "oneOrNone", Sinon.fake.returns(getCategory()));
        const result = await chai
            .request(App())
            .put(`${prefix}/move/10`)
            .send(catergoryFixture);

        
        expect(result.body).to.have.property("status", "success");
        expect(result.status).to.eql(StatusCodes.OK);
    });

});