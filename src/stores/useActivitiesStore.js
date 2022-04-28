import { defineStore } from 'pinia'
import {getAllActivities} from '@/services/firebase/crud';


export const useActivitiesStore = defineStore({
  id: "activities",
  state: () => ({
    activities: [],
    queryActivities: [],
    searchQuery: "",
    loading: false,
    error: null
  }),
  getters: {
    getActivities() {
      return this.activities;
    },
    
  },
  actions: {
    async fetchActivities() {
      this.posts = []
      this.loading = true
      try {
        const activities = [];
        const querySnapshot = await getAllActivities();
        querySnapshot.forEach(doc => {
          activities.push(doc.data());
        })
        this.activities = activities;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    findSearchQuery() {
      this.queryActivities = this.activities.filter(activity => {

        if (activity.title.toLowerCase().includes(this.searchQuery.toLowerCase())){
          return true
        }
        if (activity.type.toLowerCase().includes(this.searchQuery.toLowerCase())){
          return true
        }
        return false
      })
    }
  },
});

