import { useState } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = ""
	return {
		store: {
			people: [],
			personDetail: {},
			planetDetail: {},
			planet: [],
			favorites: []
		},
		actions: {
			getPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					// console.log(data.results)

					setStore({ people: data.results });
				} catch (error) {
					console.log("Error fetching characters", error);
				}
			},

			getPersonDetail: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					if (!response.ok) {
						throw new Error('Error Occured');
					}
					const data = await response.json();
					console.log(data); // Log the response data to inspect its structure
					setStore({ personDetail: data.result.properties });
				} catch (error) {
					console.error("Error fetching person detail", error);
				}
			}
			,

			getPlanet: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json()
					// console.log(data)
					
					setStore({ planet: data.results })
				} catch (error) {
					console.log("Error fectching contacts", error)
				}
			},
			getPlanetDetail: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					if (!response.ok) {
						throw new Error('Error Occured');
					}
					const data = await response.json();
					console.log(data); 
					setStore({ planetDetail: data.result.properties });
				} catch (error) {
					console.error("Error fetching planet detail", error);
				}
			},
			addFavorites: (name, uid, type) => {
				const store = getStore();
				const newFavorite = { name, uid, type };
				const newFavorites = [...store.favorites, newFavorite];
				setStore({ favorites: newFavorites });
			  },
			  removeFromFavorites: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favorite => favorite.uid !== uid);
                setStore({ favorites: updatedFavorites });
            } 
			}
		}
	};


export default getState;
