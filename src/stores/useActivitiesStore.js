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
    SET_ACTIVITIES(activities) {
      this.activities = activities;
    },
    CLEAR_ACTIVITIES() {
      this.activities = null;
    },
     fetchActivities() {
      this.loading = true
      try {
        const activities = getAllActivities();
        this.CLEAR_ACTIVITIES()
        this.SET_ACTIVITIES(activities.value)
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
            || activity.type.toLowerCase().includes(this.searchQuery.toLowerCase())
            || activity.userName.toLowerCase().includes(this.searchQuery.toLowerCase())
            || activity.description.toLowerCase().includes(this.searchQuery.toLowerCase())) {
            return true
          }
          return false
        })
      }
      return null
    },
    updateActivities(activity) {
      const updatedActivities = this.activities.map(currentActivity => {
        if (activity.id === currentActivity.id) {
          currentActivity = activity;
       }
       return currentActivity
      })
      this.SET_ACTIVITIES(updatedActivities)
    },

    deleteActivity(activity) {
      swal("success", "Actividad eliminada", "Se ha eliminado la actividad correctamente.");
      deleteActivityById(activity.id);
      const newActivities = this.activities.filter(currentActivity => activity.id !== currentActivity.id);
      this.SET_ACTIVITIES(newActivities)
    }
  },

});

