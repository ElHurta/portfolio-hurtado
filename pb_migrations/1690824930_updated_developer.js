/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukpc3apk",
    "name": "skills",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kl25xmu6ahog048",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  // remove
  collection.schema.removeField("ukpc3apk")

  return dao.saveCollection(collection)
})
