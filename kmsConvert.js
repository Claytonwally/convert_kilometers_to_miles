const converter = () => {
  kms = prompt('Enter the number of kilometers you would like to convert to miles');
  const divisor = 1.6094;
  miles = kms / divisor;
  miles = (miles.toString());
  console.log('You want to convert ' + kms + ' kms .');
  console.log('If you convert ' + kms + ' kms to miles you will get ' + miles + ' miles.');
};

converter();
