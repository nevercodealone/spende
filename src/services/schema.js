import store from './../store';

const map = (field) => {
  return Object.assign({
    type: 'input',
    inputName: field.model,
    placeholder: field.placeholder || field.label,
    styleClasses: 'input-' + field.model,
    onChanged: (model, newVal, oldVal, field) => {
      store.commit('updateModel', {
        [field.model]: newVal
      });
    },
  }, field);
};

const paymentSelect = () => {
  return {
    fields: [{
      type: 'radios',
      model: 'type',
      values: [
        {
          name: 'Paypal',
          value: 'paypal',
        }, {
          name: 'Kreditkarte',
          value: 'card',
        }
      ]
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
      required: true,
    }, {
      type: 'select',
      label: 'Monat',
      model: 'exp_month',
      values: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      required: true,
    }, {
      type: 'select',
      label: 'Jahr',
      model: 'exp_year',
      values: (() => {
        let year = (new Date).getFullYear();
        let endyear = year + 10;
        let years = [];

        while(year < endyear) {
          years.push(year);
          year++;
        }

        return years;
      })(),
      required: true,
    }, {
      inputType: 'number',
      label: 'CVC Code',
      placeholder: '123',
      model: 'cvc',
      required: true,
    }].map(map)
  }
};

const owner = () => {
  return {
    fields: [{
      inputType: 'text',
      label: 'Firma',
      model: 'company',
    }, {
      inputType: 'text',
      label: 'Vorname',
      model: 'firstname',
      required: true,
    }, {
      inputType: 'text',
      label: 'Nachname',
      model: 'lastname',
      required: true,
    }, {
      inputType: 'text',
      label: 'Straße',
      model: 'line1',
      required: true,
    }, {
      inputType: 'text',
      label: 'Straße (Fortsetzung)',
      model: 'line2',
    }, {
      inputType: 'text',
      label: 'PLZ',
      model: 'zip',
      required: true,
    }, {
      inputType: 'text',
      label: 'Stadt',
      model: 'city',
      required: true,
    }, {
      inputType: 'text',
      label: 'Land',
      model: 'country',
      required: true,
    }, {
      inputType: 'email',
      label: 'E-Mail',
      model: 'email',
      required: true,
    }].map(map)
  }
};

export default {
  paymentSelect,
  card,
  owner,
}
