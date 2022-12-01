const expect = require('chai').expect;
const queueControlAccess = require('../Ejercicios/05 - Queues/01 - queueControlAccess');
const { Queue } = require('../auxiliar');

describe('QUEUE CONTROL ACCESS', function () {
   var queue = new Queue();
   queue.enqueue({
      fullname: 'Franco Etcheverri',
      age: 26,
      ticket: { number: 1, event: 'Tomorrowland' },
   });
   queue.enqueue({
      fullname: 'Toni Tralice',
      age: 30,
      ticket: { number: 2, event: 'Tomorrowland' },
   });
   queue.enqueue({
      fullname: 'Agus Amani',
      age: 26,
      ticket: { number: 1, event: 'Tomorrowland' },
   });
   queue.enqueue({
      fullname: 'Leo Maglia',
      age: 40,
      ticket: { number: 3, event: 'Recital Queen' },
   });
   queue.enqueue({
      fullname: 'Bart Simpson',
      age: 10,
      ticket: { number: 3, event: 'Tomorrowland' },
   });
   queue.enqueue({
      fullname: 'Cosme Fulanito',
      age: 10,
      ticket: { event: 'Tomorrowland' },
   });

   it('Debe devolver las personas que cumplen los requisitos para ingresar al evento', function () {
      expect(queueControlAccess(queue, 'Tomorrowland')).to.deep.equal([
         'Franco Etcheverri',
         'Toni Tralice',
      ]);

      queue.enqueue({
         fullname: 'Franco Etcheverri',
         age: 26,
         ticket: { number: 1, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Toni Tralice',
         age: 30,
         ticket: { number: 2, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Agus Amani',
         age: 26,
         ticket: { number: 1, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Leo Maglia',
         age: 40,
         ticket: { number: 3, event: 'Recital Queen' },
      });
      queue.enqueue({
         fullname: 'Bart Simpson',
         age: 10,
         ticket: { number: 3, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Cosme Fulanito',
         age: 10,
         ticket: { event: 'Tomorrowland' },
      });

      expect(queueControlAccess(queue, 'Recital Queen')).to.deep.equal([
         'Leo Maglia',
      ]);

      queue.enqueue({
         fullname: 'Franco Etcheverri',
         age: 26,
         ticket: { number: 1, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Toni Tralice',
         age: 30,
         ticket: { number: 2, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Agus Amani',
         age: 26,
         ticket: { number: 1, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Leo Maglia',
         age: 40,
         ticket: { number: 3, event: 'Recital Queen' },
      });
      queue.enqueue({
         fullname: 'Bart Simpson',
         age: 10,
         ticket: { number: 3, event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Cosme Fulanito',
         age: 10,
         ticket: { event: 'Tomorrowland' },
      });
      queue.enqueue({
         fullname: 'Leo Messi',
         age: 33,
         ticket: { number: 10, event: 'Tomorrowland' },
      });
      expect(queueControlAccess(queue, 'Tomorrowland')).to.deep.equal([
         'Franco Etcheverri',
         'Toni Tralice',
         'Leo Messi',
      ]);
   });
});
