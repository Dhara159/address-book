/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Modal from './../../src/components/Modal/Modal';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
const localVue = createLocalVue();

let wrapper;


beforeEach(() => {
  const state = {
    showErrorText: false,
    errorMessage: "Oops! Something went wrong! Please try again!",
    isUpdateState: true,
    firstName: 'Dhara',
    lastName: 'Vihol',
    email: 'viholdhara@gmail.com',
    phoneNumber: '7069333057',
    notes: 'Hello world',
    dob: '1990-12-12',
  };
  wrapper = shallowMount(Modal, {
    localVue,
    propsData: {
      addressBook: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        dob: '',
      },
      isUpdate: true,
    }
  });
});

describe('Modal.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('display create or update button on state change', async () => {
    wrapper.setData({ isUpdateState: false });
    await Vue.nextTick();
    expect(wrapper.contains('#create-button')).toBe(true);
    expect(wrapper.contains('#update-button')).toBe(false);

    wrapper.setData({ isUpdateState: true });
    await Vue.nextTick();
    expect(wrapper.contains('#create-button')).toBe(false);
    expect(wrapper.contains('#update-button')).toBe(true);

  });

  test('are all input fields rendered', () => {
    const modals = ['Firstname', 'Lastname', 'Email', 'Notes', 'Phonenumber', 'Date'];
    modals.forEach(eachModal => {
      expect(wrapper.name(eachModal)).toBeTruthy();
    });
  });
});

afterEach(() => {
  wrapper.destroy();
});