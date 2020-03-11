/* eslint-disable no-unused-vars */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Index from './../../src/containers/Index';
import Card from './../../src/components/Card';
import Modal from './../../src/components/Modal/Modal';
import ErrorModal from './../../src/components/Modal/ErrorModal';
import IMAGES from '../../src/static/images';

const localVue = createLocalVue();

let wrapper;

beforeEach(() => {
  const state =
  {
    images: IMAGES,
    showFormModal: false,
    showErrorModal: false,
    addressToBeUpdated: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      notes: "",
      dob: ""
    }
  };
  wrapper = shallowMount(Card, {
    localVue,
    propsData: {
      addressBook: {
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'hp@hogwarts.hw',
        phoneNumber: '9159129125',
        notes: `I'm a wizard`,
        dob: '1990-12-12'
      },
      isNewAddress: true
    },
    parentComponent: Index,
  });
});

describe('Card.vue', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Card must be only rendered from Index', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('Index');
  });

  test('Form modal and Error modal is hidden by default', () => {
    const modals = [Modal, ErrorModal];
    modals.forEach((eachModal) => expect(wrapper.contains(eachModal)).toBe(false));
  });

  test('Display new address card on isNewAddress', async () => {
    expect(wrapper.contains('.icon')).toBeTruthy();
  })

  test('Display Data card if not isNewAddress', async () => {
    wrapper.setProps({ isNewAddress: false });
    await Vue.nextTick();
    expect(wrapper.contains('.icon')).toBeFalsy();
  });

  test('Props data is rendered properly', async () => {
    const classNames = ['.card-name', '.card-number', '.card-email', '.card-notes']
    wrapper.setProps({ isNewAddress: false });
    await Vue.nextTick();
    classNames.forEach((eachClass) => expect(wrapper.get(eachClass).isEmpty()).toBeFalsy());
  });

  test('Edit and delete icon displayed', async () => {
    const classNames = ['.card-email', '.card-notes']
    wrapper.setProps({ isNewAddress: false });
    await Vue.nextTick();
    classNames.forEach((eachClass) => expect(wrapper.contains(eachClass)).toBeTruthy());
  });

  test('Fetch address data on Edit button click', async () => {
    wrapper.setProps({ isNewAddress: false });
    await Vue.nextTick();
    const mockCallBack = jest.fn();
    wrapper.find('.card-edit').trigger('click');
    await wrapper.vm.$nextTick()
    expect(mockCallBack).toHaveBeenCalled;
  });

});

afterEach(() => {
  wrapper.destroy();
});