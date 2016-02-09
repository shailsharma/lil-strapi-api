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
      yield this.render('quiz', {
        quiz: entries
      });
    } catch (err) {
      this.body = err;
    }
  },
  
  findBySubject: function * (){
      this.model = model;
      console.log(this.params.param);
      try{
          let entry = this.model.find({
            subject: {
                'like': this.params.param
            }
          });
          console.log(entry);
      }
      catch(err){
          this.render = err;
      }
  },

  /**
   * Get a specific quiz.
   *
   * @return {Object|Array}
   */

  findOne: function * () {
    this.model = model;
    console.log(this.model);
    try {
      let entry = yield strapi.hooks.blueprints.findOne(this);
      yield this.render('quiz', {
        quiz: entry
      });
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Create a quiz entry.
   *
   * @return {Object}
   */

  create: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.create(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Update a quiz entry.
   *
   * @return {Object}
   */

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
