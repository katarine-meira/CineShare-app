<template>
    <div class="estiloCard movie-list row q-col-gutter-md q-pa-xl">
        <div v-for="movie in movies" :key="movie.id" class="col-6 col-sm-3 col-md-2 col-lg-2">
           <q-card class="my-card" flat bordered>
                <img :src="`https://image.tmdb.org/t/p/w500/`+ movie.poster_path">

                <q-card-actions class="text-left">
                    <div class="titulo">{{ movie.title }}</div>
                    
                </q-card-actions>
                <q-card-actions class=" justify-end q-pt-none">
                    <q-btn flat round color="primary" size="sm" icon="favorite" />
                    <q-btn flat round color="primary" size="sm" icon="bookmark" />
                    <q-btn flat round color="primary" size="sm" icon="share" />
                </q-card-actions>
            </q-card>
        </div>
        <q-pagination
            class="col-12 justify-center"
            v-model="page"
            :max="totalPages"
            input
        />
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, watch} from "vue";
    const movies = ref([]);
    const totalPages = ref(1);
    const  page = ref(1);
    const bannedLanguages = ["ja", "ko", "zh", "th", "hi"];

    const props = defineProps({
        filtro: String
    })

    function getMovies(pageNumber = 1) {
        // e atualiza a página atual que está sendo carregada
        page.value = pageNumber;
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'd9dea8a752f1adc085c7fc18b974f061',
                language: 'pt-BR',
                page: pageNumber,
                include_adult: false,
                certification_country: 'BR',   // país Brasil
                'certification.lte': '25'
            }

        }).then(response =>{
            movies.value = response.data.results.filter(movie => {
                return !bannedLanguages.includes(movie.original_language);
            });
            totalPages.value = response.data.total_pages;
            // console.log("Pagina: ", response.data.page, "Filmes:", response.data.results);
        })
    }

    function searchMovies(query, pageNumber = 1) {
        page.value = pageNumber;
        
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: 'd9dea8a752f1adc085c7fc18b974f061',
                language: 'pt-BR',
                query: query, // A API de busca usa 'query'
                page: pageNumber,
                include_adult: false,
            }
        }).then(response => {
            movies.value = response.data.results.filter(movie => {
                return !bannedLanguages.includes(movie.original_language);
            });
            totalPages.value = response.data.total_pages;
        }).catch(error => {
             console.error("Erro na busca de filmes:", error);
             movies.value = []; // Limpa a lista em caso de erro
        });
    }

    onMounted(() => {
        getMovies(page.value);
    });
    //observa a variavel "page" que é reativa(ref) sempre que mudar a função é chamada
    //o newPage recebe o novo valor e atualiza a função getMovies
    watch(page, (newPage) => {
        // Decide se deve buscar ou usar o discover
        if (props.filtro) {
            searchMovies(props.filtro, newPage);
        } else {
            getMovies(newPage);
        }
    });
    
    // Observa o 'filtro' (termo de busca) para disparar a busca na API
    watch(() => props.filtro, (newFiltro) => {
        if (newFiltro) {
            // Se houver um termo, busca na API e volta para a página 1
            searchMovies(newFiltro, 1);
        } else {
            // Se o termo for apagado, volta para a lista de discover inicial, na página 1
            getMovies(1);
        }
    });

</script>
    
<style scoped>
    .titulo{
        font-size: 14px;
        white-space: nowrap;      /* impede quebra de linha */
        overflow: hidden;         /* esconde oq passar */
        text-overflow: ellipsis;  /* coloca "..." no final */
    }

    @media (min-width: 1440px) {
        .estiloCard{
        margin: 20px 180px;
        }
    }

    
</style>