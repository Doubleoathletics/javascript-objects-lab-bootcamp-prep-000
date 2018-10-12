var recipes = {typeof: 'object'}

function updateObjectWithKeyAndValue(object, key, value) {
      var obj = { prop: 1 }
}

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
    })

    it('it does not modify the original object, but rather returns a clone with the new data', function() {
      var obj = { prop: 1 }

      updateObjectWithKeyAndValue(obj, 'prop2', 2)

      expect(obj['prop2']).toBe(undefined)
    })

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      }
function deleteFromObjectByKey(object, key) {
      var obj = { prop: 1 }
      var newObj = deleteFromObjectByKey(obj, 'prop')
     return
    }

    function deleteFromObjectByKey(obj, 'prop') {
      var obj = { prop: 1 }
      deleteFromObjectByKey(obj, 'prop')
      return(obj['prop']).toBe(1)
    }