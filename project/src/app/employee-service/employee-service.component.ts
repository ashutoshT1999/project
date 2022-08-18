import { Injectable } from "@angular/core";


@Injectable()
export class empdata {
    emp: any[] = [
        { code: 1, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 2, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 3, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 4, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 5, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 6, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 7, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 8, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" },
        { code: 9, firstname: "ashutosh", middlename: "gg", lastname: "tiwari", department: "cse", pincode: 111111, gender: "male", btnview: "View", btnedit: "Edit", btndelete: "Delete" }
    ]

    getdata() {
        return this.emp;
    }
    getempbyid(id: string | null) {
        return this.emp.filter(x => x.code == id);
    }
}