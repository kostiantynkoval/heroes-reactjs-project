export const selected = (hero) => {
    console.log('selected Hero:', hero);
    return {
        type: 'HERO_SELECTED',
        payload: hero
    }
}