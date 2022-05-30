import { defineStore } from 'pinia'
import { getAllWorkshops, getImageWorkshop } from '@/services/firebase/workshop/model';


export const useWorkshopsStore = defineStore({
  id: "Workshops",
  state: () => ({
    workshops: null,
    selectedWorkshop:{},
    queryWorkshops: [],
    searchQuery: "",
    loading: false,
    error: null
  }),
  getters: {
  },
  actions: {
     async fetchWorkshops() {
      this.loading = true
      try {
        await getAllWorkshops().then((value)=>{
            this.workshops = value
        });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async workshopBySlug(slug){
      this.selectedWorkshop = this.workshops
      .find((workshop) => {
        if(workshop.slug === slug ){
          return workshop;
        }
      })
      return  this.selectedWorkshop
    }
  }
});

