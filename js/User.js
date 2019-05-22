const User = {
  firstName: 'Abra',
  lastName: 'Mabra',
  happy_of_birthday: '23/03/1998',

  get fullName() {
    return (this.firstName + ' ' + this.lastName);
  },
  set fullName(val) {
    let acc = val.split(' ');
    this.firstName = acc[0];
    this.lastName = acc[1];
  },

  get happy_of_birthday_change() {
    return (this.happy_of_birthday);
  },
  set happy_of_birthday_change(val) {
    const UPDATE_BIRTHDAY = val.split('/');
    let day = parseInt(UPDATE_BIRTHDAY[0]);
    let month = parseInt(UPDATE_BIRTHDAY[1]);
    let year = parseInt(UPDATE_BIRTHDAY[2]);

    const ORIGIN_BIRTHDAY = this.happy_of_birthday.split('/');

    let origin_birthday_day = parseInt(ORIGIN_BIRTHDAY[0]);
    let origin_birthday_month = parseInt(ORIGIN_BIRTHDAY[1]);
    let origin_birthday_year = parseInt(ORIGIN_BIRTHDAY[2]);

    if (day > 32) {
      day = origin_birthday_day;
    }
    if (month > 13) {
      month = origin_birthday_month;
    }
    if (year < 1970) {
      year = origin_birthday_year;
    }

    this.happy_of_birthday = `${day}/${month}/${year}`;

  }
}

export default {User}
