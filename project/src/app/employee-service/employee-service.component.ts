import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { employeeinterface } from "../interface/interface.emp.component";


@Injectable()
export class empdata {
    employeeURL:string="api/emp";
    constructor(private _http:HttpClient){
        
    }
    emp: any[] = [
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

    // getdata() {
    //     return this.emp;
    // }
    // getempbyid(id: string | null) {
    //     return this.emp.filter(x => x.code == id);
    // }
    getdata():Observable<employeeinterface[]> {
        return this._http.get<employeeinterface[]>(this.employeeURL);
    }
    // getempbyid(id: string | null) {
    //     return this._http.get<any[]>(this.employeeURL).filter(x => x.code == id);
    // }
}