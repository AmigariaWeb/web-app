import { defineStore } from 'pinia'
import { getAllActivities } from '@/services/firebase/crud';


export const useActivitiesStore = defineStore({
  id: "activities",
  state: () => ({
    activities: null,
    selectedActivity:{},
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
      if (this.activities) {
        this.queryActivities = this.activities.filter(activity => {
          if (activity.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          || activity.type.toLowerCase().includes(this.searchQuery.toLowerCase())){
            return true
          }
          return false
        })
      }
      return null
    },
    addLastActivityDetail(lastActivity) {
      this.selectedActivity = lastActivity;
    }
  },
});

