import { defineStore } from 'pinia'
import { deleteActivityById } from '@/services/firebase/crud'
import { swal } from '../utils/swal'
import { collection, onSnapshot} from "firebase/firestore";
import { db } from '../services/firebase'

export const useActivitiesStore = defineStore('activitiesStore', {
  state: () => ({
    activities: [],
    queryActivities: [],
    searchQuery: '',
    loading: false,
    error: null,
  }),
  getters: {
    getActivities() {
      return this.activities
    },
    getAreAvailableActivities() {
      let foo = false;
      this.activities.forEach(a => {
        if (!a.isAssigned) {
          foo = true;
          return;
        }
      });
      return foo;
    }
  },
  actions: {
    SET_ACTIVITIES(activities) {
      this.activities = activities
    },
    CLEAR_ACTIVITIES() {
      this.activities = []
    },
    fetchActivities() {
      this.loading = true
      try {
        this.activities = []
        onSnapshot(collection(db, "activities"), snapshot => {
          snapshot.docChanges().forEach(changedDoc => {
            const activityWithId = {
              ...changedDoc.doc.data(),
              id: changedDoc.doc.id
            };
            if (changedDoc.type === "added") {
              this.activities.push(activityWithId)
            }
            if (changedDoc.type === "removed") {
              this.activities = this.activities.filter(
                (currentActivity) => changedDoc.doc.id !== currentActivity.id
              )
            }
            if (changedDoc.type === "modified") {
              this.activities = this.activities.map(currentActivity => {
                if (changedDoc.doc.id === currentActivity.id) {
                  currentActivity = activityWithId
                }
                return currentActivity
              })
            }
          });
        })
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false;
      }
    },

    findSearchQuery() {
      if (this.activities) {
        this.queryActivities = this.activities.filter((activity) => {
          if (
            activity.title
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            activity.type
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            activity.userName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            activity.description
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          ) {
            return true
          }
          return false
        })
      }
      return null
    },
    updateActivities(activity) {
      const updatedActivities = this.activities.map((currentActivity) => {
        if (activity.id === currentActivity.id) {
          currentActivity = activity
        }
        return currentActivity
      })
      this.SET_ACTIVITIES(updatedActivities)
    },

    deleteActivity(activity) {
      swal(
        'success',
        'Actividad eliminada',
        'Se ha eliminado la actividad correctamente.'
      )
      deleteActivityById(activity.id)
      const newActivities = this.activities.filter(
        (currentActivity) => activity.id !== currentActivity.id
      )
      this.SET_ACTIVITIES(newActivities)
    },
  },
})
