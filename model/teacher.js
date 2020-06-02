const Staff = require("./staff.js");

class Teacher extends Staff {
  constructor( 
    first_name,
    last_name,
    phone_number,
    address,
    personal_email,
    base_salary,
    bank_IBAN,
    bank_name,
    bank_branch,
    floors_covered, 
    classes_taught, 
    subject, 
    employment_type){
      super(first_name , last_name , phone_number , address , personal_email , base_salary ,  bank_iban , bank_name , bank_branch);
      this.floors_covered = floors_covered;
      this.classes_taught = classes_taught;
      this.subject = subject;
      this.employment_type = employment_type;
  }
}
module.export = Teacher;