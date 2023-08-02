/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slbn6ztz",
    "name": "languages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kbjmpw6akoj8op8",
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
  collection.schema.removeField("slbn6ztz")

  return dao.saveCollection(collection)
})
