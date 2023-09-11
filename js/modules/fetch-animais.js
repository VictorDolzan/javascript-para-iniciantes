import initAnimaNumeros from "./anima-numeros.js";

export default async function initFetchAnimais() {
    async function fetchAnimais(caminhoJson) {
        try{
            const animaisResponse = await fetch(caminhoJson);
            const animaisJson = await animaisResponse.json();
            const numerosGrid = document.querySelector('.numeros-grid');

            animaisJson.forEach(animal => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });
            initAnimaNumeros();
        }
        catch (error){
            console.log(error);
        }
    }

    function createAnimal(animal) {
        const div = document.createElement('div');

        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`

        return div;
    }

    await fetchAnimais('./animaisapi.json');
}
