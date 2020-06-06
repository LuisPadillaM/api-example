window.onload =  function() {
    const list = document.getElementById('list')
    console.log('list', list)
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
        console.log('response', response)
        response.json().then((responseParsed) => {
            console.log('responseParsed', responseParsed)
            responseParsed.forEach((todo) => {
                const li = document.createElement('li')
                const checkbox = document.createElement('input')
                checkbox.type = "checkbox"
                checkbox.value = todo.completed
                li.innerHTML = todo.title
                list.appendChild(li)
            })
        })
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}