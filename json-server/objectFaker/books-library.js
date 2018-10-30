  module.exports = function() {
    const _ = require('lodash')
    const faker = require('faker')
    const moment = require('moment');
    faker.seed(123)
      const genres = ['Science fiction',
    'Fictions',
    'None Fiction',
    'Children',
    'Youth']

    return {
      users:
        [
          {id: 1,
           email: 'ranz@gmail.com',
           firstName: 'Ran',
           lastName: 'Ziv',
           type: 'reader',
           phone: '0528402452',
           books: [5,8]
         },
         {id:1,
          email: 'avi@gmail.com',
          firstName: 'Avi',
          lastName: 'Cohen',
          type: 'admin',
          phone: '0528402452',
          books: [
          ]
         }
        ],
      deliveries: [
        {id: 1, book: 9, user:1, requestedDeliveryDate:'', requestedDeliveryTime: '', status: 'new', deliveredAt:'', orderDate:'', returnDate:''},
        {id: 2, book: 32, user:1, requestedDeliveryDate:'', requestedDeliveryTime: '', status: 'delivered', deliveredAt:'', orderDate:'', returnDate:''}
        {id: 3, book: 64, user:1, requestedDeliveryDate:'', requestedDeliveryTime: '', status: 'returned', deliveredAt:'', orderDate:'', returnDate:''}
      ],
      books: _.times(100, function(n){
        return {
          id: n,
          catalogNumber : faker.random.uuid(),
          copy: 1,
          author: faker.name.findName(),
          title: faker.random.words(3),
          category: genres[n%9],
          maxLoanDuration: [28,14,7,0][n%4],
          loanedAt: [faker.date.between(moment().subtract(n%100, 'd').format(), moment().format()),
                     null,faker.date.between(moment().subtract(n%7, 'd').format(), moment().format()),null][n%4]
        }
      })
      }
  }
