/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  collection.listRule = null
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  collection.listRule = "@request.auth.verified = true"
  collection.viewRule = null

  return dao.saveCollection(collection)
})
