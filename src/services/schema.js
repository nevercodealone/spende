import store from './../store';

const map = (field) => {
  return Object.assign({
    type: 'input',
    inputName: field.model,
    placeholder: field.placeholder || field.label,
    required: true,
    onChanged: (model, newVal, oldVal, field) => {
      store.commit('updateModel', {
        [field.model]: newVal
      });
    },
  }, field);
};

const owner = () => {
  return {
    fields: [{
      inputType: 'text',
      label: 'Vorname',
      model: 'firstname',
    }, {
      inputType: 'text',
      label: 'Nachname',
      model: 'lastname',
    }, {
      inputType: 'text',
      label: 'Straße',
      model: 'street',
    }, {
      inputType: 'text',
      label: 'PLZ',
      model: 'zip',
    }, {
      inputType: 'text',
      label: 'Stadt',
      model: 'city',
    }, {
      inputType: 'text',
      label: 'Land',
      model: 'country',
    }, {
      inputType: 'email',
      label: 'E-Mail',
      model: 'email',
    }].map(map)
  }
};

const card = () => {
  return {
    fields: [{
      inputType: 'number',
      label: 'Nummer',
      placeholder: 'XXXX XXXX XXXX XXXX',
      model: 'number',
    }, {
      inputType: 'number',
      label: 'Monat',
      placeholder: '05',
      model: 'exp_month',
    }, {
      inputType: 'number',
      label: 'Jahr',
      placeholder: '2017',
      model: 'exp_year',
    }, {
      inputType: 'number',
      label: 'CVC Code',
      placeholder: '123',
      model: 'cvc',
    }].map(map)
  }
};

export default {
  owner,
  card,
}
