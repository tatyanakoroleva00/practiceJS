document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Мечта",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]');
    


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

        
        createMovieList(movieDB.movies, movieList);
        }
    
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(i => {
            i.remove();
        });
    };
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArray = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = '';

        sortArray(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div></li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});









