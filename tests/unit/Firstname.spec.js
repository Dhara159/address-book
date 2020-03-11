import { shallowMount, createLocalVue } from '@vue/test-utils';
import Firstname from './../../src/components/Firstname';

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Firstname, {
    localVue,
    propsData: {
      value: '',
      v: {
        $modal: 'Dhara'
      }
    },
  });
});

describe('Firstname.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

});

afterEach(() => {
  wrapper.destroy();
});