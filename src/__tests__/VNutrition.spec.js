import { mount } from '@vue/test-utils'
import VNutrition from '../components/VNutrition.vue'
describe('VNutrition', () => {
it('has data', () => {
expect(typeof VNutrition.data).toBe('function')
})
})