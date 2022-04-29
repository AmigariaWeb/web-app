import { defineStore } from 'pinia'

export const useWorkshopsStore = defineStore({
  id: 'workshop',
  state: () => ({
        data: [{
            id:1,
            title:"Taller de macramé",
            description:"Pues es un taller de macramé, lo pone en el título, que hay que explicartelo todo tete. Aquí una monitora de macramé te enseña a hacer macramé en el horario del taller de macramé. ¿qué es el macramé? te preguntarás, pues ni idea, algo que hacen las viejas creo, pregúntale a tu abuela o a la vecina del quinto.",
            date:"Lunes y Viernes, de 17:00 a 19:30",
            direction:"Calle de la patata,21",
            img:'https://picsum.photos/601',
            slug:'taller-de-macrame1',
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57663411.80225567!2d27.991940844385134!3d28.100932377705707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1650985946202!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id:2,
            title:"Taller de macramé",
            description:"Pues es un taller de macramé, lo pone en el título, que hay que explicartelo todo tete. Aquí una monitora de macramé te enseña a hacer macramé en el horario del taller de macramé. ¿qué es el macramé? te preguntarás, pues ni idea, algo que hacen las viejas creo, pregúntale a tu abuela o a la vecina del quinto.",
            date:"Lunes y Viernes, de 17:00 a 19:30",
            direction:"Calle de la patata,21",
            img:'https://picsum.photos/599',
            slug:'taller-de-macrame2',
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57663411.80225567!2d27.991940844385134!3d28.100932377705707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1650985946202!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id:3,
            title:"Taller de macramé",
            description:"Pues es un taller de macramé, lo pone en el título, que hay que explicartelo todo tete. Aquí una monitora de macramé te enseña a hacer macramé en el horario del taller de macramé. ¿qué es el macramé? te preguntarás, pues ni idea, algo que hacen las viejas creo, pregúntale a tu abuela o a la vecina del quinto.",
            date:"Lunes y Viernes, de 17:00 a 19:30",
            direction:"Calle de la patata,21",
            img:'https://picsum.photos/598',
            slug:'taller-de-macrame3',
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57663411.80225567!2d27.991940844385134!3d28.100932377705707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1650985946202!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id:4,
            title:"Taller de macramé",
            description:"Pues es un taller de macramé, lo pone en el título, que hay que explicartelo todo tete. Aquí una monitora de macramé te enseña a hacer macramé en el horario del taller de macramé. ¿qué es el macramé? te preguntarás, pues ni idea, algo que hacen las viejas creo, pregúntale a tu abuela o a la vecina del quinto.",
            date:"Lunes y Viernes, de 17:00 a 19:30",
            direction:"Calle de la patata,21",
            img:'https://picsum.photos/602',
            slug:'taller-de-macrame4',
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57663411.80225567!2d27.991940844385134!3d28.100932377705707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1650985946202!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id:5,
            title:"Taller de macramé",
            description:"Pues es un taller de macramé, lo pone en el título, que hay que explicartelo todo tete. Aquí una monitora de macramé te enseña a hacer macramé en el horario del taller de macramé. ¿qué es el macramé? te preguntarás, pues ni idea, algo que hacen las viejas creo, pregúntale a tu abuela o a la vecina del quinto.",
            date:"Lunes y Viernes, de 17:00 a 19:30",
            direction:"Calle de la patata,21",
            img:'https://picsum.photos/603',
            slug:'taller-de-macrame5',
            map:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57663411.80225567!2d27.991940844385134!3d28.100932377705707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1650985946202!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        }],
        selectedWorkshop:''
    }),
    actions: {
        workshopBySlug(slug){  
            return this.data.filter( item => item.slug === slug );
        }
    },

})
