
gdjs.evtsExt__Collectible__Collectible = gdjs.evtsExt__Collectible__Collectible || {};

/**
 * Behavior generated from Collectible
 */
gdjs.evtsExt__Collectible__Collectible.Collectible = class Collectible extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Collectible__Collectible.Collectible.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.RotationSpeed = behaviorData.RotationSpeed !== undefined ? behaviorData.RotationSpeed : Number("60") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.RotationSpeed !== undefined)
      this._behaviorData.RotationSpeed = behaviorOverriding.RotationSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    RotationSpeed: this._behaviorData.RotationSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.RotationSpeed !== undefined)
      this._behaviorData.RotationSpeed = networkSyncData.props.RotationSpeed;
  }

  // Properties:
  
  _getRotationSpeed() {
    return this._behaviorData.RotationSpeed !== undefined ? this._behaviorData.RotationSpeed : Number("60") || 0;
  }
  _setRotationSpeed(newValue) {
    this._behaviorData.RotationSpeed = newValue;
  }
}

/**
 * Shared data generated from Collectible
 */
gdjs.evtsExt__Collectible__Collectible.Collectible.SharedData = class CollectibleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Collectible__Collectible.Collectible.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Collectible_CollectibleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Collectible_CollectibleSharedData = new gdjs.evtsExt__Collectible__Collectible.Collectible.SharedData(
      initialData
    );
  }
  return instanceContainer._Collectible_CollectibleSharedData;
}

// Methods:
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext = {};
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.idToCallbackMap = new Map();
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects1= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects2= [];


gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "CoinPickUp", false, 50, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber());
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).mul(1.03);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RisingPitch");
}
}

}


};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collectible"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collectible"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.onDestroyContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1[i].rotate(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationSpeed(), runtimeScene);
}
}
}

}


};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Collectible"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Collectible"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Collectible__Collectible.Collectible.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Collectible::Collectible", gdjs.evtsExt__Collectible__Collectible.Collectible);
