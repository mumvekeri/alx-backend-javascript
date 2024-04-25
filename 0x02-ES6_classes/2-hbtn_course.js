export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' && length > 0 ? length : 0;
    this._students = Array.isArray(students) ? students.filter(student => typeof student === 'string') : [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number' && newLength > 0) {
      this._length = newLength;
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents.filter(student => typeof student === 'string');
    }
  }
}
