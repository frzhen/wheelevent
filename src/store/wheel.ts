/**
 * @Author: Fred R. Zhen
 * @Date: 2023/4/19 09:00
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from "pinia";

export const useWheel = defineStore("wheel", {
  state: () => ({

  }),
  actions: {
    wheelActions() {
      console.log("wheel event invoked!");
    }
  }
})
