import store from './../store';
import keys from './../../.stripe.json';

const key = keys.pk; //'pk_test_Pz4Ge3sttSjcEXrDL7Sn4EMi';

// v2
const stripeV2 = Stripe;
stripeV2.setPublishableKey(key);

const process = (callback) => {
  const model = store.state.model;

  stripeV2.source.create((() => {
    const data = {
      type: model.type,
      amount: Math.floor(model.amount),
      currency: 'eur',
      owner: {
        name: `${model.firstname} ${model.lastname}`,
        address: {
          line1: model.line1,
          line2: model.line2,
          city: model.city,
          country: model.country,
          postal_code: model.zip,
        },
        email: model.email,
      },
      redirect: {
        return_url: location.href.replace(/#.*$/, '#returned'),
      },
    };

    switch (model.type) {
      default:
        break;

      case 'card':
        data.card = {
          number: model.number,
          cvc: model.cvc,
          exp_month: model.exp_month,
          exp_year: model.exp_year,
        };
        break;
    }

    return data;
  })(), callback);
};

export default {
  process,
}
