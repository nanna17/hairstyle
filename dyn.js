const data = [
    {
      name:"Nandini hairstyle web-Twist With Twist Out",
      info: "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/",
      pic: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/13-flat-twist-with-twist-out-2.jpg?w=500&ssl=1"
    },
    // Add more hairstyles to the array
  ];
  
  const buildHairstyleCard = (hairstyle) => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const a = document.createElement('a');
  
    card.className = 'card';
    img.src = hairstyle.pic;
    img.alt = hairstyle.name;
    h4.textContent = hairstyle.name;
    a.textContent = 'Learn More';
    a.href = hairstyle.info;
  
    card.append(img);
    card.append(h4);
    card.append(a);
  
    const main = document.querySelector('main');
    main.append(card);
  };
  
  data.forEach(hairstyle => buildHairstyleCard(hairstyle));