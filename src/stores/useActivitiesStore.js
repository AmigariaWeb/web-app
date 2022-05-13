import { defineStore } from 'pinia'
import { getAllActivities, deleteActivityById } from '@/services/firebase/crud';
import { swal } from '../utils/swal';


export const useActivitiesStore = defineStore("activitiesStore", {
  state: () => ({
    activities: null,
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
          const activityWithId = {
            ...doc.data(),
            id: doc.id
          };
          activities.push(activityWithId);
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

    deleteActivity(activity) {
      swal("success", "Actividad eliminada", "Se ha eliminado la actividad correctamente.");
      deleteActivityById(activity.id);
      this.activities = this.activities.filter(currentActivity => activity.id !== currentActivity.id);
    }
  },

});

