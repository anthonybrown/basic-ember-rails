import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // we can return an array of objects
    return [
      { name: 'Sparkachu', level: 3 },
      { name: 'Charember', level: 29},
      { name: 'Rhauk'    , level: 5 },
      { name: 'Poddle'   , level: 9 }
    ]

    // you can return arrays
    //return [
      //2,3,5,'item 6', 7
    //]
    // you can return objects or just plain sentences (unlikely)
    //return {
      //sentence: 'This is our Model',
      //sentence2: 'This is our second sentence.'
    //}
  }
});
