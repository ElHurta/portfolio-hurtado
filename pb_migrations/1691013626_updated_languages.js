/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kbjmpw6akoj8op8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glzmhn46",
    "name": "proficency",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A1",
        "A2",
        "B1",
        "B2",
        "C1",
        "Native"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kbjmpw6akoj8op8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glzmhn46",
    "name": "proficency",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A1",
        "A2",
        "B1",
        "B2",
        "C1"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
