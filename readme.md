# js object 
object is a composite data type in js. We can store data in object with key value pairs. here key also known as properties. If key  value is a function we called it method.  We can access object key using `.` notation or `[index]` . `.` is easy to use and require less typing and look clean.  

~~~js
var person = {
  first_name: 'sumon',
  last_name: 'ahmed',
  fullName: function () {
    return person.first_name + " " + person.last_name;
  }
}
~~~

Here `person` is a object. which has `first_name` and `last_name` properties and `fullName` method.   

# Document object model (DOM)
Document object model is a javascript api which help us to manipulate html document in browser. Here html can be getting and mutate through `document` object. `document` object contain lot of `properties` and `method` which help us to manipulate html document. suppose we want to change html or text content of an element in such case we will do following     
~~~js
// for html
element_name.innerHTML = "some html content"
// for text
element_name.innerText = "some html content"
~~~

In order to manipulate dom we first select an element. Whenever we select an element it could be single element or array of element. We can getting or setting directly single element. But if its return array of element we have to destruct array to single element by index or iterate (looping). Then we will be able to set or get value from element.  

### some single return 
* `document.title` // it will give us string. Since entire document title occur only one times.     
* `document.body` // it will give us string. Since entire document body occur only one times.    
* `document.getElementById('some_id')` // it will give us string since id will be unique in entire page.    

### some array return

* `document.getElementsByTagName('h1')` it will give us array return. Since `h1` could be occur in html page multiple times. in this case we can access our appropriate h1 element by indexing like `document.getElementsByTagName('h1')[0]`     


When we want to mutate all element of a array return we should iterate it with loop.  Like following    

~~~js
var a = document.getElementsByTagName('a');
for (var i =0; i < a.length; i++) {
  a[i].style.color = 'red';
}
~~~







