/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	number:{
  		type:'string',
  		required:true
  	},
  	fileexe:{
  		type:'string',
  	},
    filejar:{
      type:'string',
    },
    round:{
      type:'string',
    },
  	uploads:{
  		type:'object',
  		defaultsTo:{}
  	}
  }
};

