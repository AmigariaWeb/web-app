<script setup>
import { storeToRefs } from 'pinia';
import { useActivitiesStore } from '../stores/useActivitiesStore';

const {searchQuery} = storeToRefs(useActivitiesStore());
const {findSearchQuery} = useActivitiesStore();

function er(){
  console.log(searchQuery);
  
}

</script>
<template>
  <div class="searchBarContainer">
      <label for="searchBar">Buscar: </label>
      <input id="searchBar" class="searchBar" type="search" placeholder="Título o tipo..." v-model="searchQuery" @keyup="findSearchQuery">
    </div>
</template>


<style lang="scss" scoped>
.searchBarContainer{
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;

  label{
    font-weight: 700;
    font-size: 1.2rem;
    color: var( --clr-emphasis-light);
  }
  .searchBar {
    font-size: 1rem;
    border: 3px solid var(--clr-dark-blue-shadow);
    border-radius: 15px;
    padding: 0.5rem;
    box-shadow: var(--shadow);
    color: var(--clr-dark-blue);
    transition: border 0.5s ease;
  
    &:hover, &:focus  {
      border: 3px solid var(--clr-yellow-light);
      outline: none;
    }
  }
}
</style>