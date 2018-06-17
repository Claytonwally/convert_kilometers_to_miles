const divisor = 1.6094;
const converter = (kms) => {
  miles = kms / divisor;
  miles = (miles.toString());
  console.log('You want to convert ' + kms + ' kms .');
  console.log('If you convert ' + kms + ' kms to miles you will get ' + miles + ' miles.');
};

converter(234);
converter(333);
