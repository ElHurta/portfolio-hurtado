/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  // remove
  collection.schema.removeField("1xlnx8sd")

  // remove
  collection.schema.removeField("nl8rslwn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2lxkm2mrzkskl3x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xlnx8sd",
    "name": "first_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nl8rslwn",
    "name": "second_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
