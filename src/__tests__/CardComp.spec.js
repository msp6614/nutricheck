import { mount } from '@vue/test-utils'
import CardComp from '../components/CardComp.vue'
describe('CardComp', () => {
it('has data', () => {
expect(typeof CardComp.data).toBe('function')
})
})