const button = document.querySelector('button');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const errorMsg = document.querySelector('#error-msg');

button.addEventListener('click', getApi);
input.addEventListener('keyup', (e) => {
   if (e.key == 'Enter') {
      button.click();
   }
});

function getApi() {
   errorMsg.innerHTML = '';
   let url = 'https://www.swapi.tech/api/people/?name=';
   let name = input.value;
   if (name) {
      url += name;
      fetch(url)
         .then(res => res.json())
         .then(data => {
            const props = data.result[0].properties;
            console.table(props);
            let x =
               `Name: ${props.name}\r\n` +
               `Height: ${props.height}\r\nMass: ${props.mass}\r\n` +
               `Gender: ${props.gender}\r\nHair color: ${props.hair_color}\r\n`;
               textArea.innerHTML = x;
            input.value = '';
         })
         .catch(err => {
            errorMsg.innerHTML = `<span style="color:crimson">Sorry, no record of ${name}</span>`;
            console.log("Wrong:" + err);
            input.focus();
         });
   }
}

input.focus();

