import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class User {
    UserName: string;
    Email: string;
    DOB: Date;
    Mobile: string;
    Experience: Array<any>;
    Education:Array<any>;
    Hobbies: Array<string>;
    Gender: string;
    Skills:Array<any>;
    EmailServiceEnrolled: boolean;
    CallServiceEnrolled: boolean;
    AggreedTermsCondition: boolean;
    constructor() {
        this.UserName = "Indresh Kumar Srivastav";
        this.Email = "indresh.srivstav@gmail.com";
        this.DOB = new Date(1988, 11, 18);
        this.Mobile = "8928228547";
        this.Experience = [{ Id: 1, CompanyName: "ABC", Year: "2010-2013", Designation: "SSE" }, { Id: 2, CompanyName: "DEF", Year: "2014-2016", Designation: "SSE" }, { Id: 3, CompanyName: "GHI", Year: "2016-2019", Designation: "TL" }];
        this.Education = [{ Id: 1, InstituteName: "ABC", Course:"SSC",Year: "1999",Type:"Full Time" },{ Id: 2, InstituteName: "DEF", Course:"HSC",Year: "2001",Type:"Full Time" },{ Id: 3, InstituteName: "GHI", Course:"BSc.",Year: "2005",Type:"Full Time" },{ Id: 4, InstituteName: "JKL", Course:"P. G.",Year: "2009",Type:"Full Time" }];
        this.Skills=[{Name:"Dotnet",path:"Dotnet.png"},{Name:"Angular",path:"Angular.png"},{Name:"Bootstrap",path:"Bootstrap.png"},{Name:"Sql",path:"Sql.png"}]
        this.Hobbies = ["Travelling", "Watching Movies"];
        this.Gender = "Male";
        this.EmailServiceEnrolled = false;
        this.CallServiceEnrolled = false;
        this.AggreedTermsCondition = false;
    }
}