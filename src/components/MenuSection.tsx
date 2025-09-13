import React, { useState } from 'react';
import { X, Star } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas-creme');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    { id: 'pizzas-creme', name: 'Pizzas Base Crème', icon: '🍕', color: 'bg-[#C4513C]' },
    { id: 'pizzas-tomate', name: 'Pizzas Base Tomate', icon: '🍕', color: 'bg-[#E7A33C]' },
    { id: 'grillades', name: 'Grillades', icon: '🥩', color: 'bg-[#114A2F]' },
    { id: 'sandwichs', name: 'Sandwichs', icon: '🥪', color: 'bg-[#C4513C]' },
    { id: 'signatures', name: 'Nos Signatures', icon: '⭐', color: 'bg-[#E7A33C]' },
    { id: 'tex-mex', name: 'Tex Mex', icon: '🌮', color: 'bg-[#114A2F]' },
    { id: 'desserts', name: 'Desserts & Boissons', icon: '🍰', color: 'bg-[#C4513C]' }
  ];

  const menuItems = {
    'pizzas-creme': [
      { 
        id: 1, 
        name: '4 Fromages', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        base: 'Base crème',
        ingredients: 'Chèvre, emmental, mozzarella, bleu',
        description: 'Un mélange parfait de 4 fromages fondants sur base crème onctueuse'
      },
      { 
        id: 2, 
        name: 'New Yorkaise', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Poulet, pepperoni, mozzarella',
        description: 'L\'esprit américain avec poulet tendre et pepperoni épicé'
      },
      { 
        id: 3, 
        name: 'French', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Pommes de terre, poulet, emmental, mozzarella',
        description: 'Pizza à la française avec pommes de terre fondantes'
      },
      { 
        id: 4, 
        name: 'Kebab', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Viande kebab, mozzarella, oignons',
        description: 'Saveurs orientales avec viande kebab marinée'
      },
      { 
        id: 5, 
        name: 'La Calaisienne', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Viande hachée, mozzarella, oignons',
        description: 'Généreuse pizza à la viande hachée du Nord'
      },
      { 
        id: 6, 
        name: 'La Girolle', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Champignons, mozzarella, crème',
        description: 'Pizza forestière aux champignons frais'
      },
      { 
        id: 7, 
        name: 'Savoyarde', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        base: 'Base crème',
        ingredients: 'Pommes de terre, reblochon, lardons, oignons, mozzarella',
        description: 'L\'authentique pizza des Alpes avec reblochon fondant'
      },
      { 
        id: 8, 
        name: 'Margherite', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Mozzarella, crème',
        description: 'La simplicité à l\'italienne, version crème'
      },
      { 
        id: 9, 
        name: 'Chèvre Miel', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Chèvre, miel, mozzarella',
        description: 'Mariage sucré-salé avec fromage de chèvre et miel'
      },
      { 
        id: 10, 
        name: 'Ardennaise', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Pommes de terre, reblochon, lardons, mozzarella',
        description: 'Pizza rustique aux saveurs des Ardennes'
      },
      { 
        id: 11, 
        name: 'Country', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Poulet, champignons, mozzarella, oignons',
        description: 'Pizza campagnarde au poulet et champignons'
      },
      { 
        id: 12, 
        name: 'Montagnarde', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base crème',
        ingredients: 'Pommes de terre, reblochon, lardons, champignons, mozzarella',
        description: 'La plus complète de nos pizzas montagnardes'
      }
    ],
    'pizzas-tomate': [
      { 
        id: 13, 
        name: 'Poulet Roquefort', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        base: 'Base tomate',
        ingredients: 'Sauce roquefort, poulet, tomate, mozzarella',
        description: 'Poulet tendre avec sauce roquefort crémeuse'
      },
      { 
        id: 14, 
        name: 'Regina', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, jambon, mozzarella, olives',
        description: 'La classique italienne avec jambon et olives'
      },
      { 
        id: 15, 
        name: 'Paysane', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, poulet, champignons, mozzarella',
        description: 'Pizza rustique au poulet et champignons frais'
      },
      { 
        id: 16, 
        name: 'Margherita', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, mozzarella, olives',
        description: 'L\'authentique Margherita italienne'
      },
      { 
        id: 17, 
        name: 'Supreme Mixte', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        base: 'Base tomate',
        ingredients: 'Tomate, jambon, merguez, viande hachée, mozzarella',
        description: 'La plus généreuse avec 3 viandes différentes'
      },
      { 
        id: 18, 
        name: 'Japonese', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, thon, mozzarella, olives',
        description: 'Pizza marine au thon et olives méditerranéennes'
      },
      { 
        id: 19, 
        name: 'Chicken Cheese', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, poulet, mozzarella, cheddar',
        description: 'Double fromage avec poulet grillé'
      },
      { 
        id: 20, 
        name: 'Poulet Chèvre', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, poulet, chèvre, mozzarella',
        description: 'Poulet tendre avec fromage de chèvre crémeux'
      },
      { 
        id: 21, 
        name: 'Pineapple', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, poulet, ananas, mozzarella',
        description: 'Saveurs exotiques avec ananas frais'
      },
      { 
        id: 22, 
        name: 'Catalane', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, chorizo, poivrons, mozzarella',
        description: 'Saveurs espagnoles avec chorizo épicé'
      },
      { 
        id: 23, 
        name: 'Mexicaine', 
        price: '17,90€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        base: 'Base tomate',
        ingredients: 'Tomate, merguez, poivrons, mozzarella',
        description: 'Pizza épicée aux merguez et poivrons'
      }
    ],
    grillades: [
      { 
        id: 24, 
        name: 'La Forestière', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/162763/delicious-grilled-meat-162763.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: 'Escalope tendre avec sauce forestière aux champignons',
        ingredients: 'Escalope + frites + sauce forestière',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 25, 
        name: 'Escalope Fromage', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Escalope gratinée au fromage fondant',
        ingredients: 'Escalope + fromage + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 26, 
        name: 'Escalope Crème', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Escalope nappée de crème fraîche',
        ingredients: 'Escalope + crème + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 27, 
        name: 'Cordon Bleu', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/162763/delicious-grilled-meat-162763.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: 'Le classique cordon bleu croustillant',
        ingredients: 'Cordon bleu + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 28, 
        name: 'Poulet Braisé', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Poulet rôti ou grillé selon votre préférence',
        ingredients: 'Poulet rôti / grillé + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 29, 
        name: 'Brochette de Poulet', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Brochette de poulet marinée et grillée',
        ingredients: 'Brochette + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 30, 
        name: 'Brochette de Viande Hachée', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/162763/delicious-grilled-meat-162763.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Brochette de viande hachée épicée',
        ingredients: 'Brochette + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 31, 
        name: 'Steak Œuf Fromage', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Steak haché avec œuf au plat et fromage',
        ingredients: 'Steak haché + œuf + fromage + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 32, 
        name: 'Steak Haché', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Steak haché grillé à point',
        ingredients: 'Steak haché + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      },
      { 
        id: 33, 
        name: 'Merguez', 
        price: '13,90€', 
        image: 'https://images.pexels.com/photos/162763/delicious-grilled-meat-162763.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Merguez grillées épicées',
        ingredients: 'Merguez + frites',
        note: 'Menu = +4€ (avec frites + boisson)'
      }
    ],
    sandwichs: [
      { 
        id: 34, 
        name: 'Kebab', 
        price: '5,50€', 
        image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: 'Sandwich kebab avec viande marinée et crudités',
        ingredients: 'Viande kebab, salade, tomates, oignons, sauce'
      },
      { 
        id: 35, 
        name: 'Américain', 
        price: '5,50€', 
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Sandwich à l\'américaine généreux',
        ingredients: 'Steak haché, salade, tomates, sauce'
      },
      { 
        id: 36, 
        name: 'Panini Thon', 
        price: '5,50€', 
        image: 'https://images.pexels.com/photos/6086/food-sandwich.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Panini grillé au thon',
        ingredients: 'Thon, fromage, tomates'
      },
      { 
        id: 37, 
        name: 'Tenders', 
        price: '5,50€', 
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Sandwich aux tenders de poulet croustillants',
        ingredients: 'Tenders de poulet, salade, sauce'
      },
      { 
        id: 38, 
        name: 'Panini Poulet', 
        price: '5€', 
        image: 'https://images.pexels.com/photos/6086/food-sandwich.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Panini grillé au poulet',
        ingredients: 'Poulet, fromage, tomates',
        note: 'Menu Panini : 7€ (avec frites + boisson)'
      },
      { 
        id: 39, 
        name: 'Panini Fromage', 
        price: '5€', 
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Panini grillé au fromage fondant',
        ingredients: 'Fromage, tomates',
        note: 'Menu Panini : 7€ (avec frites + boisson)'
      },
      { 
        id: 40, 
        name: 'Panini Viande Hachée', 
        price: '5€', 
        image: 'https://images.pexels.com/photos/6086/food-sandwich.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Panini grillé à la viande hachée',
        ingredients: 'Viande hachée, fromage, tomates',
        note: 'Menu Panini : 7€ (avec frites + boisson)'
      }
    ],
    signatures: [
      { 
        id: 41, 
        name: 'Sandwich Raclette', 
        price: '7,50€', 
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: 'Notre signature à la raclette fondante',
        ingredients: 'Raclette, pommes de terre, charcuterie'
      },
      { 
        id: 42, 
        name: 'Sandwich Savoyard', 
        price: '7,50€', 
        image: 'https://images.pexels.com/photos/6086/food-sandwich.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Saveurs des Alpes dans un sandwich',
        ingredients: 'Reblochon, lardons, pommes de terre'
      },
      { 
        id: 43, 
        name: 'Sandwich Bourguignon', 
        price: '7,50€', 
        image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Sandwich aux saveurs bourguignonnes',
        ingredients: 'Bœuf bourguignon, champignons'
      },
      { 
        id: 44, 
        name: 'Sandwich Chèvre Miel', 
        price: '7,50€', 
        image: 'https://images.pexels.com/photos/6086/food-sandwich.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Mariage sucré-salé signature',
        ingredients: 'Chèvre, miel, noix'
      },
      { 
        id: 45, 
        name: 'Salade Mixte', 
        price: '7,50€', 
        image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Salade fraîche et complète',
        ingredients: 'Salade verte, tomates, concombre, œuf, thon'
      }
    ],
    'tex-mex': [
      { 
        id: 46, 
        name: 'Nuggets (6 pcs)', 
        price: '4,50€', 
        image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: '6 nuggets de poulet croustillants',
        ingredients: 'Nuggets de poulet panés'
      },
      { 
        id: 47, 
        name: 'Onion Rings (8 pcs)', 
        price: '4,50€', 
        image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: '8 anneaux d\'oignons frits croustillants',
        ingredients: 'Anneaux d\'oignons panés'
      },
      { 
        id: 48, 
        name: 'Calzone Chorizo', 
        price: '8,50€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Chausson pizza au chorizo épicé',
        ingredients: 'Chorizo, mozzarella, tomate'
      },
      { 
        id: 49, 
        name: 'Calzone Thon', 
        price: '8,50€', 
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Chausson pizza au thon',
        ingredients: 'Thon, mozzarella, tomate'
      },
      { 
        id: 50, 
        name: 'Calzone 3 Fromages', 
        price: '8,50€', 
        image: 'https://images.pexels.com/photos/6072/pizza-cheese-food.jpg?auto=compress&cs=tinysrgb&w=400',
        description: 'Chausson pizza aux 3 fromages',
        ingredients: 'Mozzarella, emmental, chèvre'
      },
      { 
        id: 51, 
        name: 'Calzone Tenders', 
        price: '8,50€', 
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Chausson pizza aux tenders de poulet',
        ingredients: 'Tenders de poulet, mozzarella'
      }
    ],
    desserts: [
      { 
        id: 52, 
        name: 'Tiramisu', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        description: 'Tiramisu maison aux saveurs italiennes',
        ingredients: 'Mascarpone, café, cacao'
      },
      { 
        id: 53, 
        name: 'Donuts', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Donuts moelleux et sucrés',
        ingredients: 'Pâte briochée, glaçage'
      },
      { 
        id: 54, 
        name: 'Mousse au chocolat', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Mousse au chocolat onctueuse',
        ingredients: 'Chocolat noir, crème'
      },
      { 
        id: 55, 
        name: 'Muffins', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Muffins moelleux aux pépites',
        ingredients: 'Pâte à muffin, pépites de chocolat'
      },
      { 
        id: 56, 
        name: 'Cookies', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Cookies croustillants aux pépites',
        ingredients: 'Pâte sablée, pépites de chocolat'
      },
      { 
        id: 57, 
        name: 'Boissons (33cl)', 
        price: '1,50€', 
        image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Boissons fraîches 33cl',
        ingredients: 'Coca, Fanta, Sprite, Eau'
      },
      { 
        id: 58, 
        name: 'Boissons (1,5L)', 
        price: '3,50€', 
        image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Boissons familiales 1,5L',
        ingredients: 'Coca, Fanta, Sprite, Eau'
      }
    ]
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#114A2F] text-white px-4 py-2 rounded-full font-medium text-sm mb-4">
            <span>🍽️</span>
            <span>Notre carte</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#114A2F] mb-4">
            DÉCOUVREZ
            <span className="block text-[#C4513C]">NOTRE MENU</span>
          </h2>
          <p className="text-lg text-[#1C1C1C]/70 max-w-2xl mx-auto">
            Une sélection gourmande préparée avec amour et des ingrédients de qualité
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 lg:px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : 'bg-[#F5E1D2] text-[#1C1C1C] hover:bg-[#E7A33C] hover:text-white'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm lg:text-base">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group bg-[#F5E1D2] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer transform hover:scale-105 active:scale-95"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-[#E7A33C] text-[#1C1C1C] px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                    <Star className="w-3 h-3 fill-current" />
                    <span>POPULAIRE</span>
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-[#114A2F] text-white px-3 py-1 rounded-full font-bold text-sm">
                  {item.price}
                </div>

                {/* Click Animation Overlay */}
                <div className="absolute inset-0 bg-[#E7A33C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full text-[#114A2F] font-semibold text-sm">
                    Cliquer pour voir les détails
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-[#114A2F] mb-2 group-hover:text-[#C4513C] transition-colors">
                  {item.name}
                </h3>
                
                {/* Base for pizzas */}
                {item.base && (
                  <p className="text-sm text-[#E7A33C] font-semibold mb-2">
                    {item.base}
                  </p>
                )}

                {/* Short description */}
                <p className="text-sm text-[#1C1C1C]/70 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-scale-up">
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="w-6 h-6 text-[#1C1C1C]" />
                </button>
                
                {/* Popular Badge */}
                {selectedItem.popular && (
                  <div className="absolute top-4 left-4 bg-[#E7A33C] text-[#1C1C1C] px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>POPULAIRE</span>
                  </div>
                )}

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-[#114A2F] text-white px-4 py-2 rounded-full font-bold text-xl">
                  {selectedItem.price}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#114A2F] mb-4">
                  {selectedItem.name}
                </h2>

                {/* Base for pizzas */}
                {selectedItem.base && (
                  <div className="bg-[#E7A33C]/10 px-4 py-2 rounded-lg mb-4">
                    <p className="text-[#E7A33C] font-bold text-lg">
                      {selectedItem.base}
                    </p>
                  </div>
                )}

                {/* Description */}
                <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Ingredients */}
                <div className="bg-[#F5E1D2] rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-[#114A2F] mb-3 flex items-center">
                    <span className="mr-2">🥘</span>
                    Ingrédients
                  </h3>
                  <p className="text-[#1C1C1C] font-medium">
                    {selectedItem.ingredients}
                  </p>
                </div>

                {/* Note if exists */}
                {selectedItem.note && (
                  <div className="bg-[#114A2F]/10 rounded-xl p-4 mb-6">
                    <p className="text-[#114A2F] font-semibold flex items-center">
                      <span className="mr-2">ℹ️</span>
                      {selectedItem.note}
                    </p>
                  </div>
                )}

                {/* Action Button */}
                <button
                  onClick={closeModal}
                  className="w-full bg-[#C4513C] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Info */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#114A2F] to-[#C4513C] rounded-2xl p-8 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            📋 Formules & Offres
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm lg:text-base">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-bold">🍕 Pizza - 17,90€</p>
              <p>1 pizza + 1 boisson 1,5L</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-bold">👨‍👩‍👧‍👦 Famille - 29,90€</p>
              <p>2 pizzas méga + 1 boisson 1,5L</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-bold">🎓 Étudiant - 7€</p>
              <p>1 bacon + frites + boisson 33cl</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E7A33C] text-[#1C1C1C] rounded-xl p-4">
            <p className="font-bold text-lg">🎉 Offre spéciale : 2 pizzas achetées = la 3ème OFFERTE !</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scale-up {
          animation: scaleUp 0.3s ease-out;
        }
        
        @keyframes scaleUp {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;