const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
  console.log(items);

  const elements = items.map((element) => 
    `<li>
      <h3>${element.name}</h3>
      <p><strong>Phone:</strong> <a href="tel:${element.phone}">${element.phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${element.email}">${element.email}</a></p>
    </li>`
  );
  
  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = q('form');
  const input = q('form input');
  const list = q('ul');
  const add = q('#add');
  const modal = q('#modal')
  const wrapper =q('#wrapper')
  
  render(list, data);

  input.addEventListener('keyup', (event) => {
    const value = input.value.toLowerCase();

    const results = data.filter((element) => 
      element.name.toLowerCase().search(value) > -1 ||
      element.email.toLowerCase().search(value) > -1
    );

    render(list, results);
  });

modal.addEventListener('click', (event)=> {
  if (add.style.display !== "grid") {
    add.style.display = "grid";
  
    modal.style.display ="none"
  } else {
    add.style.display = "none";
  }
})


  add.addEventListener('submit', (event) => {
    event.preventDefault();

    const newContact = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    };

    data.push(newContact);

    render(list, data);

    add.reset();
    modal.style.display ="block"
    add.style.display ="none"
  });
});