gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDStartMarkerObjects1= [];
gdjs.GameCode.GDStartMarkerObjects2= [];
gdjs.GameCode.GDStartMarkerObjects3= [];
gdjs.GameCode.GDStartMarkerObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundElevatedObjects1= [];
gdjs.GameCode.GDGroundElevatedObjects2= [];
gdjs.GameCode.GDGroundElevatedObjects3= [];
gdjs.GameCode.GDGroundElevatedObjects4= [];
gdjs.GameCode.GDSpikeGroupObjects1= [];
gdjs.GameCode.GDSpikeGroupObjects2= [];
gdjs.GameCode.GDSpikeGroupObjects3= [];
gdjs.GameCode.GDSpikeGroupObjects4= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinObjects4= [];
gdjs.GameCode.GDScoreLabelObjects1= [];
gdjs.GameCode.GDScoreLabelObjects2= [];
gdjs.GameCode.GDScoreLabelObjects3= [];
gdjs.GameCode.GDScoreLabelObjects4= [];
gdjs.GameCode.GDHighScoreLabelObjects1= [];
gdjs.GameCode.GDHighScoreLabelObjects2= [];
gdjs.GameCode.GDHighScoreLabelObjects3= [];
gdjs.GameCode.GDHighScoreLabelObjects4= [];
gdjs.GameCode.GDCoinExplosionObjects1= [];
gdjs.GameCode.GDCoinExplosionObjects2= [];
gdjs.GameCode.GDCoinExplosionObjects3= [];
gdjs.GameCode.GDCoinExplosionObjects4= [];
gdjs.GameCode.GDHeartsLabelObjects1= [];
gdjs.GameCode.GDHeartsLabelObjects2= [];
gdjs.GameCode.GDHeartsLabelObjects3= [];
gdjs.GameCode.GDHeartsLabelObjects4= [];
gdjs.GameCode.GDLockedTextObjects1= [];
gdjs.GameCode.GDLockedTextObjects2= [];
gdjs.GameCode.GDLockedTextObjects3= [];
gdjs.GameCode.GDLockedTextObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HighScoreLabel"), gdjs.GameCode.GDHighScoreLabelObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/HighScore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.GameCode.GDHighScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreLabelObjects2[i].getBehavior("Text").setText("Highscore: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects3ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects3, "GroundElevated": gdjs.GameCode.GDGroundElevatedObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2, "GroundElevated": gdjs.GameCode.GDGroundElevatedObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateForwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, null) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, null);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, null) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, null);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects3ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getX()), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getY()), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getZ()) + 2, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getX()), (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getY()) + 160, (( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getZ()) + 2, null));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("LaneCharacter").MoveRight(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", null);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, null) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, null);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__Raycaster3D__RaycastBetweenPosition.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2ObjectsGDgdjs_9546GameCode_9546GDGroundElevatedObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getY()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getZ()) + 2, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getY()) - 160, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getZ()) + 2, null));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("LaneCharacter").MoveLeft(null);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinExplosionObjects2Objects = Hashtable.newFrom({"CoinExplosion": gdjs.GameCode.GDCoinExplosionObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, 75, true, null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.GameCode.GDScoreLabelObjects2);
gdjs.GameCode.GDCoinExplosionObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreLabelObjects2[i].getBehavior("Text").setText("Coins: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) * 1.003);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinExplosionObjects2Objects, (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDCoinExplosionObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinExplosionObjects2[i].getBehavior("Object3D").setCenterZInScene((( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getBehavior("Object3D").getCenterZInScene()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCoinExplosionObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinExplosionObjects2[i].getBehavior("Object3D").setRotationY(-90);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpikeGroupObjects1Objects = Hashtable.newFrom({"SpikeGroup": gdjs.GameCode.GDSpikeGroupObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Object3D").getZ() < -50 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("GameOver");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.GameCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpikeGroupObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, 75, true, null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("GameOver");
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.asyncCallback18796652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18796652, gdjs.GameCode.asyncCallback18796652);
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18796652(runtimeScene, asyncObjectsList)), 18796652, asyncObjectsList);
}
}

}


};gdjs.GameCode.asyncCallback18797388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18797388, gdjs.GameCode.asyncCallback18797388);
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback18797388(runtimeScene, asyncObjectsList)), 18797388, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.GameCode.GDScoreLabelObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("GameHighscore", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/HighScore", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.GameCode.GDScoreLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreLabelObjects2[i].setColor("248;231;28");
}
}

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18794740);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "DeathSound", false, 50, 0.7);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.eventsList9(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects = Hashtable.newFrom({"StartMarker": gdjs.GameCode.GDStartMarkerObjects2});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getY()), false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Layout" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 9)), (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointX("")) + 2048, (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointY("")), 0);
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartMarker"), gdjs.GameCode.GDStartMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDStartMarkerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDStartMarkerObjects2[i].getX() < (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDStartMarkerObjects2[k] = gdjs.GameCode.GDStartMarkerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDStartMarkerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDStartMarkerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStartMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.GameCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects1[k] = gdjs.GameCode.GDGroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects1[k] = gdjs.GameCode.GDGroundElevatedObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSpikeGroupObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpikeGroupObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSpikeGroupObjects1[k] = gdjs.GameCode.GDSpikeGroupObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpikeGroupObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCoinObjects1[k] = gdjs.GameCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
/* Reuse gdjs.GameCode.GDGroundObjects1 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects1 */
/* Reuse gdjs.GameCode.GDSpikeGroupObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDSpikeGroupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpikeGroupObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.userFunc0xac5438 = function GDJSInlineCode(runtimeScene) {
"use strict";
var playerScore = runtimeScene.getGame().getVariables().get("TotalScore").getAsNumber();
if (playerScore > 0 && window.TsunamiGame) {
  window.TsunamiGame.submitScore(playerScore);
}


};
gdjs.GameCode.asyncCallback18807884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(18807884, gdjs.GameCode.asyncCallback18807884);
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameCode.asyncCallback18807884(runtimeScene, asyncObjectsList)), 18807884, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() <= 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "GameOver");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18801444);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/TotalScore", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{


gdjs.GameCode.userFunc0xac5438(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/Hearts", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Status", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) + "/TotalScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HeartsLabel"), gdjs.GameCode.GDHeartsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreLabel"), gdjs.GameCode.GDHighScoreLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreLabel"), gdjs.GameCode.GDScoreLabelObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHeartsLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeartsLabelObjects1[i].getBehavior("Text").setText("Lives: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber()) + "/5");
}
}
{for(var i = 0, len = gdjs.GameCode.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreLabelObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.GameCode.GDHighScoreLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreLabelObjects1[i].getBehavior("Text").setText("Highscore: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI", 0, 0, 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("Playing");
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, null);
}
{gdjs.evtsExt__SwipeGesture__SetLayer.func(runtimeScene, "UI", null);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(1.3);
}
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Playing");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "GameOver");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDStartMarkerObjects1.length = 0;
gdjs.GameCode.GDStartMarkerObjects2.length = 0;
gdjs.GameCode.GDStartMarkerObjects3.length = 0;
gdjs.GameCode.GDStartMarkerObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundElevatedObjects1.length = 0;
gdjs.GameCode.GDGroundElevatedObjects2.length = 0;
gdjs.GameCode.GDGroundElevatedObjects3.length = 0;
gdjs.GameCode.GDGroundElevatedObjects4.length = 0;
gdjs.GameCode.GDSpikeGroupObjects1.length = 0;
gdjs.GameCode.GDSpikeGroupObjects2.length = 0;
gdjs.GameCode.GDSpikeGroupObjects3.length = 0;
gdjs.GameCode.GDSpikeGroupObjects4.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinObjects4.length = 0;
gdjs.GameCode.GDScoreLabelObjects1.length = 0;
gdjs.GameCode.GDScoreLabelObjects2.length = 0;
gdjs.GameCode.GDScoreLabelObjects3.length = 0;
gdjs.GameCode.GDScoreLabelObjects4.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects1.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects2.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects3.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects4.length = 0;
gdjs.GameCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameCode.GDHeartsLabelObjects1.length = 0;
gdjs.GameCode.GDHeartsLabelObjects2.length = 0;
gdjs.GameCode.GDHeartsLabelObjects3.length = 0;
gdjs.GameCode.GDHeartsLabelObjects4.length = 0;
gdjs.GameCode.GDLockedTextObjects1.length = 0;
gdjs.GameCode.GDLockedTextObjects2.length = 0;
gdjs.GameCode.GDLockedTextObjects3.length = 0;
gdjs.GameCode.GDLockedTextObjects4.length = 0;

gdjs.GameCode.eventsList17(runtimeScene);
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDStartMarkerObjects1.length = 0;
gdjs.GameCode.GDStartMarkerObjects2.length = 0;
gdjs.GameCode.GDStartMarkerObjects3.length = 0;
gdjs.GameCode.GDStartMarkerObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundElevatedObjects1.length = 0;
gdjs.GameCode.GDGroundElevatedObjects2.length = 0;
gdjs.GameCode.GDGroundElevatedObjects3.length = 0;
gdjs.GameCode.GDGroundElevatedObjects4.length = 0;
gdjs.GameCode.GDSpikeGroupObjects1.length = 0;
gdjs.GameCode.GDSpikeGroupObjects2.length = 0;
gdjs.GameCode.GDSpikeGroupObjects3.length = 0;
gdjs.GameCode.GDSpikeGroupObjects4.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinObjects4.length = 0;
gdjs.GameCode.GDScoreLabelObjects1.length = 0;
gdjs.GameCode.GDScoreLabelObjects2.length = 0;
gdjs.GameCode.GDScoreLabelObjects3.length = 0;
gdjs.GameCode.GDScoreLabelObjects4.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects1.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects2.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects3.length = 0;
gdjs.GameCode.GDHighScoreLabelObjects4.length = 0;
gdjs.GameCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameCode.GDHeartsLabelObjects1.length = 0;
gdjs.GameCode.GDHeartsLabelObjects2.length = 0;
gdjs.GameCode.GDHeartsLabelObjects3.length = 0;
gdjs.GameCode.GDHeartsLabelObjects4.length = 0;
gdjs.GameCode.GDLockedTextObjects1.length = 0;
gdjs.GameCode.GDLockedTextObjects2.length = 0;
gdjs.GameCode.GDLockedTextObjects3.length = 0;
gdjs.GameCode.GDLockedTextObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
