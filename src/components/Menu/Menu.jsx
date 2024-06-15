import { useState } from 'react';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import { FiHeart, FiStar, FiPlus, FiMinus } from 'react-icons/fi';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Grilled Salmon', category: 'lobster', price: 20, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Shrimp Cocktail', category: 'lobster', price: 15, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1632778129004-f142ce499b3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Beef Steak', category: 'lobster', price: 25, rating: 4.7, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Chicken Salad', category: 'lobster', price: 12, rating: 4.3, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Vegan Burger', category: 'lobster', price: 14, rating: 4.6, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Pasta Carbonara', category: 'lobster', price: 18, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, name: 'Caesar Salad', category: 'lobster', price: 10, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Margarita Pizza', category: 'lobster', price: 16, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, name: 'Fried Calamari', category: 'lobster', price: 14, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 10, name: 'Lobster Bisque', category: 'lobster', price: 22, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 11, name: 'Spaghetti Bolognese', category: 'lobster', price: 18, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 12, name: 'Chicken Wings', category: 'redsnapper', price: 12, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 13, name: 'BBQ Ribs', category: 'redsnapper', price: 24, rating: 4.6, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 14, name: 'Beef Tacos', category: 'redsnapper', price: 10, rating: 4.0, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 15, name: 'Clam Chowder', category: 'redsnapper', price: 15, rating: 4.3, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 16, name: 'Greek Salad', category: 'redsnapper', price: 11, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 17, name: 'Cheeseburger', category: 'redsnapper', price: 13, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 18, name: 'Vegetable Stir Fry', category: 'redsnapper', price: 12, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 19, name: 'Pepperoni Pizza', category: 'whitesnapper', price: 15, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 20, name: 'Minestrone Soup', category: 'whitesnapper', price: 10, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 21, name: 'Chicken Alfredo', category: 'whitesnapper', price: 18, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 22, name: 'Buffalo Wings', category: 'whitesnapper', price: 12, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 23, name: 'BBQ Chicken', category: 'whitesnapper', price: 20, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 24, name: 'Fish Tacos', category: 'whitesnapper', price: 11, rating: 4.0, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 25, name: 'Tomato Soup', category: 'whitesnapper', price: 9, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 26, name: 'Caprese Salad', category: 'crab', price: 10, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 27, name: 'Bacon Cheeseburger', category: 'crab', price: 14, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 28, name: 'Tofu Stir Fry', category: 'crab', price: 11, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 29, name: 'Hawaiian Pizza', category: 'crab', price: 16, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 30, name: 'French Onion Soup', category: 'crab', price: 9, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 31, name: 'Lasagna', category: 'crab', price: 17, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 32, name: 'Mozzarella Sticks', category: 'crab', price: 8, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 33, name: 'Pulled Pork Sandwich', category: 'crab', price: 15, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 34, name: 'Fish and Chips', category: 'octopus', price: 12, rating: 4.1, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 35, name: 'Butternut Squash Soup', category: 'octopus', price: 10, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 36, name: 'Greek Salad', category: 'saoctopuslad', price: 9, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 37, name: 'Blue Cheese Burger', category: 'octopus', price: 14, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 38, name: 'Lentil Soup', category: 'octopus', price: 10, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 39, name: 'Margherita Pizza', category: 'octopus', price: 15, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 40, name: 'Beef Stroganoff', category: 'octopus', price: 18, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 41, name: 'Spaghetti Carbonara', category: 'octopus', price: 17, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 42, name: 'Onion Rings', category: 'octopus', price: 8, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 43, name: 'BBQ Ribs', category: 'octopus', price: 20, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 44, name: 'Tuna Tartare', category: 'octopus', price: 14, rating: 4.1, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 45, name: 'Chicken Noodle Soup', category: 'crab', price: 9, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 46, name: 'Caesar Salad', category: 'octopus', price: 10, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 47, name: 'BBQ Burger', category: 'prawns', price: 14, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 48, name: 'Quinoa Salad', category: 'prawns', price: 11, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 49, name: 'Sausage Pizza', category: 'prawns', price: 15, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 50, name: 'Chicken Alfredo', category: 'octopus', price: 18, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 51, name: 'Pesto Pasta', category: 'octopus', price: 17, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 52, name: 'Mozzarella Sticks', category: 'platter', price: 8, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 53, name: 'Grilled Salmon', category: 'platter', price: 20, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 54, name: 'Shrimp Cocktail', category: 'platter', price: 14, rating: 4.1, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 55, name: 'Tomato Basil Soup', category: 'platter', price: 9, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 56, name: 'Caprese Salad', category: 'platter', price: 10, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1609149401081-fb5b04b8d451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 57, name: 'Mushroom Risotto', category: 'platter', price: 14, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1636797600090-146b191714cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 58, name: 'Vegan Chili', category: 'platter', price: 11, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 59, name: 'Pepperoni Pizza', category: 'platter', price: 15, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1630175860333-5131bda75071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 60, name: 'Eggplant Parmesan', category: 'platter', price: 18, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 61, name: 'Fettuccine Alfredo', category: 'platter', price: 17, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 62, name: 'French Fries', category: 'platter', price: 8, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1535424921017-85119f91e5a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 63, name: 'Chicken Parmigiana', category: 'crab', price: 20, rating: 4.5, imageUrl: 'https://plus.unsplash.com/premium_photo-1668143365324-37cae1de4e56?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 64, name: 'Beef Tartare', category: 'platter', price: 14, rating: 4.1, imageUrl: 'https://plus.unsplash.com/premium_photo-1661609628958-e1fda53a87eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 65, name: 'Lobster Bisque', category: 'crab', price: 9, rating: 4.2, imageUrl: 'https://plus.unsplash.com/premium_photo-1708077043771-9427ed1efb1e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },  
  ];

  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [sortOption, setSortOption] = useState('');
  const [cartQuantities, setCartQuantities] = useState({});

  const handleFilter = (category) => {
    let filtered = menuItems;
    if (category) {
      filtered = menuItems.filter(item => item.category === category);
    }
    setFilteredItems(filtered);
  };

  const handleSort = (option) => {
    let sorted = [...filteredItems];
    if (option === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setFilteredItems(sorted);
    setSortOption(option);
  };

  const handleIncrement = (id) => {
    setCartQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1
    }));
  };

  const handleDecrement = (id) => {
    setCartQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0)
    }));
  };

  return (
    <div className="flex p-8">
      {/* Sidebar for Filter and Sort */}
      <div className="w-1/5 p-4">
        <h2 className="text-xl font-bold text-orange-500 mb-4">Filter & Sort</h2>
        <Filter onFilter={handleFilter} />
        <Sort onSort={handleSort} />
      </div>

      {/* Menu Items */}
      <div className="w-4/5 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="overflow-hidden rounded-lg border border-default-200 p-12 transition-all duration-300 hover:border-primary hover:shadow-xl">
            <div className="group relative divide-y divide-default-200 overflow-hidden rounded-lg">
              <div className="mx-auto mb-4 h-48">
                <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover transition-all group-hover:scale-105" />
              </div>
              <div className="pt-2">
                <div className="mb-4 flex items-center justify-between">
                  <a className="line-clamp-1 text-xl font-semibold text-default-800 after:absolute after:inset-0" href={`/yum_r/dishes/${item.id}`}>{item.name}</a>
                  <button><FiHeart className="relative z-10 cursor-pointer transition-all hover:fill-red-500 hover:text-red-500" /></button>
                </div>
                <span className="mb-4 inline-flex items-center gap-2">
                  <span className="rounded-full bg-orange-500 p-1">
                    <FiStar className="fill-white text-white" />
                  </span>
                  <span className="text-sm text-default-950">{item.rating}</span>
                </span>
                <div className="mb-4 flex items-end justify-between">
                  <h4 className="text-2xl font-semibold leading-9 text-default-900">${item.price.toFixed(2)}</h4>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleDecrement(item.id)}><FiMinus className="text-orange-500 cursor-pointer" /></button>
                    <span>{cartQuantities[item.id] || 1}</span>
                    <button onClick={() => handleIncrement(item.id)}><FiPlus className="text-orange-500 cursor-pointer" /></button>
                  </div>
                </div>
                <button className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
