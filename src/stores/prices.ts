import { ref } from 'vue'
import { defineStore } from 'pinia'

export const priceListStore = defineStore( 'prices', () => {
  const prices = ref<priceList>( [
    {
      id: 1,
      type: 'Взрослый билет',
      price: 800
    },
    {
      id: 2,
      type: 'Взрослый билет',
      price: 800
    },
    {
      id: 3,
      type: 'Взрослый билет',
      price: 800
    },
    {
      id: 4,
      type: 'Взрослый билет',
      price: 800
    },
    {
      id: 5,
      type: 'Взрослый билет',
      price: 800
    },
  ] )

  const changeCountOfTickets = ( countOfTickets ) => {
    console.log( 'info for Sasha', countOfTickets.value )
  }

  return {
    prices, changeCountOfTickets
   }
} )