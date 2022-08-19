import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
export class employeedatabyapi implements InMemoryDbService {
    createDb() {
        return {
            emp: [
                { code: 1, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 2, firstname: "ashu", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 3, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 4, firstname: "ashutosh", middlename: "", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 5, firstname: "ashu", middlename: "", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 6, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 7, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 8, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
                { code: 9, firstname: "ashutosh", middlename: "", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" }
            ]
        };
    }


}