// const phoneInputs = document.querySelectorAll('input[type=tel].tel-with-mask');

// if (phoneInputs) {
//      phoneInputs.forEach((input) => {
//           let mask;
//           input.addEventListener('focus', function () {
//                if (!mask) {
//                     mask = IMask(input, {
//                          mask: '+{375}(00)000-00-00',
//                          lazy: false,
//                          blocks: {
//                               375: {
//                                    mask: '375',
//                                    immutable: true,
//                               },

//                               '00': {
//                                    mask: '00',
//                               },
//                               '000': {
//                                    mask: '000',
//                               },
//                               '00': {
//                                    mask: '00',
//                               },
//                          },
//                     });
//                }
//           });
//      });
// }
document.addEventListener('DOMContentLoaded', () => {
     const phoneInputs = document.querySelectorAll('input[type=tel].tel-with-mask');

     if (phoneInputs.length) {
          phoneInputs.forEach((input) => {
               let mask;

               input.addEventListener('focus', function () {
                    if (!mask) {
                         mask = IMask(input, {
                              mask: '+{375}(00)000-00-00',
                              lazy: false,
                              blocks: {
                                   '00': {
                                        mask: '00',
                                   },
                                   '000': {
                                        mask: '000',
                                   },
                              },
                         });
                    }
               });

               input.addEventListener('blur', function () {
                    validatePhoneInput(input, mask);
               });
          });
     }

     function validatePhoneInput(input, mask) {
          if (mask && mask.value) {
               const unmaskedValue = mask.unmaskedValue;
               const isComplete = unmaskedValue.length === 12;

               if (isComplete) {
                    input.setCustomValidity('');
               } else {
                    input.setCustomValidity('Введите полный номер телефона');
               }
          } else {
               input.setCustomValidity('Введите номер телефона');
          }

          input.reportValidity();
     }
});
