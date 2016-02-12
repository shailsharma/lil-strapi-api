'use strict';

const model = 'quiz';

/**
 * A set of functions called "actions" for `quiz`
 */

module.exports = {

  /**
   * Get quiz entries.
   *
   * @return {Object|Array}
   */

  find: function * () {
    this.model = model;
    try {
      let entries = yield strapi.hooks.blueprints.find(this);
      this.body = entries;
    } catch (err) {
      this.body = err;
    }
  },
  
  findBySubject: function * (){
    this.model = model;
    
    Quiz.find({
        subject: this.params.param
    })
    .exec(function (err, records) {
        if (err) {
           this.body = err;
        }
        console.log(records);
        this.body = records;
    });
  },

  findOne: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.findOne(this);
      console.log(entry);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  create: function * () {
    this.model = model;
    console.log(this);
    // Quiz.create({
    //     question: 'This is test question for nested doscument?',
    //     subject: 'Maths',
    //     options: [
    //         {"text" : 'Option A',"isCorrect": true},
    //         {"text" : 'Option B',"isCorrect": false}
    //     ]
    // })
    // .exec(function (err, user) {
    //     if (err) {
    //     console.log(err);
    //     }
    //     console.log(user);
    // });
    // try {
    //   let entry = yield strapi.hooks.blueprints.create(this);
    //   this.body = entry;
    // } catch (err) {
    //   this.body = err;
    // }
  },


  update: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.update(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Destroy a quiz entry.
   *
   * @return {Object}
   */

  destroy: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.destroy(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Add an entry to a specific quiz.
   *
   * @return {Object}
   */

  add: function * () {
    console.log('I am in add method');
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.add(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Remove a specific entry from a specific quiz.
   *
   * @return {Object}
   */

  remove: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.remove(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  }
};
