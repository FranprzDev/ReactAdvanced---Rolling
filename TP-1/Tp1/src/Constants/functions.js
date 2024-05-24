import heroes from './constants';

export const filterNameHero = (searchHero) => {
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(searchHero.toLowerCase()));
}