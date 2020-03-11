import { shallowMount, createLocalVue } from '@vue/test-utils';
import Lastname from './../../src/components/Lastname';

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Lastname, {
    localVue,
    propsData: {
      value: '',
      v: {
        $modal: 'Vihol'
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

// Todo
// Write validation test cases for all UI components