import axios from "axios";

const validateToken = (URL_BACK, setUser) => {
    const token = localStorage.getItem("token");

    const promisse = axios.get(`${URL_BACK}/validate-token`, {
        headers: { Authorization: `Bearer ${token}` }
    })

    promisse.then(res => {
        setUser(res.data);
    });

    promisse.catch(error => {
        console.log(error);
    });
}

const observer = (setCurrentPage) => {
    const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
            setCurrentPage((currentValue) => currentValue + 1);
        }
    })
    intersectionObserver.observe(document.querySelector('#loading-more'));
    return () => intersectionObserver.disconnect();
}

const listPokemons = (currentPage, URL_BACK, setPokemons) => {
    if(currentPage !== 0) {
        const promisse = axios.get(`${URL_BACK}/all-pokemons?page=${currentPage}`)

        promisse.then(res => {
            setPokemons((prevPokemons) => [...prevPokemons, ...res.data]);
        });

        promisse.catch(error => {
            console.log(error);
        });
    }
}

const login = (navigate) => {
    localStorage.removeItem('token');
    navigate("/login")
}



const functionsHome = {
    validateToken,
    observer,
    listPokemons,
    login
}

export default functionsHome;