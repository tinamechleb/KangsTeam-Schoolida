class Staff{
  constructor(first_name , last_name , phone_number , address , personal_email , base_salary , bank_iban , bank_name , bank_branch){

    this.first_name = first_name;
    this.last_name = last_name;
    this.phone_number = phone_number;
    this.address = address;
    this.personal_email = personal_email;
    this.base_salary = base_salary;
    this.bank_iban = bank_iban;
    this.bank_name = bank_name;
    this.bank_branch = bank_branch;
  }
} 

module.exports = Staff;