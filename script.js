var person = {
  first_name: 'sumon',
  last_name: 'ahmed',
  fullName: function () {
    return person.first_name + " " + person.last_name;
  }
}

// person['first_name'] // sumon
// person.first_name //sumon
// person.last_name //sumon
// person.fullName(); // sumon ahmed
// document.title  // Document //getters
// document.title  = 'some another title' // setters

// document.body
// document.head

var a = document.getElementsByTagName('a');
for (var i =0; i < a.length; i++) {
  a[i].style.color = 'red';
}
