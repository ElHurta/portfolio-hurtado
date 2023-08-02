/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kbjmpw6akoj8op8",
    "created": "2023-08-02 21:58:35.576Z",
    "updated": "2023-08-02 21:58:35.576Z",
    "name": "languages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ef3wofei",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ruudkyqy",
        "name": "proficency",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1zwxxhw5",
        "name": "icon",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kbjmpw6akoj8op8");

  return dao.deleteCollection(collection);
})
