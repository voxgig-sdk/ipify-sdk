
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Ipify',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.ipify.org",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_public_ip: {
      },

    }
  }


  entity = {
    "get_public_ip": {
      "fields": [
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "name": "get_public_ip",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "callback",
                    "kind": "query",
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "parts": [],
              "select": {
                "exist": [
                  "callback",
                  "format"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

