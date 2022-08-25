import { AbstractControl } from "@angular/forms";

export class emailValidator {

    static emailcheckwithparams(emailvaue: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            // console.log("control :" + control);
            const email: string = control.value;
            const domain: string = email.substring(email.lastIndexOf('@')+1);
            // console.log("email :" + email);
            // console.log("domain :" + email.lastIndexOf('@')+1);
            if (domain.toLowerCase() === emailvaue) return null;
            else return { 'emailmismatch': true };
        }
    }

    // emailcheck(control: AbstractControl): { [key: string]: any } | null {
    //     console.log("control :" + control);
    //     const email: string = control.value;
    //     const domain: string = email.substring(email.lastIndexOf('@') + 1);
    //     console.log("email :" + email);
    //     console.log("domain :" + domain);
    //     if (domain.toLowerCase() === "gmail.com") return null;
    //     else return { 'emailmismatch': true };

    // }
}